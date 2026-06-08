# -*- coding: utf-8 -*-
import hashlib
import hmac
import json
import mimetypes
import os
import re
import secrets
import sqlite3
import unicodedata
from datetime import datetime
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
DB_PATH = ROOT / "brewers.sqlite3"
STATUSES = ["Novo", "Em preparo", "Pronto", "Entregue"]
STAFF_MASTER_CODES = {
    "482917": "Luis",
    "736204": "Bianca",
    "159683": "Ana",
    "904571": "Carol",
}

SEED_PRODUCTS = [
    ("espresso", "Espresso", "Bebidas Quentes", "Uma dose de café espresso. Sabor intenso e aromático.", 8.0, "50ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/espresso.png", "3 — Detalhe / Espresso"),
    ("cafe-coado", "Café coado", "Bebidas Quentes", "Extração no método V60, corpo limpo e aromático.", 10.0, "100ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/cafe-coado.png", "3 — Detalhe / Café Coado"),
    ("capuccino-italiano", "Capuccino italiano", "Bebidas Quentes", "Uma dose de café espresso com leite vaporizado, finalizado com canela.", 14.0, "150ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/capuccino-italiano.png", "3 — Detalhe do Item"),
    ("latte", "Latte", "Bebidas Quentes", "Uma dose de café espresso com leite vaporizado.", 12.0, "150ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/latte.png", "3 — Detalhe / Latte"),
    ("mocaccino", "Mocaccino", "Bebidas Quentes", "Uma dose de café espresso, ganache de chocolate e leite vaporizado.", 15.0, "150ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/mocaccino.png", "3 — Detalhe / Mocaccino"),
    ("espresso-macchiato", "Espresso macchiato", "Bebidas Quentes", "Duas doses de café espresso com uma pequena quantidade da crema de leite vaporizado.", 14.0, "150ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/espresso-macchiato.png", "3 — Detalhe / Espresso Macchiato"),
    ("latte-macchiato", "Latte macchiato", "Bebidas Quentes", "Leite vaporizado com meia dose de espresso.", 14.0, "150ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/latte-macchiato.png", "3 — Detalhe / Latte Macchiato"),
    ("mocaccino-gelado", "Mocaccino gelado", "Bebidas Geladas", "Uma dose de café espresso, ganache de chocolate e leite vaporizado.", 20.0, "240ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/mocaccino-gelado.png", "3 — Detalhe / Mocaccino Gelado"),
    ("latte-machiatto-gelado", "Latte machiatto", "Bebidas Geladas", "Leite vaporizado com uma dose de espresso.", 18.0, "240ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/latte-machiatto-gelado.png", "3 — Detalhe / Latte Machiatto Gelado"),
    ("latte-gelado", "Latte gelado", "Bebidas Geladas", "Duas doses de espresso com leite vaporizado.", 18.0, "240ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/latte-gelado.png", "3 — Detalhe / Latte Gelado"),
    ("capuccino-gelado", "Capuccino Gelado", "Bebidas Geladas", "Duas doses de espresso com leite vaporizado, finalizado com canela em pó.", 18.0, "240ml", ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"], "assets/capuccino-gelado.png", "3 — Detalhe / Cappuccino Gelado"),
    ("cold-brew", "Cold Brew", "Bebidas Geladas", "Extração lenta de 12h a 15h.", 17.0, "240ml", ["Com limão", "Com Laranja", "Com gengibre"], "assets/cold-brew.png", "3 — Detalhe do Item G"),
    ("misto-quente", "Misto quente", "Salgados", "Pão, requeijão, presunto cru e queijo mussarela.", 14.0, "", [], "assets/misto-quente.png", "3 — Detalhe / Misto Quente"),
    ("pao-na-chapa", "Pão na chapa", "Salgados", "Pão francês grelhado na chapa com manteiga.", 7.0, "", [], "assets/pao-na-chapa.png", "3 — Detalhe / Pão na Chapa"),
    ("pao-de-queijo", "Pão de queijo", "Salgados", "Tradicional pão de queijo mineiro, quentinho e crocante.", 5.0, "", [], "assets/pao-de-queijo.png", "3 — Detalhe / Pão de Queijo"),
    ("trufa-de-chocolate", "Trufa de chocolate", "Doces", "Trufa artesanal de chocolate meio amargo.", 6.0, "", [], "assets/trufa-de-chocolate.png", "3 — Detalhe / Trufa de Chocolate"),
    ("bolo-de-cenoura", "Bolo de cenoura com chocolate", "Doces", "Fofinho bolo de cenoura coberto com calda de chocolate.", 15.0, "", [], "assets/bolo-de-cenoura.png", "3 — Detalhe / Bolo de Cenoura com Chocolate"),
    ("brownie-artesanal", "Brownie artesanal", "Doces", "Brownie artesanal de chocolate amargo.", 10.0, "", [], "assets/brownie-artesanal.png", "3 — Detalhe / Brownie Artesanal"),
]

SEED_ORDERS = [
    ("Mesa 3", "Cappuccino × 2, Pão de queijo", "14:31", "Novo", [("capuccino-italiano", "Cappuccino", "", 2, 14.0), ("pao-de-queijo", "Pão de queijo", "", 1, 5.0)]),
    ("Mesa 7", "Cold Brew × 1, Croissant × 1", "14:28", "Em preparo", [("cold-brew", "Cold Brew", "Com limão", 1, 17.0), ("misto-quente", "Croissant", "", 1, 12.0)]),
    ("Mesa 1", "Espresso × 3", "14:27", "Novo", [("espresso", "Espresso", "", 3, 8.0)]),
    ("Mesa 5", "Latte × 2, Bolo de laranja × 2", "14:20", "Em preparo", [("latte", "Latte", "Integral", 2, 12.0), ("bolo-de-cenoura", "Bolo de laranja", "", 2, 12.0)]),
    ("Mesa 9", "Mocha × 1, Affogato × 1", "14:15", "Pronto", [("mocaccino", "Mocha", "Integral", 1, 15.0), ("trufa-de-chocolate", "Affogato", "", 1, 10.0)]),
    ("Mesa 2", "Flat White × 2", "14:10", "Entregue", [("latte-macchiato", "Flat White", "Integral", 2, 14.0)]),
]


def connect():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with connect() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS products (
                id TEXT PRIMARY KEY,
                nome TEXT NOT NULL,
                categoria TEXT NOT NULL,
                descricao TEXT NOT NULL,
                preco REAL NOT NULL,
                tamanho TEXT NOT NULL DEFAULT '',
                opcoes TEXT NOT NULL DEFAULT '[]',
                imagem TEXT NOT NULL DEFAULT '',
                frame TEXT NOT NULL DEFAULT ''
            );

            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                mesa TEXT NOT NULL,
                status TEXT NOT NULL,
                hora TEXT NOT NULL,
                subtotal REAL NOT NULL,
                service REAL NOT NULL,
                total REAL NOT NULL,
                notes TEXT NOT NULL DEFAULT '',
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS order_items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
                product_id TEXT NOT NULL,
                nome TEXT NOT NULL,
                option_text TEXT NOT NULL DEFAULT '',
                quantity INTEGER NOT NULL,
                unit_price REAL NOT NULL,
                notes TEXT NOT NULL DEFAULT ''
            );

            CREATE TABLE IF NOT EXISTS clients (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                cpf TEXT NOT NULL,
                celular TEXT NOT NULL,
                nascimento TEXT NOT NULL,
                endereco TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS cash_state (
                id INTEGER PRIMARY KEY CHECK (id = 1),
                is_open INTEGER NOT NULL,
                balance REAL NOT NULL,
                updated_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS staff_users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                password_hash TEXT NOT NULL,
                password_salt TEXT NOT NULL,
                authorized_by TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
            """
        )

        if conn.execute("SELECT COUNT(*) FROM products").fetchone()[0] == 0:
            conn.executemany(
                """
                INSERT INTO products (id, nome, categoria, descricao, preco, tamanho, opcoes, imagem, frame)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                [(p[0], p[1], p[2], p[3], p[4], p[5], json.dumps(p[6], ensure_ascii=False), p[7], p[8]) for p in SEED_PRODUCTS],
            )

        if conn.execute("SELECT COUNT(*) FROM orders").fetchone()[0] == 0:
            for mesa, _summary, hora, status, items in SEED_ORDERS:
                subtotal = sum(qty * price for *_rest, qty, price in items)
                service = round(subtotal * 0.1, 2)
                cur = conn.execute(
                    "INSERT INTO orders (mesa, status, hora, subtotal, service, total, notes) VALUES (?, ?, ?, ?, ?, ?, '')",
                    (mesa, status, hora, subtotal, service, subtotal + service),
                )
                order_id = cur.lastrowid
                conn.executemany(
                    """
                    INSERT INTO order_items (order_id, product_id, nome, option_text, quantity, unit_price, notes)
                    VALUES (?, ?, ?, ?, ?, ?, '')
                    """,
                    [(order_id, product_id, nome, option, qty, price) for product_id, nome, option, qty, price in items],
                )

        if conn.execute("SELECT COUNT(*) FROM clients").fetchone()[0] == 0:
            conn.executemany(
                "INSERT INTO clients (nome, cpf, celular, nascimento, endereco) VALUES (?, ?, ?, ?, ?)",
                [
                    ("Luis Gustavo Freitas", "123.xxx.xxx-52", "(43) 9 1644-4645", "13/03/2007", "R. Marialvence, 140, Maringá, Paraná"),
                    ("Maria Lucia Gonzaga", "158.xxx.xxx-90", "(44) 9 5516-6358", "25/12/1996", "R. Mario e Luigi, 6, Maringá, Paraná"),
                ],
            )

        conn.execute(
            """
            INSERT INTO cash_state (id, is_open, balance, updated_at)
            VALUES (1, 0, 0, ?)
            ON CONFLICT(id) DO NOTHING
            """,
            (datetime.now().isoformat(timespec="seconds"),),
        )


def product_from_row(row):
    return {
        "id": row["id"],
        "nome": row["nome"],
        "categoria": row["categoria"],
        "descricao": row["descricao"],
        "preco": row["preco"],
        "tamanho": row["tamanho"],
        "opcoes": json.loads(row["opcoes"] or "[]"),
        "imagem": row["imagem"],
        "frame": row["frame"],
    }


def order_from_row(conn, row):
    items = conn.execute("SELECT * FROM order_items WHERE order_id = ? ORDER BY id", (row["id"],)).fetchall()
    summary = ", ".join([f"{item['nome']} × {item['quantity']}" for item in items])
    return {
        "id": row["id"],
        "mesa": row["mesa"],
        "status": row["status"],
        "hora": row["hora"],
        "subtotal": row["subtotal"],
        "service": row["service"],
        "total": row["total"],
        "notes": row["notes"],
        "items_summary": summary,
        "items": [
            {
                "id": item["id"],
                "product_id": item["product_id"],
                "nome": item["nome"],
                "option": item["option_text"],
                "quantity": item["quantity"],
                "unit_price": item["unit_price"],
                "notes": item["notes"],
            }
            for item in items
        ],
    }


def clean_name_part(value):
    return re.sub(r"\s+", " ", str(value or "").strip())


def compact_name_parts(first_name, last_name):
    tokens = [part for part in f"{clean_name_part(first_name)} {clean_name_part(last_name)}".split(" ") if part]
    first = tokens[0] if tokens else ""
    last = tokens[-1] if len(tokens) > 1 else ""
    return first, last


def normalize_plain_text(value):
    text = unicodedata.normalize("NFD", str(value or ""))
    text = "".join(char for char in text if unicodedata.category(char) != "Mn")
    return text.strip().lower()


def normalize_staff_username(value):
    text = normalize_plain_text(value)
    text = re.sub(r"^@+", "", text)
    text = re.sub(r"@brewers$", "", text)
    text = re.sub(r"\s+", ".", text)
    text = re.sub(r"[^a-z0-9._-]", "", text)
    text = re.sub(r"\.+", ".", text)
    return re.sub(r"^[._-]+|[._-]+$", "", text)


def staff_username_from_name(first_name, last_name):
    first, last = compact_name_parts(first_name, last_name)
    return normalize_staff_username(f"{first}.{last}")


def validate_staff_password(password):
    if len(password) < 6:
        return "A senha deve ter no mínimo 6 caracteres."
    if not re.search(r"[A-ZÁÉÍÓÚÂÊÔÃÕÇ]", password):
        return "A senha deve conter pelo menos uma letra maiúscula."
    if not re.search(r"[a-záéíóúâêôãõç]", password):
        return "A senha deve conter pelo menos uma letra minúscula."
    if not re.search(r"\d", password):
        return "A senha deve conter pelo menos um número."
    if not re.search(r"[^A-Za-zÀ-ÿ0-9]", password):
        return "A senha deve conter pelo menos um caractere especial."
    return ""


def hash_password(password, salt=None):
    salt = salt or secrets.token_hex(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), bytes.fromhex(salt), 120000)
    return digest.hex(), salt


def verify_password(password, stored_hash, salt):
    digest, _salt = hash_password(password, salt)
    return hmac.compare_digest(digest, stored_hash)


def staff_user_from_row(row):
    return {
        "id": row["id"],
        "username": row["username"],
        "firstName": row["first_name"],
        "lastName": row["last_name"],
        "subtitle": f"Autorizado por {row['authorized_by']}",
        "authorizedBy": row["authorized_by"],
    }


class BrewersHandler(SimpleHTTPRequestHandler):
    server_version = "BrewersHTTP/1.0"

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path.startswith("/api/"):
            self.handle_api_get(parsed.path)
            return
        self.serve_static(parsed.path)

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path.startswith("/api/"):
            self.handle_api_write("POST", parsed.path)
            return
        self.send_error(404)

    def do_PATCH(self):
        parsed = urlparse(self.path)
        if parsed.path.startswith("/api/"):
            self.handle_api_write("PATCH", parsed.path)
            return
        self.send_error(404)

    def serve_static(self, request_path):
        path = "/index.html" if request_path in ("", "/") else request_path
        file_path = (ROOT / path.lstrip("/")).resolve()
        if not str(file_path).startswith(str(ROOT)) or not file_path.exists() or not file_path.is_file():
            self.send_error(404)
            return
        content_type = mimetypes.guess_type(file_path.name)[0] or "application/octet-stream"
        if content_type.startswith("text/") or content_type == "application/javascript":
            content_type = f"{content_type}; charset=utf-8"
        data = file_path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def read_json(self):
        length = int(self.headers.get("Content-Length", 0))
        if not length:
            return {}
        return json.loads(self.rfile.read(length).decode("utf-8"))

    def send_json(self, payload, status=200):
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def handle_api_get(self, path):
        with connect() as conn:
            if path == "/api/health":
                self.send_json({"ok": True})
            elif path == "/api/products":
                rows = conn.execute("SELECT * FROM products ORDER BY categoria, nome").fetchall()
                self.send_json({"products": [product_from_row(row) for row in rows]})
            elif path == "/api/orders":
                rows = conn.execute("SELECT * FROM orders ORDER BY id DESC").fetchall()
                self.send_json({"orders": [order_from_row(conn, row) for row in rows]})
            elif path == "/api/clients":
                rows = conn.execute("SELECT * FROM clients ORDER BY nome").fetchall()
                self.send_json({"clients": [dict(row) for row in rows]})
            elif path == "/api/cash":
                row = conn.execute("SELECT * FROM cash_state WHERE id = 1").fetchone()
                self.send_json({"is_open": bool(row["is_open"]), "balance": row["balance"], "updated_at": row["updated_at"]})
            elif path == "/api/staff-users":
                rows = conn.execute("SELECT * FROM staff_users ORDER BY first_name, last_name").fetchall()
                self.send_json({"users": [staff_user_from_row(row) for row in rows]})
            else:
                self.send_json({"error": "Not found"}, 404)

    def handle_api_write(self, method, path):
        body = self.read_json()
        with connect() as conn:
            if method == "POST" and path == "/api/orders":
                self.create_order(conn, body)
            elif method == "PATCH" and path.startswith("/api/orders/") and path.endswith("/status"):
                order_id = int(path.split("/")[3])
                self.update_order_status(conn, order_id, body)
            elif method == "POST" and path == "/api/cash/open":
                balance = float(body.get("balance") or 0)
                conn.execute("UPDATE cash_state SET is_open = 1, balance = ?, updated_at = ? WHERE id = 1", (balance, datetime.now().isoformat(timespec="seconds")))
                self.send_json({"is_open": True, "balance": balance})
            elif method == "POST" and path == "/api/cash/close":
                conn.execute("UPDATE cash_state SET is_open = 0, updated_at = ? WHERE id = 1", (datetime.now().isoformat(timespec="seconds"),))
                self.send_json({"is_open": False})
            elif method == "POST" and path == "/api/products":
                self.create_product(conn, body)
            elif method == "POST" and path == "/api/clients":
                cur = conn.execute(
                    "INSERT INTO clients (nome, cpf, celular, nascimento, endereco) VALUES (?, ?, ?, ?, ?)",
                    (body.get("nome", ""), body.get("cpf", ""), body.get("celular", ""), body.get("nascimento", ""), body.get("endereco", "")),
                )
                self.send_json({"id": cur.lastrowid}, 201)
            elif method == "POST" and path == "/api/staff/register":
                self.create_staff_user(conn, body)
            elif method == "POST" and path == "/api/staff/login":
                self.login_staff_user(conn, body)
            else:
                self.send_json({"error": "Not found"}, 404)

    def create_staff_user(self, conn, body):
        first_name = clean_name_part(body.get("firstName"))
        last_name = clean_name_part(body.get("lastName"))
        password = str(body.get("password") or "")
        manager_code = str(body.get("managerCode") or "").strip()

        if not first_name or not last_name or not password or not manager_code:
            self.send_json({"error": "Preencha nome, sobrenome, senha e código."}, 400)
            return

        if not re.fullmatch(r"\d{6}", manager_code):
            self.send_json({"error": "O código do gestor master deve ter exatamente 6 dígitos."}, 400)
            return

        authorized_by = STAFF_MASTER_CODES.get(manager_code)
        if not authorized_by:
            self.send_json({"error": "Código de gestor master inválido."}, 400)
            return

        password_error = validate_staff_password(password)
        if password_error:
            self.send_json({"error": password_error}, 400)
            return

        compact_first, compact_last = compact_name_parts(first_name, last_name)
        username = normalize_staff_username(body.get("username")) or staff_username_from_name(first_name, last_name)
        if not username or username != staff_username_from_name(compact_first, compact_last):
            username = staff_username_from_name(compact_first, compact_last)

        if not username:
            self.send_json({"error": "Não foi possível criar o usuário. Revise nome e sobrenome."}, 400)
            return

        if conn.execute("SELECT 1 FROM staff_users WHERE username = ?", (username,)).fetchone():
            self.send_json({"error": f"Esse acesso já existe. Entre com o usuário {username}."}, 409)
            return

        password_digest, salt = hash_password(password)
        cur = conn.execute(
            """
            INSERT INTO staff_users (username, first_name, last_name, password_hash, password_salt, authorized_by)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (username, compact_first, compact_last, password_digest, salt, authorized_by),
        )
        row = conn.execute("SELECT * FROM staff_users WHERE id = ?", (cur.lastrowid,)).fetchone()
        self.send_json({"user": staff_user_from_row(row)}, 201)

    def login_staff_user(self, conn, body):
        username = normalize_staff_username(body.get("username"))
        password = str(body.get("password") or "")
        if not username or not password:
            self.send_json({"error": "Preencha usuário e senha."}, 400)
            return

        row = conn.execute("SELECT * FROM staff_users WHERE username = ?", (username,)).fetchone()
        if not row:
            self.send_json({"error": "Usuário não cadastrado. Faça o primeiro acesso com código de gestor."}, 404)
            return

        if not verify_password(password, row["password_hash"], row["password_salt"]):
            self.send_json({"error": "Senha incorreta."}, 401)
            return

        self.send_json({"user": staff_user_from_row(row)})

    def create_order(self, conn, body):
        items = body.get("items", [])
        if not items:
            self.send_json({"error": "Pedido sem itens"}, 400)
            return
        subtotal = sum(float(item["unit_price"]) * int(item["quantity"]) for item in items)
        service = round(subtotal * 0.1, 2)
        hora = datetime.now().strftime("%H:%M")
        cur = conn.execute(
            "INSERT INTO orders (mesa, status, hora, subtotal, service, total, notes) VALUES (?, 'Novo', ?, ?, ?, ?, ?)",
            (body.get("mesa", "Mesa 7"), hora, subtotal, service, subtotal + service, body.get("notes", "")),
        )
        order_id = cur.lastrowid
        conn.executemany(
            """
            INSERT INTO order_items (order_id, product_id, nome, option_text, quantity, unit_price, notes)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            [
                (
                    order_id,
                    item.get("product_id", ""),
                    item.get("nome", ""),
                    item.get("option", ""),
                    int(item.get("quantity", 1)),
                    float(item.get("unit_price", 0)),
                    item.get("notes", ""),
                )
                for item in items
            ],
        )
        row = conn.execute("SELECT * FROM orders WHERE id = ?", (order_id,)).fetchone()
        self.send_json({"order": order_from_row(conn, row)}, 201)

    def update_order_status(self, conn, order_id, body):
        row = conn.execute("SELECT * FROM orders WHERE id = ?", (order_id,)).fetchone()
        if not row:
            self.send_json({"error": "Pedido não encontrado"}, 404)
            return
        current = row["status"]
        next_status = body.get("status")
        if not next_status:
            idx = min(STATUSES.index(current) + 1, len(STATUSES) - 1)
            next_status = STATUSES[idx]
        conn.execute("UPDATE orders SET status = ? WHERE id = ?", (next_status, order_id))
        row = conn.execute("SELECT * FROM orders WHERE id = ?", (order_id,)).fetchone()
        self.send_json({"order": order_from_row(conn, row)})

    def create_product(self, conn, body):
        product_id = body.get("id") or body.get("nome", "produto").lower().replace(" ", "-")
        conn.execute(
            """
            INSERT OR REPLACE INTO products (id, nome, categoria, descricao, preco, tamanho, opcoes, imagem, frame)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                product_id,
                body.get("nome", "Novo produto"),
                body.get("categoria", "Bebidas Quentes"),
                body.get("descricao", ""),
                float(body.get("preco") or 0),
                body.get("tamanho", ""),
                json.dumps(body.get("opcoes", []), ensure_ascii=False),
                body.get("imagem", "assets/placeholder.png"),
                body.get("frame", ""),
            ),
        )
        self.send_json({"id": product_id}, 201)


def main():
    os.chdir(ROOT)
    init_db()
    port = int(os.environ.get("PORT", "8000"))
    server = ThreadingHTTPServer(("127.0.0.1", port), BrewersHandler)
    try:
        print(f"Brewers rodando em http://127.0.0.1:{port}")
        print(f"Banco SQLite: {DB_PATH}")
    except Exception:
        pass
    server.serve_forever()


if __name__ == "__main__":
    main()
