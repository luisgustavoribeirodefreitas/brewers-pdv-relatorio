const categories = ["Bebidas Quentes", "Bebidas Geladas", "Salgados", "Doces"];
const staffTables = Array.from({ length: 12 }, (_, i) => `Mesa ${i + 1}`);
function randomTable() {
  return staffTables[Math.floor(Math.random() * staffTables.length)];
}
const productDisplayOrder = {
  "Bebidas Quentes": ["espresso", "cafe-coado", "capuccino-italiano", "latte", "mocaccino", "espresso-macchiato", "latte-macchiato"],
  "Bebidas Geladas": ["mocaccino-gelado", "latte-machiatto-gelado", "latte-gelado", "capuccino-gelado", "cold-brew"],
  Salgados: ["misto-quente", "pao-na-chapa", "pao-de-queijo"],
  Doces: ["brownie-artesanal", "bolo-de-cenoura", "trufa-de-chocolate"]
};
const staffNav = [
  { id: "overview", label: "Visão Geral", icon: "overview", asset: "assets/icon-nav-overview.svg" },
  { id: "orders", label: "Pedidos", icon: "orders", asset: "assets/icon-nav-orders.svg" },
  { id: "clients", label: "Clientes", icon: "clients", asset: "assets/icon-nav-clients.svg" },
  { id: "reports", label: "Relatórios", icon: "reports", asset: "assets/icon-nav-reports.svg" },
  { id: "menu", label: "Cardápio", icon: "menu", asset: "assets/icon-nav-menu.svg" },
  { id: "settings", label: "Configurações", icon: "settings", asset: "assets/icon-nav-settings.svg" }
];
const orderStatusFlow = ["Novo", "Em preparo", "Pronto", "Entregue"];
const API_BASE = window.location.protocol === "file:" ? "http://127.0.0.1:8000" : "";
let apiOnline = false;
const STAFF_MASTER_CODES = {
  482917: "Luis",
  736204: "Bianca",
  159683: "Ana",
  904571: "Carol"
};
const LEGACY_STAFF_STORAGE_KEYS = ["brewersStaffUsers", "brewersStaffSession"];

let products = [
  {
    id: "espresso",
    nome: "Espresso",
    categoria: "Bebidas Quentes",
    descricao: "Uma dose de café espresso. Sabor intenso e aromático.",
    preco: 8,
    tamanho: "50ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/espresso.png",
    frame: "3 — Detalhe / Espresso"
  },
  {
    id: "cafe-coado",
    nome: "Café coado",
    categoria: "Bebidas Quentes",
    descricao: "Extração no método V60, corpo limpo e aromático.",
    preco: 10,
    tamanho: "100ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/cafe-coado.png",
    frame: "3 — Detalhe / Café Coado"
  },
  {
    id: "capuccino-italiano",
    nome: "Capuccino italiano",
    categoria: "Bebidas Quentes",
    descricao: "Uma dose de café espresso com leite vaporizado, finalizado com canela.",
    preco: 14,
    tamanho: "150ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/capuccino-italiano.png",
    frame: "3 — Detalhe do Item",
    observacaoFigma: "A tela de detalhe mostra R$ 12,00; o cardápio e carrinho mostram R$ 14,00."
  },
  {
    id: "latte",
    nome: "Latte",
    categoria: "Bebidas Quentes",
    descricao: "Uma dose de café espresso com leite vaporizado.",
    preco: 12,
    tamanho: "150ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/latte.png",
    frame: "3 — Detalhe / Latte"
  },
  {
    id: "mocaccino",
    nome: "Mocaccino",
    categoria: "Bebidas Quentes",
    descricao: "Uma dose de café espresso, ganache de chocolate e leite vaporizado.",
    preco: 15,
    tamanho: "150ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/mocaccino.png",
    frame: "3 — Detalhe / Mocaccino"
  },
  {
    id: "espresso-macchiato",
    nome: "Espresso macchiato",
    categoria: "Bebidas Quentes",
    descricao: "Duas doses de café espresso com uma pequena quantidade da crema de leite vaporizado.",
    preco: 14,
    tamanho: "150ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/espresso-macchiato.png",
    frame: "3 — Detalhe / Espresso Macchiato"
  },
  {
    id: "latte-macchiato",
    nome: "Latte macchiato",
    categoria: "Bebidas Quentes",
    descricao: "Leite vaporizado com meia dose de espresso.",
    preco: 14,
    tamanho: "150ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/latte-macchiato.png",
    frame: "3 — Detalhe / Latte Macchiato"
  },
  {
    id: "mocaccino-gelado",
    nome: "Mocaccino gelado",
    categoria: "Bebidas Geladas",
    descricao: "Uma dose de café espresso, ganache de chocolate e leite vaporizado.",
    preco: 20,
    tamanho: "240ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/mocaccino-gelado.png",
    frame: "3 — Detalhe / Mocaccino Gelado"
  },
  {
    id: "latte-machiatto-gelado",
    nome: "Latte machiatto",
    categoria: "Bebidas Geladas",
    descricao: "Leite vaporizado com uma dose de espresso.",
    preco: 18,
    tamanho: "240ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/latte-machiatto-gelado.png",
    frame: "3 — Detalhe / Latte Machiatto Gelado"
  },
  {
    id: "latte-gelado",
    nome: "Latte gelado",
    categoria: "Bebidas Geladas",
    descricao: "Duas doses de espresso com leite vaporizado.",
    preco: 18,
    tamanho: "240ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/latte-gelado.png",
    frame: "3 — Detalhe / Latte Gelado"
  },
  {
    id: "capuccino-gelado",
    nome: "Capuccino Gelado",
    categoria: "Bebidas Geladas",
    descricao: "Duas doses de espresso com leite vaporizado, finalizado com canela em pó.",
    preco: 18,
    tamanho: "240ml",
    opcoes: ["Integral", "Vegetal | + R$2", "Sem Lactose | + R$2"],
    imagem: "assets/capuccino-gelado.png",
    frame: "3 — Detalhe / Cappuccino Gelado"
  },
  {
    id: "cold-brew",
    nome: "Cold Brew",
    categoria: "Bebidas Geladas",
    descricao: "Extração lenta de 12h a 15h.",
    preco: 17,
    tamanho: "240ml",
    opcoes: ["Com limão", "Com Laranja", "Com gengibre"],
    imagem: "assets/cold-brew.png",
    frame: "3 — Detalhe do Item G"
  },
  {
    id: "misto-quente",
    nome: "Misto quente",
    categoria: "Salgados",
    descricao: "Pão, requeijão, presunto cru e queijo mussarela.",
    preco: 14,
    tamanho: "",
    opcoes: [],
    imagem: "assets/misto-quente.png",
    frame: "3 — Detalhe / Misto Quente"
  },
  {
    id: "pao-na-chapa",
    nome: "Pão na chapa",
    categoria: "Salgados",
    descricao: "Pão francês grelhado na chapa com manteiga.",
    preco: 7,
    tamanho: "",
    opcoes: [],
    imagem: "assets/pao-na-chapa.png",
    frame: "3 — Detalhe / Pão na Chapa"
  },
  {
    id: "pao-de-queijo",
    nome: "Pão de queijo",
    categoria: "Salgados",
    descricao: "Tradicional pão de queijo mineiro, quentinho e crocante.",
    preco: 5,
    tamanho: "",
    opcoes: [],
    imagem: "assets/pao-de-queijo.png",
    frame: "3 — Detalhe / Pão de Queijo"
  },
  {
    id: "trufa-de-chocolate",
    nome: "Trufa de chocolate",
    categoria: "Doces",
    descricao: "Trufa artesanal de chocolate meio amargo.",
    preco: 6,
    tamanho: "",
    opcoes: [],
    imagem: "assets/trufa-de-chocolate.png",
    frame: "3 — Detalhe / Trufa de Chocolate"
  },
  {
    id: "bolo-de-cenoura",
    nome: "Bolo de cenoura com chocolate",
    categoria: "Doces",
    descricao: "Fofinho bolo de cenoura coberto com calda de chocolate.",
    preco: 15,
    tamanho: "",
    opcoes: [],
    imagem: "assets/bolo-de-cenoura.png",
    frame: "3 — Detalhe / Bolo de Cenoura com Chocolate"
  },
  {
    id: "brownie-artesanal",
    nome: "Brownie artesanal",
    categoria: "Doces",
    descricao: "Brownie artesanal de chocolate amargo.",
    preco: 10,
    tamanho: "",
    opcoes: [],
    imagem: "assets/brownie-artesanal.png",
    frame: "3 — Detalhe / Brownie Artesanal"
  }
];

function normalizePlainText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function normalizeStaffUsername(value) {
  return normalizePlainText(value)
    .replace(/^@+/, "")
    .replace(/@brewers$/, "")
    .replace(/\s+/g, ".")
    .replace(/[^a-z0-9._-]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^[._-]+|[._-]+$/g, "");
}

function staffUsernameFromName(firstName, lastName) {
  const name = staffCompactNameFromParts(firstName, lastName);
  return normalizeStaffUsername(`${name.first}.${name.last}`);
}

function cleanNamePart(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ");
}

function staffCompactNameFromParts(firstName, lastName) {
  const tokens = `${cleanNamePart(firstName)} ${cleanNamePart(lastName)}`
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = tokens[0] || "";
  const last = tokens.length > 1 ? tokens[tokens.length - 1] : "";
  return { first, last };
}

function clearLegacyStaffStorage() {
  try {
    LEGACY_STAFF_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  } catch {
    // O cadastro do atendente agora vive apenas no SQLite.
  }
}

function staffPasswordRules(password) {
  return [
    { key: "length", label: "Mínimo 6 caracteres", valid: password.length >= 6, error: "A senha deve ter no mínimo 6 caracteres." },
    { key: "uppercase", label: "Uma letra maiúscula", valid: /[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/.test(password), error: "A senha deve conter pelo menos uma letra maiúscula." },
    { key: "lowercase", label: "Uma letra minúscula", valid: /[a-záéíóúâêôãõç]/.test(password), error: "A senha deve conter pelo menos uma letra minúscula." },
    { key: "number", label: "Um número", valid: /\d/.test(password), error: "A senha deve conter pelo menos um número." },
    { key: "special", label: "Um caractere especial", valid: /[^A-Za-zÀ-ÿ0-9]/.test(password), error: "A senha deve conter pelo menos um caractere especial." }
  ];
}

function renderStaffPasswordChecklist(password) {
  return staffPasswordRules(password).map((rule) => `
          <li class="${rule.valid ? "is-valid" : "is-invalid"}" data-password-rule="${rule.key}">${rule.label}</li>
  `).join("");
}

function updateStaffPasswordChecklist(form, password) {
  staffPasswordRules(password).forEach((rule) => {
    const item = form.querySelector(`[data-password-rule="${rule.key}"]`);
    if (!item) return;
    item.classList.toggle("is-valid", rule.valid);
    item.classList.toggle("is-invalid", !rule.valid);
  });
}

function validateStaffPassword(password) {
  const failingRule = staffPasswordRules(password).find((rule) => !rule.valid);
  if (failingRule) return failingRule.error;
  return "";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function staffDisplayName(user) {
  const { first: firstName, last: lastName } = staffCompactNameFromParts(user?.firstName, user?.lastName);
  return `${firstName} ${lastName}`.trim() || user?.username || "Atendente Brewers";
}

function staffSubtitle(user) {
  return user?.subtitle || (user?.authorizedBy ? `Autorizado por ${user.authorizedBy}` : "Equipe Brewers");
}

function staffInitials(user) {
  const { first: firstName, last: lastName } = staffCompactNameFromParts(user?.firstName, user?.lastName);
  const nameParts = [firstName, lastName].filter(Boolean);
  const initials = nameParts.map((part) => Array.from(part)[0]).join("").slice(0, 2);
  return initials.toUpperCase() || "BR";
}

clearLegacyStaffStorage();

const state = {
  view: window.location.hash === "#atendente" ? "staff-login" : "welcome",
  currentTable: randomTable(),
  category: "Bebidas Quentes",
  selectedProductId: null,
  detailQty: 1,
  detailOption: "",
  detailNotes: "",
  editCartId: null,
  editReturnView: null,
  selectedReason: "Tirar dúvidas",
  pendingDeleteId: null,
  lastOrderNumber: 42,
  selectedStaffOrderId: null,
  staffOrderSnapshot: null,
  staffView: "overview",
  staffModal: null,
  staffTableFlow: {
    active: false,
    isNew: false,
    table: null,
    tab: "cliente",
    selectedClientId: null,
    orderId: null,
    items: [],
    paymentMethod: "Pix",
    category: "Bebidas Quentes"
  },
  staffLoginMode: "login",
  staffLoginError: "",
  staffLoginDraft: {
    username: "",
    password: ""
  },
  staffRegisterDraft: {
    firstName: "",
    lastName: "",
    password: "",
    managerCode: ""
  },
  staffUser: null,
  cashOpen: false,
  toast: "",
  staffOrders: [],
  staffClients: [
    { nome: "Luis Gustavo Freitas", cpf: "123.xxx.xxx-52", celular: "(43) 9 1644-4645", nascimento: "13/03/2007", endereco: "R. Marialvence, 140, Maringa, Parana" },
    { nome: "Maria Lucia Gonzaga", cpf: "158.xxx.xxx-90", celular: "(44) 9 5516-6358", nascimento: "25/12/1996", endereco: "R. Mario e Luigi, 6, Maringa, Parana" }
  ],
  cart: [],
  scroll: {
    menuByCategory: {},
    cart: 0,
    staffMain: 0
  }
};

const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");

function makeCartItem(productId, option = "", quantity = 1, notes = "") {
  const product = products.find((item) => item.id === productId);
  return {
    uid: `${productId}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    productId,
    nome: product.nome,
    preco: product.preco + optionPrice(option),
    imagem: product.imagem,
    option,
    quantity,
    notes
  };
}

function money(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function optionPrice(option) {
  return /\+\s*R\$2/i.test(option) ? 2 : 0;
}

function imageStyle(productOrPath) {
  const path = typeof productOrPath === "string" ? productOrPath : productOrPath.imagem;
  return `background-image: url("${path}")`;
}

function cardImageStyle(product) {
  const imageY = product.categoria?.includes("Bebidas") ? "0%" : "48%";
  return `background-image: url("assets/thumbs/${product.id}.png"); --card-image-y: ${imageY}`;
}

function thumbImageStyle(productOrItem) {
  const id = productOrItem?.id || productOrItem?.productId;
  return id ? `background-image: url("assets/thumbs/${id}.png")` : "";
}

function imagePath(productOrPath) {
  if (!productOrPath) return "assets/logo-brewers.svg";
  return typeof productOrPath === "string" ? productOrPath : productOrPath.imagem;
}

function totals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.preco * item.quantity, 0);
  const service = subtotal * 0.1;
  return { subtotal, service, total: subtotal + service };
}

function paymentTotals() {
  const map = { Dinheiro: 0, Pix: 0, "Crédito": 0 };
  state.staffOrders.forEach((order) => {
    const method = order.paymentMethod;
    const val = Number(order.total || 0);
    if (method && map[method] !== undefined) map[method] += val;
  });
  return map;
}

function productById(id) {
  return products.find((product) => product.id === id);
}

function productsByCategory(category) {
  const order = productDisplayOrder[category] || [];
  return products
    .filter((product) => product.categoria === category)
    .sort((a, b) => {
      const aIndex = order.indexOf(a.id);
      const bIndex = order.indexOf(b.id);
      if (aIndex >= 0 && bIndex >= 0) return aIndex - bIndex;
      if (aIndex >= 0) return -1;
      if (bIndex >= 0) return 1;
      return a.nome.localeCompare(b.nome, "pt-BR");
    });
}

function orderFromApi(order) {
  return {
    id: String(order.id),
    mesa: order.mesa,
    itens: order.items_summary || (order.items || []).map((item) => `${item.nome} x ${item.quantity}`).join(", "),
    hora: order.hora,
    status: order.status,
    total: order.total,
    items: order.items || []
  };
}

function selectedStaffOrder() {
  return state.staffOrders.find((order) => order.id === state.selectedStaffOrderId) || state.staffOrders[0];
}

function staffOrderItemKey(item, index) {
  return String(item.id ?? item.uid ?? `${item.product_id || item.productId || item.nome}-${index}`);
}

function recalculateStaffOrder(order) {
  if (!order) return;
  const items = order.items || [];
  const subtotal = items.reduce((sum, item) => sum + Number(item.unit_price || item.unitPrice || item.preco || 0) * Number(item.quantity || 0), 0);
  const service = subtotal * 0.1;
  order.subtotal = subtotal;
  order.service = service;
  order.total = subtotal + service;
  order.itens = items.length ? items.map((item) => `${item.nome} × ${item.quantity}`).join(", ") : "Sem itens";
}

function updateStaffOrderItemQty(orderId, itemKey, delta) {
  const order = state.staffOrders.find((entry) => String(entry.id) === String(orderId));
  if (!order?.items?.length) return;
  const item = order.items.find((entry, index) => staffOrderItemKey(entry, index) === String(itemKey));
  if (!item) return;
  item.quantity = Math.max(1, Number(item.quantity || 1) + delta);
  recalculateStaffOrder(order);
  render();
}

function removeStaffOrderItem(orderId, itemKey) {
  const order = state.staffOrders.find((entry) => String(entry.id) === String(orderId));
  if (!order?.items?.length) return;
  order.items = order.items.filter((entry, index) => staffOrderItemKey(entry, index) !== String(itemKey));
  recalculateStaffOrder(order);
  render();
}

async function apiRequest(path, options = {}) {
  const requestOptions = {
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {})
    }
  };

  try {
    const response = await fetch(`${API_BASE}${path}`, requestOptions);
    apiOnline = response.ok;
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    apiOnline = false;
    return null;
  }
}

async function staffAuthRequest(path, payload) {
  try {
    const response = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => ({}));
    apiOnline = true;
    return { ok: response.ok, data };
  } catch {
    apiOnline = false;
    return {
      ok: false,
      data: { error: "Servidor local indisponível. Reinicie o servidor para usar o login pelo banco de dados." }
    };
  }
}

async function syncProducts() {
  const data = await apiRequest("/api/products");
  if (data?.products?.length) products = data.products;
}

async function syncOrders() {
  const data = await apiRequest("/api/orders");
  if (data?.orders) state.staffOrders = data.orders.map(orderFromApi);
}

async function syncClients() {
  const data = await apiRequest("/api/clients");
  if (data?.clients) state.staffClients = data.clients;
}

async function syncCash() {
  const data = await apiRequest("/api/cash");
  if (data) state.cashOpen = Boolean(data.is_open);
}

async function bootstrap() {
  await Promise.all([syncProducts(), syncOrders(), syncClients(), syncCash()]);
  render();
}

function setView(view) {
  if (view === "welcome") {
    state.currentTable = randomTable();
    state.cart = [];
  }
  state.view = view;
  render();
}

function currentCategoryFromDom() {
  return document.querySelector(".category-tab.is-active")?.textContent.trim() || state.category;
}

function captureScrollPositions() {
  const productGrid = document.querySelector(".product-grid");
  const cartList = document.querySelector(".cart-list");
  const staffMain = document.querySelector(".staff-main");

  if (productGrid) {
    state.scroll.menuByCategory[currentCategoryFromDom()] = productGrid.scrollTop;
  }
  if (cartList) {
    state.scroll.cart = cartList.scrollTop;
  }
  if (staffMain) {
    state.scroll.staffMain = staffMain.scrollTop;
  }
}

function restoreScrollPositions() {
  window.requestAnimationFrame(() => {
    const productGrid = document.querySelector(".product-grid");
    const cartList = document.querySelector(".cart-list");
    const staffMain = document.querySelector(".staff-main");

    if (productGrid) {
      productGrid.scrollTop = state.scroll.menuByCategory[state.category] || 0;
    }
    if (cartList) {
      cartList.scrollTop = state.scroll.cart || 0;
    }
    if (staffMain) {
      staffMain.scrollTop = state.scroll.staffMain || 0;
    }
  });
}

function render() {
  captureScrollPositions();
  const views = {
    welcome: renderWelcome,
    menu: renderMenu,
    detail: renderDetail,
    call: renderCall,
    success: renderSuccess,
    "staff-login": renderStaffLogin,
    staff: renderStaffPanel
  };

  const baseView = state.view === "checkout" ? "menu" : state.view;

  if (baseView === "staff" && app.querySelector(".staff-sidebar")) {
    app.querySelectorAll(".staff-nav-item").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.staffView === state.staffView);
    });
    const staffMain = app.querySelector(".staff-main");
    if (staffMain) staffMain.innerHTML = renderStaffContent();
  } else {
    app.innerHTML = views[baseView]();
  }

  renderModal();
  wireStaticFields();
  restoreScrollPositions();
}

function renderWelcome() {
  return `
    <section class="screen welcome-screen" data-screen="1 — Boas-vindas">
      <div class="welcome-card">
        <div class="logo-mark" aria-hidden="true"><img src="assets/logo-brewers.svg" alt=""></div>
        <h1 class="welcome-title">BREWERS</h1>
        <div class="welcome-line"></div>
        <p class="welcome-table">${state.currentTable}</p>
        <button class="primary-button" data-action="start">Toque para iniciar</button>
        <button class="staff-link" data-action="staff-login">Área do atendente</button>
      </div>
    </section>
  `;
}

function renderHeader() {
  return `
    <header class="screen-header">
      <div class="brand-block">
        <strong class="brand-name">BREWERS</strong>
        <span class="table-label">${state.currentTable}</span>
      </div>
      <button class="waiter-button" data-action="call">Chamar Garçom</button>
    </header>
  `;
}

function renderMenu() {
  const currentProducts = productsByCategory(state.category);
  return `
    <section class="screen menu-screen" data-screen="2 — Cardápio / ${state.category}">
      ${renderHeader()}
      <div class="menu-layout">
        <div class="menu-main">
          <nav class="category-tabs" aria-label="Categorias do cardápio">
            ${categories.map((category) => `
              <button class="category-tab ${category === state.category ? "is-active" : ""}" data-category="${category}">
                ${category}
              </button>
            `).join("")}
          </nav>
          <h2 class="category-title">${state.category}</h2>
          <div class="product-grid">
            ${currentProducts.map(renderProductCard).join("")}
          </div>
        </div>
        ${renderCart()}
      </div>
    </section>
  `;
}

function renderProductCard(product) {
  const desc = product.tamanho ? `${product.descricao} (${product.tamanho})` : product.descricao;
  return `
    <article class="product-card" data-product="${product.id}">
      <div class="product-image" style='${cardImageStyle(product)}'></div>
      <div class="product-body">
        <div class="product-copy">
          <h3 class="product-name">${product.nome}</h3>
          <p class="product-desc">${desc}</p>
          <p class="product-price">${money(product.preco)}</p>
        </div>
        <button class="circle-button" aria-label="Abrir detalhe de ${product.nome}" data-action="open-detail" data-product="${product.id}">+</button>
      </div>
    </article>
  `;
}

function renderCart() {
  const selectedItems = state.cart.length;
  const values = totals();
  return `
    <aside class="cart-panel" aria-label="Pedido da mesa">
      <div class="cart-header">
        <strong>${state.currentTable}</strong>
        <span>${selectedItems} ${selectedItems === 1 ? "item selecionado" : "itens selecionados"}</span>
      </div>
      <div class="cart-list">
        ${state.cart.length ? state.cart.map((item) => renderCartItem(item)).join("") : `<p class="empty-cart">Nenhum item selecionado.</p>`}
      </div>
      <div class="cart-summary">
        <div class="summary-row"><span>Subtotal</span><strong>${money(values.subtotal)}</strong></div>
        <div class="summary-row"><span>Taxa de serviço (10%)</span><strong>${money(values.service)}</strong></div>
        <div class="summary-row total"><span>Total</span><strong>${money(values.total)}</strong></div>
        <button class="primary-button" data-action="checkout" ${state.cart.length ? "" : "disabled"}>Confirmar Pedido</button>
      </div>
    </aside>
  `;
}

function renderCartItem(item, compact = false) {
  const product = productById(item.productId);
  const className = compact ? "checkout-item" : "cart-item";
  const editAttrs = `data-action="edit-cart" role="button" tabindex="0" aria-label="Editar ${item.nome}"`;
  return `
    <article class="${className}" data-cart-id="${item.uid}" ${editAttrs}>
      <div class="cart-thumb" style='${thumbImageStyle(product || item)}'></div>
      <div class="cart-item-copy">
        <h3 class="cart-item-title">${item.nome}</h3>
        <p class="cart-item-option">${item.option || "Sem opção"}</p>
        ${renderQtyControl(item)}
      </div>
      <p class="cart-item-price">${money(item.preco * item.quantity)}</p>
      <button class="remove-button" aria-label="Remover ${item.nome}" data-action="request-delete" data-cart-id="${item.uid}">
        <img src="assets/icon-trash.svg" alt="">
      </button>
    </article>
  `;
}

function renderQtyControl(item) {
  return `
    <div class="qty-control">
      <button class="qty-button minus" data-action="decrease-cart" data-cart-id="${item.uid}" aria-label="Diminuir quantidade">−</button>
      <span class="qty-value">${item.quantity}x</span>
      <button class="qty-button plus" data-action="increase-cart" data-cart-id="${item.uid}" aria-label="Aumentar quantidade">+</button>
    </div>
  `;
}

function renderDetail() {
  const product = productById(state.selectedProductId) || products[0];
  const options = product.opcoes;
  const selected = state.detailOption || options[0] || "";
  const price = (product.preco + optionPrice(selected)) * state.detailQty;
  return `
    <section class="screen detail-screen" data-screen="${product.frame}">
      <div class="detail-media">
        <div class="detail-photo" style='${imageStyle(product)}'></div>
        <button class="back-chip" data-action="back-menu" aria-label="Voltar">←</button>
        <p class="detail-script-title">${product.nome}</p>
      </div>
      <div class="detail-content">
        <h2 class="detail-title">${product.nome}</h2>
        <div class="detail-separator"></div>
        <p class="detail-desc">${product.descricao}</p>
        ${product.tamanho ? `<p class="detail-size">Tamanho: ${product.tamanho}</p>` : ""}
        ${options.length ? `
          <label class="field-label">${product.id === "cold-brew" ? "Opção" : "Opção de leite"}</label>
          <div class="options-grid">
            ${options.map((option) => `
              <button class="option-button ${option === selected ? "is-selected" : ""}" data-option="${option}">
                ${option}
              </button>
            `).join("")}
          </div>
        ` : `<div class="options-grid" aria-hidden="true"></div>`}
        <div class="notes-wrap">
          <label class="field-label" for="notes">Observações</label>
          <textarea id="notes" placeholder="Ex: Sem açúcar..." data-field="notes">${state.detailNotes}</textarea>
        </div>
      </div>
      <div class="detail-actions">
        <div class="qty-control detail-qty">
          <button class="qty-button minus" data-action="decrease-detail" aria-label="Diminuir quantidade">−</button>
          <span class="qty-value">${state.detailQty}</span>
          <button class="qty-button plus" data-action="increase-detail" aria-label="Aumentar quantidade">+</button>
        </div>
        <p class="detail-price">${money(price)}</p>
        <button class="primary-button" data-action="add-to-cart">${state.editCartId ? "Atualizar Pedido" : "Adicionar ao Pedido"}</button>
      </div>
    </section>
  `;
}

function renderCall() {
  const reasons = ["Tirar dúvidas", "Pedir mais itens", "Fechar a conta", "Outro"];
  return `
    <section class="screen call-screen" data-screen="6 — Chamar Garçom">
      <header class="screen-header">
        <button class="call-header-back" data-action="back-menu" aria-label="Voltar">←</button>
        <span class="call-table">${state.currentTable}</span>
      </header>
      <div class="call-center">
        <div class="bell-icon" aria-hidden="true"><img src="assets/icon-bell.svg" alt=""></div>
        <h2 class="call-title">O garçom será avisado</h2>
        <p class="call-subtitle">Selecione o motivo da chamada:</p>
        <div class="reason-grid">
          ${reasons.map((reason) => `
            <button class="reason-button ${reason === state.selectedReason ? "is-selected" : ""}" data-reason="${reason}">
              ${reason}
            </button>
          `).join("")}
        </div>
      </div>
      <div class="call-action">
        <button class="primary-button" data-action="notify-waiter">Chamar Agora</button>
      </div>
    </section>
  `;
}

function renderSuccess() {
  return `
    <section class="screen success-screen" data-screen="5 — Pedido Confirmado">
      <div class="success-icon"><img src="assets/icon-success.svg" alt=""></div>
      <h2 class="success-title">Pedido Enviado!</h2>
      <p class="success-copy">Seu pedido está sendo preparado com carinho.</p>
      <div class="order-number-box">
        <span>Número do Pedido</span>
        <strong>#${state.lastOrderNumber || 42}</strong>
      </div>
      <p class="success-time">Tempo estimado: 8–12 min</p>
      <div class="success-actions">
        <button class="secondary-button" data-action="back-menu">Voltar ao Cardápio</button>
        <button class="secondary-button" data-action="home">Voltar ao Início</button>
      </div>
      <p class="success-footer">${state.currentTable} · Brewers Café</p>
    </section>
  `;
}

function renderStaffLogin() {
  const isRegister = state.staffLoginMode === "register";
  const loginDraft = state.staffLoginDraft;
  const registerDraft = state.staffRegisterDraft;
  const previewUsername = staffUsernameFromName(registerDraft.firstName, registerDraft.lastName) || "nome.sobrenome";
  const error = state.staffLoginError
    ? `<div class="staff-login-error" role="alert">${escapeHtml(state.staffLoginError)}</div>`
    : "";
  const formBody = isRegister ? `
        <h2>Primeiro acesso</h2>
        <p>Crie seu acesso de funcionário</p>
        ${error}
        <div class="staff-register-grid">
          <label>Nome<input name="firstName" value="${escapeHtml(registerDraft.firstName)}" autocomplete="given-name" placeholder="Ana" required></label>
          <label>Sobrenome<input name="lastName" value="${escapeHtml(registerDraft.lastName)}" autocomplete="family-name" placeholder="Barista" required></label>
        </div>
        <label>Senha<input name="password" value="${escapeHtml(registerDraft.password)}" type="password" autocomplete="new-password" placeholder="Mínimo 6 caracteres" required></label>
        <ul class="staff-password-checklist" aria-label="Regras da senha">
          ${renderStaffPasswordChecklist(registerDraft.password)}
        </ul>
        <label>Código do gestor master<input name="managerCode" value="${escapeHtml(registerDraft.managerCode)}" inputmode="numeric" maxlength="6" autocomplete="off" placeholder="Código de 6 dígitos" required></label>
        <p class="staff-username-preview">Usuário: <strong data-username-preview>${escapeHtml(previewUsername)}</strong></p>
        <button class="staff-primary" type="submit">Criar acesso</button>
        <button class="staff-link-button" type="button" data-action="staff-login-mode" data-mode="login">Já tenho acesso</button>
  ` : `
        <h2>Bem-vindo</h2>
        <p>Acesse sua conta</p>
        ${error}
        <label>Usuário<input name="username" value="${escapeHtml(loginDraft.username)}" autocomplete="username" placeholder="nome.sobrenome" required></label>
        <label>Senha<input name="password" value="${escapeHtml(loginDraft.password)}" type="password" autocomplete="current-password" placeholder="Sua senha" required></label>
        <button class="staff-primary" type="submit">Entrar</button>
        <button class="staff-link-button" type="button" data-action="staff-login-mode" data-mode="register">Primeiro acesso</button>
        <small>Brewers v2.1 · Somente para funcionários</small>
  `;

  return `
    <section class="screen staff-login-screen" data-screen="A1 — Login">
      <div class="staff-login-left">
        <div class="staff-login-copy">
          <h1>BREWERS</h1>
          <h2>Sistema de Gestão<br>de Pedidos</h2>
          <div class="staff-login-line"></div>
          <p>Controle total do seu café na palma da mão.</p>
          <ul class="staff-feature-list">
            <li>
              <span class="staff-feature-icon staff-feature-icon-orders has-asset" aria-hidden="true">
                <img src="assets/icon-login-orders.svg" alt="" loading="eager" decoding="sync">
              </span>
              Pedidos em tempo real
            </li>
            <li>
              <span class="staff-feature-icon staff-feature-icon-tables has-asset" aria-hidden="true">
                <img src="assets/icon-login-tables.svg" alt="" loading="eager" decoding="sync">
              </span>
              Gestão de mesas
            </li>
            <li>
              <span class="staff-feature-icon staff-feature-icon-billing has-asset" aria-hidden="true">
                <img src="assets/icon-login-billing.svg" alt="" loading="eager" decoding="sync">
              </span>
              Fechamento de contas
            </li>
            <li>
              <span class="staff-feature-icon staff-feature-icon-reports has-asset" aria-hidden="true">
                <img src="assets/icon-login-reports.svg" alt="" loading="eager" decoding="sync">
              </span>
              Relatórios do dia
            </li>
          </ul>
        </div>
      </div>
      <form class="staff-login-form ${isRegister ? "is-register" : ""}" novalidate>
        ${formBody}
      </form>
    </section>
  `;
}

function renderStaffPanel() {
  return `
    <section class="screen staff-screen" data-screen="2. Painel - Atendente/Administrador">
      ${renderStaffSidebar()}
      <main class="staff-main">
        ${renderStaffContent()}
      </main>
    </section>
  `;
}

function renderStaffSidebar() {
  const staffUser = state.staffUser;
  const displayName = staffDisplayName(staffUser);
  const subtitle = staffSubtitle(staffUser);
  return `
    <aside class="staff-sidebar">
      <div class="staff-logo">
        <strong>BREWERS</strong>
        <span>Painel Admin</span>
      </div>
      <nav class="staff-nav" aria-label="Navegação do painel">
        ${staffNav.map((item) => `
          <button class="staff-nav-item ${state.staffView === item.id ? "is-active" : ""}" data-action="staff-nav" data-staff-view="${item.id}">
            <span class="staff-nav-icon staff-nav-icon-${item.icon} has-asset" aria-hidden="true">
              <img src="${item.asset}" alt="" loading="eager" decoding="sync" onerror="this.parentElement.classList.remove('has-asset'); this.remove()">
            </span>${item.label}
          </button>
        `).join("")}
      </nav>
      <div class="staff-sidebar-actions">
        <button class="staff-back-client" data-action="home">Voltar ao cliente</button>
        <button class="staff-switch-user" data-action="staff-logout">Trocar usuário</button>
      </div>
      <div class="staff-user">
        <div>${escapeHtml(staffInitials(staffUser))}</div>
        <p>
          <strong title="${escapeHtml(displayName)}">${escapeHtml(displayName)}</strong>
          <span title="${escapeHtml(subtitle)}">${escapeHtml(subtitle)}</span>
        </p>
      </div>
    </aside>
  `;
}

function renderStaffContent() {
  if (state.staffTableFlow.active) return renderStaffTableFlow();
  const content = {
    overview: renderStaffOverview,
    orders: renderStaffTables,
    clients: renderStaffClients,
    reports: renderStaffReports,
    menu: renderStaffMenu,
    settings: renderStaffSettings
  };
  return content[state.staffView]();
}

function renderStaffHeader(title, subtitle = "Segunda-feira, 13 de Abril · 14:32", action = "") {
  return `
    <header class="staff-topbar">
      <div>
        <h2>${title}</h2>
        ${subtitle ? `<p>${subtitle}</p>` : ""}
      </div>
      ${action}
    </header>
  `;
}

function renderStaffOverview() {
  const prep = state.staffOrders.filter((order) => order.status === "Em preparo").length;
  const delivered = state.staffOrders.filter((order) => order.status === "Entregue").length;
  const todayOrders = state.staffOrders.length;
  const activeTables = new Set(state.staffOrders.map((o) => o.mesa)).size;
  const totalTables = staffTables.length;
  const cashLabel = state.cashOpen ? "Caixa aberto" : "Abrir Caixa";
  const cashAction = state.cashOpen ? "cash-menu" : "open-cash-modal";
  const dropdownOpen = state.staffModal === "cash-menu";

  const cashSlot = `
    <div class="cash-button-wrap">
      <button class="cash-button ${dropdownOpen ? "is-open" : ""}" data-action="${cashAction}">
        ${cashLabel}<span class="cash-chevron">${dropdownOpen ? "∧" : "∨"}</span>
      </button>
      ${dropdownOpen ? `
        <div class="cash-dropdown" data-cash-dropdown>
          <button data-action="sangria-modal">Sangria</button>
          <button data-action="suprimento-modal">Suprimento</button>
          <button data-action="fechamento-modal">Fechar Caixa</button>
        </div>
      ` : ""}
    </div>
  `;

  return `
    ${renderStaffHeader("Pedidos em Aberto", "Segunda-feira, 13 de Abril · 14:32", cashSlot)}
    ${apiOnline ? "" : `<p class="offline-banner">Modo local: inicie o servidor para salvar no banco.</p>`}
    ${state.cashOpen ? `
      <section class="staff-stats">
        <article><strong>${todayOrders}</strong><span>Pedidos Hoje</span></article>
        <article><strong class="warn">${prep}</strong><span>Em Preparo</span></article>
        <article><strong class="ok">${delivered}</strong><span>Entregues</span></article>
        <article><strong class="dark">${activeTables}/${totalTables}</strong><span>Mesas Ativas</span></article>
      </section>
      ${renderOrdersTable(state.staffOrders)}
    ` : `<p class="staff-cash-closed-msg">Abra o caixa para visualizar os pedidos.</p>`}
  `;
}

function renderOrdersTable(orders) {
  return `
    <section class="staff-table">
      <div class="staff-table-head">
        <span>Mesa</span><span>Itens do Pedido</span><span>Hora</span><span>Status</span><span>Ações</span>
      </div>
      ${orders.length ? orders.map((order) => `
        <article class="staff-order-row">
          <strong class="table-pill">${order.mesa}</strong>
          <span>${order.itens}</span>
          <span class="muted">${order.hora}</span>
          <span class="status-badge ${statusClass(order.status)}">${order.status}</span>
          <div class="row-actions">
            ${order.status !== "Entregue" ? `<button class="staff-mini-primary" data-action="advance-order" data-order-id="${order.id}">Avançar Status</button>` : ""}
            <button class="staff-mini-light" data-action="staff-order-detail" data-order-id="${order.id}">Editar</button>
          </div>
        </article>
      `).join("") : `<p class="staff-empty-orders">Nenhum pedido aberto no momento.</p>`}
    </section>
  `;
}

function statusClass(status) {
  return {
    "Novo": "new",
    "Em preparo": "prep",
    "Pronto": "ready",
    "Entregue": "done"
  }[status] || "new";
}

function renderStaffTables() {
  const tablesWithOrders = new Set(
    state.staffOrders
      .filter((o) => o.status !== "Entregue")
      .map((o) => o.mesa)
  );
  return `
    ${renderStaffHeader("Mesas", "", `<button class="staff-primary small" data-action="new-order">+ Novo Pedido</button>`)}
    <section class="tables-grid">
      ${staffTables.map((table) => {
        const hasOrder = tablesWithOrders.has(table);
        return `
          <button class="table-card ${hasOrder ? "" : "table-card--empty"}" data-action="staff-table-detail" data-table="${table}">
            <span>${table}</span>
          </button>
        `;
      }).join("")}
    </section>
  `;
}

function renderStaffClients() {
  let clients = [
    ["Luis Gustavo Freitas", "123.xxx.xxx-52", "(43) 9 1644-4645", "13/03/2007", "R. Marialvence, 140, Maringá, Paraná"],
    ["Maria Lucia Gonzaga", "158.xxx.xxx-90", "(44) 9 5516-6358", "25/12/1996", "R. Mario e Luigi, 6, Maringá, Paraná"]
  ];
  clients = state.staffClients.map((client) => [client.nome, client.cpf, client.celular, client.nascimento, client.endereco]);
  return `
    ${renderStaffHeader("Clientes", "", `<button class="staff-primary small" data-action="staff-modal" data-modal="client">Cadastrar Novo</button>`)}
    <section class="staff-table client-table">
      <div class="staff-table-head client-head">
        <span>Nome</span><span>CPF</span><span>Celular</span><span>Data de Nascimento</span><span>Endereço</span>
      </div>
      ${clients.map((client) => `
        <article class="staff-order-row client-row">
          ${client.map((item, index) => index === 0 ? `<strong>${item}</strong>` : `<span>${item}</span>`).join("")}
        </article>
      `).join("")}
    </section>
  `;
}

function renderStaffReports() {
  return `
    ${renderStaffHeader("Relatórios", "")}
    <section class="report-filters">
      <button class="report-select" data-action="staff-modal" data-modal="report-options">Faturamento total <span>⌄</span></button>
      <label>Data inicial:<input value="01/05/2026"></label>
      <label>Data final:<input value="01/05/2026"></label>
      <button class="staff-primary small" data-action="generate-report">Gerar relatório</button>
    </section>
    <section class="report-card">
      <h3>RELATÓRIO DE FATURAMENTO</h3>
      <p><strong>Período:</strong> 01/05/2026 - 01/05/2026</p>
      <div class="report-grid">
        <strong>DATA</strong><strong>QUANTIDADE DE ITENS VENDIDOS</strong><strong>VALOR TOTAL</strong>
        <span>01/05/2026</span><span>20</span><span>R$450,00</span>
      </div>
      <div class="report-summary">
        <span>Valor total do período de vendas:</span><strong>R$450,00</strong>
        <span>Quantidade de itens vendidas no período:</span><strong>20</strong>
      </div>
    </section>
  `;
}

function renderStaffMenu() {
  return `
    ${renderStaffHeader("Cardápio", "", `<button class="staff-primary small" data-action="staff-modal" data-modal="product">Cadastrar</button>`)}
    <section class="admin-menu-grid">
      ${products.slice(0, 12).map((product) => `
        <article>
          <div class="product-image" style='${cardImageStyle(product)}'></div>
          <strong>${product.nome}</strong>
          <span>${product.categoria}</span>
          <em>${money(product.preco)}</em>
        </article>
      `).join("")}
    </section>
  `;
}

function renderStaffSettings() {
  return `
    ${renderStaffHeader("Configurações", "")}
    <section class="settings-panel">
      <div class="settings-line"><span>Impressoras:</span><button data-action="staff-modal" data-modal="printer">Configurar</button></div>
      <div class="settings-line"><span>Mesas:</span><button data-action="staff-modal" data-modal="tables">Configurar</button></div>
      <div class="settings-line"><span>Pagamentos:</span><button data-action="staff-modal" data-modal="payments">Configurar</button></div>
    </section>
    <section class="settings-cards">
      <article><strong>47</strong><span>Pedidos Hoje</span></article>
      <article><strong>R$ 450,00</strong><span>Faturamento do Dia</span></article>
      <article><strong>6/12</strong><span>Mesas Ativas</span></article>
      <article><strong>3</strong><span>Formas de pagamento</span></article>
    </section>
  `;
}

function renderModal() {
  if (state.staffModal && state.staffModal !== "cash-menu") {
    modalRoot.innerHTML = renderStaffModal();
    return;
  }

  if (state.pendingDeleteId) {
    modalRoot.innerHTML = `
      <div class="modal-overlay">
        <div class="delete-dialog" role="dialog" aria-modal="true" aria-label="Confirmação de exclusão">
          <p>Confirma a exclusão do item?</p>
          <div class="delete-actions">
            <button class="no" data-action="cancel-delete">Não</button>
            <button class="yes" data-action="confirm-delete">Sim</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (state.view === "checkout") {
    const values = totals();
    modalRoot.innerHTML = `
      <div class="modal-overlay">
        <section class="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
          <div class="modal-header">
            <h2 class="modal-title" id="checkout-title">Conferência do pedido</h2>
            <button class="close-x" data-action="close-checkout" aria-label="Fechar">X</button>
          </div>
          <div class="checkout-list">
            ${state.cart.map((item) => renderCartItem(item, true)).join("")}
          </div>
          <div class="checkout-summary">
            <div class="summary-row"><span>Subtotal</span><strong>${money(values.subtotal)}</strong></div>
            <div class="summary-row"><span>Taxa de serviço (10%)</span><strong>${money(values.service)}</strong></div>
            <div class="summary-row total"><span>Total</span><strong>${money(values.total)}</strong></div>
          </div>
          <button class="primary-button" data-action="finalize">Finalizar Pedido</button>
        </section>
      </div>
    `;
    return;
  }

  modalRoot.innerHTML = state.toast ? `<div class="toast">${state.toast}</div>` : "";
}

function renderStaffModal() {
  const modal = state.staffModal;
  const titles = {
    "cash-warning": "Realize a abertura do caixa!",
    "cash-open": "Abertura de Caixa",
    "cash-menu": "Caixa aberto",
    sangria: "Sangria",
    suprimento: "Suprimento",
    fechamento: "Fechamento de caixa",
    product: "Cadastrar Produto",
    printer: "Configuração Impressora",
    tables: "Configuração de Mesas",
    payments: "Configuração de Pagamentos",
    "new-table": "Cadastro de Mesas",
    client: "Cadastro de Clientes",
    "new-payment": "Cadastro de Pagamentos",
    "report-options": "Opções Relatorio",
    "order-detail": "A2 — Tela de Pedidos",
    "table-detail": "A2 — Tela de Pedidos"
  };

  if (modal === "report-options") {
    return `
      <div class="modal-overlay staff-modal-layer">
        <div class="report-options-popover">
          <button data-action="close-staff-modal">Faturamento total</button>
          <button data-action="close-staff-modal">Por produto vendido</button>
        </div>
      </div>
    `;
  }

  if (modal === "cash-warning") {
    return renderStaffDialog("Realize a abertura do caixa!", ``, `
      <button class="staff-secondary" data-action="close-staff-modal">Voltar</button>
      <button class="staff-primary" data-action="open-cash-modal">Abrir Caixa</button>
    `, "cash-warning-dialog");
  }

  if (modal === "order-detail" || modal === "table-detail") {
    const order = selectedStaffOrder();
    const orderTitle = `Alterar pedido ${order?.mesa || order?.id || ""}`;
    return renderStaffDialog(orderTitle, renderOrderFlowBody(), `
      <button class="staff-secondary" data-action="close-staff-modal">Cancelar</button>
      <button class="staff-primary" data-action="save-order-items">Salvar Pedido</button>
    `, "order-detail-dialog");
  }

  if (modal === "client-step") {
    return renderStaffDialog("Tela de Clientes", `
      <div class="staff-form-grid">
        <label>Cliente<input value="Luis Gustavo Freitas"></label>
        <label>CPF<input value="123.xxx.xxx-52"></label>
        <label>Celular<input value="(43) 9 1644-4645"></label>
      </div>
    `, `
      <button class="staff-secondary" data-action="staff-modal" data-modal="order-detail">Pedido</button>
      <button class="staff-primary" data-action="staff-modal" data-modal="payment-step">Pagamento</button>
    `);
  }

  if (modal === "payment-step") {
    const order = selectedStaffOrder();
    const total = Number(order?.total || 30.8);
    const subtotal = total / 1.1;
    const service = total - subtotal;
    return renderStaffDialog("Tela de Pagamento", `
      <div class="payment-summary">
        <div><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
        <div><span>Taxa de serviço</span><strong>${money(service)}</strong></div>
        <div><span>Total</span><strong>${money(total)}</strong></div>
      </div>
      <div class="staff-form-grid">
        <label>Forma de pagamento<select><option>Pix</option><option>Dinheiro</option><option>Crédito</option></select></label>
        <label>Valor recebido<input value="${money(total)}"></label>
      </div>
    `, `
      <button class="staff-secondary" data-action="show-toast" data-message="Conta enviada para impressão">Imprimir Conta</button>
      <button class="staff-primary" data-action="confirm-payment">✓ Confirmar Pagamento</button>
    `);
  }

  const bodyByModal = {
    "cash-open": `
      <p class="staff-money-subtitle">Valor disponível em caixa</p>
      <div class="staff-money-row">
        <span class="staff-money-prefix">R$</span>
        <input class="staff-money-input" type="text" inputmode="decimal" placeholder="0,00" value="">
      </div>
    `,
    sangria: `
      <p class="staff-money-subtitle">Valor a ser retirado do caixa</p>
      <div class="staff-money-row">
        <span class="staff-money-prefix">R$</span>
        <input class="staff-money-input" type="text" inputmode="decimal" placeholder="0,00" value="">
      </div>
      <label class="staff-money-label-plain">Motivo<textarea class="staff-money-textarea" placeholder=""></textarea></label>
    `,
    suprimento: `
      <p class="staff-money-subtitle">Valor a ser adicionado ao caixa</p>
      <div class="staff-money-row">
        <span class="staff-money-prefix">R$</span>
        <input class="staff-money-input" type="text" inputmode="decimal" placeholder="0,00" value="">
      </div>
      <label class="staff-money-label-plain">Motivo<textarea class="staff-money-textarea" placeholder=""></textarea></label>
    `,
    fechamento: (() => {
      const pt = paymentTotals();
      return `
        <p class="staff-money-subtitle">Conferência de valores</p>
        <div class="fechamento-grid">
          <span class="fechamento-label">Dinheiro:</span>
          <strong class="fechamento-value">${money(pt.Dinheiro)}</strong>
          <span class="fechamento-arrow">→</span>
          <input class="staff-money-input fechamento-input" type="text" inputmode="decimal" placeholder="0,00" data-method="Dinheiro">

          <span class="fechamento-label">Pix:</span>
          <strong class="fechamento-value">${money(pt.Pix)}</strong>
          <span class="fechamento-arrow">→</span>
          <input class="staff-money-input fechamento-input fechamento-readonly" type="text" value="${pt.Pix.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}" disabled data-method="Pix">

          <span class="fechamento-label">Crédito:</span>
          <strong class="fechamento-value">${money(pt["Crédito"])}</strong>
          <span class="fechamento-arrow">→</span>
          <input class="staff-money-input fechamento-input fechamento-readonly" type="text" value="${pt["Crédito"].toLocaleString("pt-BR", { minimumFractionDigits: 2 })}" disabled data-method="Crédito">
        </div>
      `;
    })(),
    product: `
      <div class="staff-form-grid">
        <label>Nome<input value="Novo produto"></label>
        <label>Categoria<select><option>Bebidas Quentes</option><option>Bebidas Geladas</option><option>Salgados</option><option>Doces</option></select></label>
        <label>Preço<input value="R$"></label>
        <label>Imagem<input value="Selecionar arquivo"></label>
      </div>
    `,
    printer: `
      <div class="staff-form-grid">
        <label>Impressora principal<input value="Cozinha"></label>
        <label>Status<select><option>Ativa</option><option>Inativa</option></select></label>
      </div>
    `,
    tables: `
      <div class="staff-config-list">
        <div><span>Mesa 1</span><button data-action="staff-modal" data-modal="new-table">Cadastrar</button></div>
        <div><span>Mesa 2</span><button>Editar</button></div>
        <div><span>Mesa 3</span><button>Editar</button></div>
      </div>
    `,
    payments: `
      <div class="staff-config-list">
        <div><span>Pix</span><button>Editar</button></div>
        <div><span>Dinheiro</span><button>Editar</button></div>
        <div><span>Crédito</span><button>Editar</button></div>
      </div>
      <button class="staff-primary small" data-action="staff-modal" data-modal="new-payment">Cadastrar</button>
    `,
    "new-table": `<label class="staff-money-label">Número da mesa<input value="Mesa 10"></label>`,
    client: `
      <div class="staff-form-grid">
        <label>Nome<input value=""></label>
        <label>CPF<input value=""></label>
        <label>Celular<input value=""></label>
        <label>Data de Nascimento<input value=""></label>
        <label>Endereço<input value=""></label>
      </div>
    `,
    "new-payment": `<label class="staff-money-label">Forma de pagamento<input value="Voucher"></label>`
  };

  const saveActions = {
    "cash-open": "save-cash-open",
    fechamento: "save-cash-close",
    product: "save-product",
    client: "save-client"
  };
  const saveAction = saveActions[modal] || "close-staff-modal";
  return renderStaffDialog(titles[modal] || "Painel", bodyByModal[modal] || "", `
    <button class="staff-secondary" data-action="close-staff-modal">Cancelar</button>
    <button class="staff-primary" data-action="${saveAction}">Salvar</button>
  `);
}

function renderStaffDialog(title, body, footer, extraClass = "") {
  return `
    <div class="modal-overlay staff-modal-layer">
      <section class="staff-dialog${extraClass ? " " + extraClass : ""}" role="dialog" aria-modal="true">
        <button class="close-x staff-close" data-action="close-staff-modal" aria-label="Fechar">X</button>
        <h2>${title}</h2>
        <div class="staff-dialog-body">${body}</div>
        <div class="staff-dialog-actions">${footer}</div>
      </section>
    </div>
  `;
}

function renderOrderFlowBody() {
  const order = selectedStaffOrder();
  const items = order?.items || [];
  return `
    <div class="staff-order-editor">
      <div class="staff-order-editor-head">
        <span>${order?.mesa || "Mesa"}</span>
        <strong>${order?.status || "Novo"}</strong>
      </div>
      <div class="staff-order-items-scroll">
        ${items.length ? items.map((item, index) => {
          const itemKey = staffOrderItemKey(item, index);
          const unitPrice = Number(item.unit_price || item.preco || 0);
          return `
            <article class="staff-order-edit-row">
              <div>
                <strong>${item.nome}</strong>
                <span>${item.option || "Sem opção"}</span>
              </div>
              <div class="staff-order-edit-qty">
                <button data-action="staff-order-item-decrease" data-order-id="${order.id}" data-item-key="${itemKey}" aria-label="Diminuir ${item.nome}">−</button>
                <span>${item.quantity}x</span>
                <button data-action="staff-order-item-increase" data-order-id="${order.id}" data-item-key="${itemKey}" aria-label="Aumentar ${item.nome}">+</button>
              </div>
              <strong>${money(unitPrice * item.quantity)}</strong>
              <button class="staff-order-remove" data-action="staff-order-item-remove" data-order-id="${order.id}" data-item-key="${itemKey}">Remover</button>
            </article>
          `;
        }).join("") : `<p class="staff-order-empty">Este pedido está sem itens.</p>`}
      </div>
      <div class="staff-order-editor-total">
        <span>Total</span>
        <strong>${money(Number(order?.total || 0))}</strong>
      </div>
    </div>
  `;
}

function wireStaticFields() {
  const notes = document.querySelector("[data-field='notes']");
  if (notes) {
    notes.addEventListener("input", (event) => {
      state.detailNotes = event.target.value;
    });
  }

  const staffForm = document.querySelector(".staff-login-form");
  if (staffForm?.classList.contains("is-register")) {
    const updateRegisterDraft = () => {
      const formData = new FormData(staffForm);
      state.staffRegisterDraft = {
        firstName: cleanNamePart(formData.get("firstName")),
        lastName: cleanNamePart(formData.get("lastName")),
        password: String(formData.get("password") || ""),
        managerCode: normalizePlainText(formData.get("managerCode"))
      };
      const preview = staffForm.querySelector("[data-username-preview]");
      if (preview) {
        preview.textContent = staffUsernameFromName(state.staffRegisterDraft.firstName, state.staffRegisterDraft.lastName) || "nome.sobrenome";
      }
      updateStaffPasswordChecklist(staffForm, state.staffRegisterDraft.password);
    };

    staffForm.addEventListener("input", updateRegisterDraft);
  } else if (staffForm) {
    staffForm.addEventListener("input", () => {
      const formData = new FormData(staffForm);
      state.staffLoginDraft = {
        username: normalizeStaffUsername(formData.get("username")),
        password: String(formData.get("password") || "")
      };
    });
  }
}

document.addEventListener("click", (event) => {
  // Fecha o dropdown do caixa ao clicar fora dele
  if (state.staffModal === "cash-menu") {
    const inDropdown = event.target.closest(".cash-button-wrap");
    if (!inDropdown) {
      state.staffModal = null;
      render();
      return;
    }
  }

  const target = event.target.closest("button, [data-action], [data-category], [data-option], [data-reason]");
  if (!target) return;

  const action = target.dataset.action;
  const category = target.dataset.category;
  const option = target.dataset.option;
  const reason = target.dataset.reason;
  const staffView = target.dataset.staffView;

  if (category && !action) {
    state.category = category;
    setView("menu");
    return;
  }

  if (staffView) {
    if (!state.cashOpen && staffView !== "overview") {
      state.staffModal = "cash-warning";
    } else {
      state.staffView = staffView;
      // Exit table flow when navigating away via sidebar
      state.staffTableFlow = { active: false, isNew: false, table: null, tab: "cliente", selectedClientId: null, orderId: null, items: [], paymentMethod: "Pix", category: "Bebidas Quentes" };
    }
    render();
    return;
  }

  if (option) {
    state.detailOption = option;
    render();
    return;
  }

  if (reason) {
    state.selectedReason = reason;
    render();
    return;
  }

  const actions = {
    start: () => setView("menu"),
    "staff-login": () => {
      window.location.hash = "atendente";
      setView("staff-login");
    },
    "staff-login-mode": () => {
      state.staffLoginMode = target.dataset.mode === "register" ? "register" : "login";
      state.staffLoginError = "";
      render();
    },
    "staff-enter": () => enterStaffPanel(),
    "staff-logout": () => {
      state.staffUser = null;
      state.staffLoginMode = "login";
      state.staffLoginError = "";
      window.location.hash = "atendente";
      setView("staff-login");
    },
    call: () => setView("call"),
    "back-menu": () => {
      const returnView = state.editCartId && state.editReturnView === "checkout" && state.cart.length ? "checkout" : "menu";
      state.editCartId = null;
      state.editReturnView = null;
      setView(returnView);
    },
    home: () => {
      window.location.hash = "";
      setView("welcome");
    },
    "open-detail": () => openDetail(target.dataset.product),
    "increase-detail": () => {
      state.detailQty += 1;
      render();
    },
    "decrease-detail": () => {
      state.detailQty = Math.max(1, state.detailQty - 1);
      render();
    },
    "add-to-cart": addCurrentProduct,
    "edit-cart": () => openCartItemEdit(target.dataset.cartId),
    "increase-cart": () => updateCartQty(target.dataset.cartId, 1),
    "decrease-cart": () => updateCartQty(target.dataset.cartId, -1),
    "request-delete": () => {
      state.pendingDeleteId = target.dataset.cartId;
      render();
    },
    "cancel-delete": () => {
      const item = state.cart.find((entry) => entry.uid === state.pendingDeleteId);
      if (item && item.quantity < 1) item.quantity = 1;
      state.pendingDeleteId = null;
      render();
    },
    "confirm-delete": () => {
      state.cart = state.cart.filter((item) => item.uid !== state.pendingDeleteId);
      state.pendingDeleteId = null;
      render();
    },
    checkout: () => {
      if (state.cart.length) {
        state.view = "checkout";
        render();
      }
    },
    "close-checkout": () => setView("menu"),
    finalize: () => finalizeOrder(),
    "notify-waiter": () => showToast(`Garçom chamado: ${state.selectedReason}`),
    "open-cash-modal": () => {
      state.staffModal = "cash-open";
      render();
    },
    "cash-menu": () => {
      // toggle dropdown inline — no modal overlay needed
      state.staffModal = state.staffModal === "cash-menu" ? null : "cash-menu";
      render();
    },
    "sangria-modal": () => {
      state.staffModal = "sangria";
      render();
    },
    "suprimento-modal": () => {
      state.staffModal = "suprimento";
      render();
    },
    "fechamento-modal": () => {
      state.staffModal = "fechamento";
      render();
    },
    "staff-modal": () => {
      state.staffModal = target.dataset.modal;
      render();
    },
    "close-staff-modal": () => {
      if ((state.staffModal === "order-detail" || state.staffModal === "table-detail") && state.staffOrderSnapshot) {
        const order = selectedStaffOrder();
        if (order) {
          order.items = state.staffOrderSnapshot.items;
          order.total = state.staffOrderSnapshot.total;
        }
        state.staffOrderSnapshot = null;
      }
      state.staffModal = null;
      render();
    },
    "save-cash-open": () => saveCashOpen(),
    "save-cash-close": () => saveCashClose(),
    "save-product": () => saveProductFromModal(target),
    "save-client": () => saveClientFromModal(target),
    "advance-order": () => advanceOrder(target.dataset.orderId),
    "staff-order-detail": () => {
      state.selectedStaffOrderId = target.dataset.orderId;
      const order = state.staffOrders.find((o) => String(o.id) === String(target.dataset.orderId));
      if (order) {
        state.staffOrderSnapshot = JSON.parse(JSON.stringify({ items: order.items, total: order.total }));
      }
      state.staffModal = "order-detail";
      render();
    },
    "staff-order-item-increase": () => updateStaffOrderItemQty(target.dataset.orderId, target.dataset.itemKey, 1),
    "staff-order-item-decrease": () => updateStaffOrderItemQty(target.dataset.orderId, target.dataset.itemKey, -1),
    "staff-order-item-remove": () => removeStaffOrderItem(target.dataset.orderId, target.dataset.itemKey),
    "save-order-items": () => saveStaffOrderItems(),
    "staff-table-detail": () => {
      const table = target.dataset.table;
      const existingOrder = state.staffOrders.find(
        (o) => o.mesa === table && o.status !== "Entregue"
      );
      state.staffTableFlow = {
        active: true,
        isNew: false,
        table,
        tab: "cliente",
        selectedClientId: null,
        orderId: existingOrder ? existingOrder.id : null,
        items: existingOrder
          ? (existingOrder.items || []).map((item) => ({ ...item }))
          : [],
        paymentMethod: "Pix",
        category: "Bebidas Quentes"
      };
      render();
    },
    "new-order": () => {
      state.staffTableFlow = {
        active: true,
        isNew: true,
        table: null,
        tab: "cliente",
        selectedClientId: null,
        orderId: null,
        items: [],
        paymentMethod: "Pix",
        category: "Bebidas Quentes"
      };
      render();
    },
    "table-flow-back": () => {
      state.staffTableFlow = { active: false, isNew: false, table: null, tab: "cliente", selectedClientId: null, orderId: null, items: [], paymentMethod: "Pix", category: "Bebidas Quentes" };
      render();
    },
    "table-flow-tab": () => {
      state.staffTableFlow.tab = target.dataset.tab;
      render();
    },
    "table-flow-select-table": () => {
      state.staffTableFlow.table = target.dataset.table || null;
      render();
    },
    "table-flow-select-client": () => {
      const val = target.dataset.clientId;
      state.staffTableFlow.selectedClientId = val === "" ? null : val;
      render();
    },
    "table-flow-category": () => {
      state.staffTableFlow.category = target.dataset.category;
      render();
    },
    "table-flow-add-product": () => {
      const productId = target.dataset.product;
      const product = productById(productId);
      if (!product) return;
      const existing = state.staffTableFlow.items.find(
        (item) => (item.product_id || item.productId) === productId
      );
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        state.staffTableFlow.items.push({
          uid: `${productId}-${Date.now()}`,
          product_id: productId,
          productId,
          nome: product.nome,
          option: product.opcoes[0] || "",
          quantity: 1,
          unit_price: product.preco,
          preco: product.preco,
          notes: ""
        });
      }
      render();
    },
    "table-flow-item-increase": () => {
      const uid = target.dataset.uid;
      const item = state.staffTableFlow.items.find((i) => (i.uid || i.id) === uid);
      if (item) { item.quantity = (item.quantity || 1) + 1; render(); }
    },
    "table-flow-item-decrease": () => {
      const uid = target.dataset.uid;
      const idx = state.staffTableFlow.items.findIndex((i) => (i.uid || i.id) === uid);
      if (idx < 0) return;
      const item = state.staffTableFlow.items[idx];
      item.quantity = (item.quantity || 1) - 1;
      if (item.quantity <= 0) state.staffTableFlow.items.splice(idx, 1);
      render();
    },
    "table-flow-item-remove": () => {
      const uid = target.dataset.uid;
      state.staffTableFlow.items = state.staffTableFlow.items.filter((i) => (i.uid || i.id) !== uid);
      render();
    },
    "table-flow-payment-method": () => {
      state.staffTableFlow.paymentMethod = target.dataset.method;
      render();
    },
    "table-flow-lancar": () => tableFlowLancar(),
    "table-flow-confirm-payment": () => tableFlowConfirmPayment(),
    "table-flow-print": () => showToast("Conta enviada para impressão"),
    "generate-report": () => showToast("Relatório gerado"),
    "show-toast": () => showToast(target.dataset.message || "Ação realizada"),
    "confirm-payment": () => {
      // salva a forma de pagamento no pedido
      const select = document.querySelector(".staff-dialog select");
      const paymentMethod = select?.value || "Dinheiro";
      const order = selectedStaffOrder();
      if (order) order.paymentMethod = paymentMethod;
      state.staffModal = null;
      showToast("Pagamento confirmado");
    }
  };

  if (actions[action]) actions[action]();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target.closest('.cart-item[data-action="edit-cart"], .checkout-item[data-action="edit-cart"]');
  if (!target) return;

  event.preventDefault();
  openCartItemEdit(target.dataset.cartId);
});

document.addEventListener("submit", (event) => {
  if (event.target.matches(".staff-login-form")) {
    event.preventDefault();
    if (state.staffLoginMode === "register") {
      registerStaffUser(event.target);
    } else {
      loginStaffUser(event.target);
    }
  }
});

function setStaffLoginError(message) {
  state.staffLoginError = message;
  render();
}

async function loginStaffUser(form) {
  const data = new FormData(form);
  const username = normalizeStaffUsername(data.get("username"));
  const password = String(data.get("password") || "");
  state.staffLoginDraft = { username, password };

  if (!username || !password) {
    setStaffLoginError("Preencha usuário e senha.");
    return;
  }

  const response = await staffAuthRequest("/api/staff/login", { username, password });
  if (!response.ok) {
    setStaffLoginError(response.data?.error || "Não foi possível entrar.");
    return;
  }

  state.staffUser = response.data.user;
  state.staffLoginError = "";
  state.staffLoginDraft = { username: "", password: "" };
  await enterStaffPanel();
}

async function registerStaffUser(form) {
  const data = new FormData(form);
  const firstName = cleanNamePart(data.get("firstName"));
  const lastName = cleanNamePart(data.get("lastName"));
  const password = String(data.get("password") || "");
  const managerCode = normalizePlainText(data.get("managerCode"));
  state.staffRegisterDraft = { firstName, lastName, password, managerCode };

  if (!firstName || !lastName || !password || !managerCode) {
    setStaffLoginError("Preencha nome, sobrenome, senha e código.");
    return;
  }

  if (!/^\d{6}$/.test(managerCode)) {
    setStaffLoginError("O código do gestor master deve ter exatamente 6 dígitos.");
    return;
  }

  const passwordError = validateStaffPassword(password);
  if (passwordError) {
    setStaffLoginError(passwordError);
    return;
  }

  const authorizedBy = STAFF_MASTER_CODES[managerCode];
  if (!authorizedBy) {
    setStaffLoginError("Código de gestor master inválido.");
    return;
  }

  const username = staffUsernameFromName(firstName, lastName);
  if (!username) {
    setStaffLoginError("Não foi possível criar o usuário. Revise nome e sobrenome.");
    return;
  }

  const response = await staffAuthRequest("/api/staff/register", {
    username,
    password,
    firstName,
    lastName,
    managerCode
  });
  if (!response.ok) {
    setStaffLoginError(response.data?.error || "Não foi possível criar o acesso.");
    return;
  }

  state.staffUser = response.data.user;
  state.staffLoginMode = "login";
  state.staffLoginError = "";
  state.staffRegisterDraft = { firstName: "", lastName: "", password: "", managerCode: "" };
  await enterStaffPanel();
}

async function enterStaffPanel() {
  window.location.hash = "atendente";
  state.view = "staff";
  state.staffView = "overview";
  // Caixa começa fechado ao entrar no painel; aguarda syncCash para confirmar estado real
  state.cashOpen = false;
  state.staffOrders = [];
  render();
  await Promise.all([syncProducts(), syncOrders(), syncClients(), syncCash()]);
  render();
}

async function advanceOrder(orderId) {
  const order = state.staffOrders.find((item) => item.id === orderId);
  if (!order) return;
  const nextIndex = Math.min(orderStatusFlow.indexOf(order.status) + 1, orderStatusFlow.length - 1);
  const nextStatus = orderStatusFlow[nextIndex];

  if (/^\d+$/.test(orderId)) {
    const data = await apiRequest(`/api/orders/${orderId}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status: nextStatus })
    });
    if (data?.order) {
      await syncOrders();
      render();
      return;
    }
  }

  order.status = nextStatus;
  render();
}

async function saveStaffOrderItems() {
  const order = selectedStaffOrder();
  if (!order) return;
  if (!order.items?.length) {
    showToast("O pedido precisa ter pelo menos um item.");
    return;
  }

  if (/^\d+$/.test(String(order.id))) {
    const data = await apiRequest(`/api/orders/${order.id}/items`, {
      method: "PATCH",
      body: JSON.stringify({
        items: order.items.map((item) => ({
          product_id: item.product_id || item.productId || "",
          nome: item.nome,
          option: item.option || "",
          quantity: Number(item.quantity || 1),
          unit_price: Number(item.unit_price || item.preco || 0),
          notes: item.notes || ""
        }))
      })
    });

    if (data?.order) {
      await syncOrders();
    }
  }

  state.staffOrderSnapshot = null;
  state.staffModal = null;
  render();
  showToast("Pedido atualizado.");
}

function parseMoneyInput(value) {
  const normalized = String(value || "")
    .replace(/[^\d,.-]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  return Number.parseFloat(normalized) || 0;
}

function slugify(value) {
  return String(value || "produto")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || `produto-${Date.now()}`;
}

function localOrderFromCart(cartItems) {
  return {
    id: `local-${Date.now()}`,
    mesa: state.currentTable,
    itens: cartItems.map((item) => `${item.nome} x ${item.quantity}`).join(", "),
    hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    status: "Novo",
    items: cartItems
  };
}

async function finalizeOrder() {
  if (!state.cart.length) return;
  const cartItems = state.cart.map((item) => ({ ...item }));
  const payload = {
    mesa: state.currentTable,
    items: cartItems.map((item) => ({
      product_id: item.productId,
      nome: item.nome,
      option: item.option,
      quantity: item.quantity,
      unit_price: item.preco,
      notes: item.notes || ""
    }))
  };

  const data = await apiRequest("/api/orders", {
    method: "POST",
    body: JSON.stringify(payload)
  });

  if (data?.order) {
    state.lastOrderNumber = data.order.id;
    await syncOrders();
  } else {
    const localOrder = localOrderFromCart(cartItems);
    state.lastOrderNumber = localOrder.id.replace("local-", "");
    state.staffOrders = [localOrder, ...state.staffOrders];
  }

  state.cart = [];
  state.view = "success";
  render();
}

async function saveCashOpen() {
  const input = document.querySelector(".staff-dialog .staff-money-input") || document.querySelector(".staff-dialog input");
  const balance = parseMoneyInput(input?.value);
  const data = await apiRequest("/api/cash/open", {
    method: "POST",
    body: JSON.stringify({ balance })
  });

  state.cashOpen = data ? Boolean(data.is_open) : true;
  state.staffModal = null;
  state.staffView = "overview";
  render();
}

async function saveCashClose() {
  const data = await apiRequest("/api/cash/close", {
    method: "POST",
    body: JSON.stringify({})
  });

  state.cashOpen = data ? Boolean(data.is_open) : false;
  state.staffModal = null;
  state.staffView = "overview";
  render();
}

async function saveProductFromModal(target) {
  const dialog = target.closest(".staff-dialog");
  const inputs = [...dialog.querySelectorAll("input")];
  const category = dialog.querySelector("select")?.value || "Bebidas Quentes";
  const nome = inputs[0]?.value.trim() || "Novo produto";
  const preco = parseMoneyInput(inputs[1]?.value);
  const imagem = inputs[2]?.value.trim();
  const product = {
    id: slugify(nome),
    nome,
    categoria: category,
    descricao: "Produto cadastrado pelo painel.",
    preco,
    tamanho: "",
    opcoes: [],
    imagem: imagem && imagem !== "Selecionar arquivo" ? imagem : "assets/placeholder.png",
    frame: "Cadastro do atendente"
  };

  await apiRequest("/api/products", {
    method: "POST",
    body: JSON.stringify(product)
  });
  products = [product, ...products.filter((item) => item.id !== product.id)];
  state.staffModal = null;
  render();
}

async function saveClientFromModal(target) {
  const dialog = target.closest(".staff-dialog");
  const inputs = [...dialog.querySelectorAll("input")];
  const client = {
    nome: inputs[0]?.value.trim() || "Novo cliente",
    cpf: inputs[1]?.value.trim() || "",
    celular: inputs[2]?.value.trim() || "",
    nascimento: inputs[3]?.value.trim() || "",
    endereco: inputs[4]?.value.trim() || ""
  };

  await apiRequest("/api/clients", {
    method: "POST",
    body: JSON.stringify(client)
  });
  state.staffClients = [client, ...state.staffClients];
  state.staffModal = null;
  render();
}

function openDetail(productId) {
  const product = productById(productId);
  state.selectedProductId = productId;
  state.detailQty = 1;
  state.detailOption = product.opcoes[0] || "";
  state.detailNotes = "";
  state.editCartId = null;
  state.editReturnView = null;
  setView("detail");
}

function openCartItemEdit(cartId) {
  const item = state.cart.find((entry) => entry.uid === cartId);
  const product = item ? productById(item.productId) : null;
  if (!item || !product) return;

  state.selectedProductId = item.productId;
  state.detailQty = item.quantity;
  state.detailOption = item.option || product.opcoes[0] || "";
  state.detailNotes = item.notes || "";
  state.editCartId = item.uid;
  state.editReturnView = state.view === "checkout" ? "checkout" : "menu";
  setView("detail");
}

function addCurrentProduct() {
  const product = productById(state.selectedProductId);
  const option = state.detailOption || product.opcoes[0] || "";
  const notes = state.detailNotes.trim();
  const editingId = state.editCartId;
  const isSameConfiguration = (item) =>
    item.productId === product.id &&
    item.option === option &&
    (item.notes || "").trim() === notes;

  if (editingId) {
    const nextView = state.editReturnView === "checkout" && state.cart.length ? "checkout" : "menu";
    const editedItem = state.cart.find((item) => item.uid === editingId);
    const matchingItem = state.cart.find((item) => item.uid !== editingId && isSameConfiguration(item));

    if (matchingItem) {
      matchingItem.quantity += state.detailQty;
      state.cart = state.cart.filter((item) => item.uid !== editingId);
    } else if (editedItem) {
      Object.assign(editedItem, {
        productId: product.id,
        nome: product.nome,
        preco: product.preco + optionPrice(option),
        imagem: product.imagem,
        option,
        quantity: state.detailQty,
        notes
      });
    } else {
      state.cart.push(makeCartItem(product.id, option, state.detailQty, notes));
    }

    state.editCartId = null;
    state.editReturnView = null;
    setView(nextView);
    return;
  }

  const existingItem = state.cart.find(isSameConfiguration);

  if (existingItem) {
    existingItem.quantity += state.detailQty;
  } else {
    state.cart.push(makeCartItem(product.id, option, state.detailQty, notes));
  }
  setView("menu");
}

function updateCartQty(cartId, delta) {
  const item = state.cart.find((entry) => entry.uid === cartId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    item.quantity = 0;
    state.pendingDeleteId = cartId;
  }
  render();
}

function showToast(message) {
  state.toast = message;
  renderModal();
  window.setTimeout(() => {
    state.toast = "";
    renderModal();
  }, 2200);
}

/* ─── TABLE ORDER FLOW ─────────────────────────────────────────────────── */

function tableFlowTotals() {
  const items = state.staffTableFlow.items || [];
  const subtotal = items.reduce(
    (sum, item) => sum + Number(item.unit_price || item.preco || 0) * Number(item.quantity || 0),
    0
  );
  const service = subtotal * 0.1;
  return { subtotal, service, total: subtotal + service };
}

function renderStaffTableFlow() {
  const flow = state.staffTableFlow;
  const tableLabel = flow.table || (flow.isNew ? "Novo Pedido" : "Mesa");
  const tabs = [
    { id: "cliente", label: "Cliente" },
    { id: "pedido", label: "Pedido" },
    { id: "pagamento", label: "Pagamento" }
  ];

  const tabContent = {
    cliente: renderFlowClienteTab,
    pedido: renderFlowPedidoTab,
    pagamento: renderFlowPagamentoTab
  };

  return `
    <div class="table-flow">
      <header class="staff-topbar table-flow-topbar">
        <div class="table-flow-header-left">
          <button class="table-flow-back-btn" data-action="table-flow-back" aria-label="Voltar">←</button>
          <h2>${tableLabel}</h2>
        </div>
      </header>
      <div class="table-flow-tabs-wrap">
        <nav class="table-flow-tabs" aria-label="Etapas do pedido">
          ${tabs.map((t) => `
            <button class="table-flow-tab ${flow.tab === t.id ? "is-active" : ""}"
                    data-action="table-flow-tab" data-tab="${t.id}">
              ${t.label}
            </button>
          `).join("")}
        </nav>
      </div>
      <div class="table-flow-content">
        ${(tabContent[flow.tab] || renderFlowClienteTab)()}
      </div>
    </div>
  `;
}

function renderFlowClienteTab() {
  const flow = state.staffTableFlow;
  const clients = state.staffClients;
  const selectedClient = clients.find(
    (c, i) => String(i) === String(flow.selectedClientId)
  );

  const tableSelector = flow.isNew
    ? `
      <div class="cliente-form-group" style="margin-bottom:24px">
        <label class="cliente-form-label">Mesa:</label>
        <select class="cliente-select" onchange="handleTableFlowTableChange(this)">
          <option value="">— Sem mesa —</option>
          ${staffTables.map((t) => `<option value="${t}" ${flow.table === t ? "selected" : ""}>${t}</option>`).join("")}
        </select>
      </div>
    `
    : "";

  const clientInfo = selectedClient
    ? renderClientInsights(selectedClient, flow)
    : `
      <div class="cliente-info-card">
        <p class="cliente-info-title">ℹ Dados sobre o Pedido e Cliente</p>
        <ul class="cliente-info-list">
          <li>Comanda aberta às ${new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}.</li>
          <li>Selecione um cliente para ver insights.</li>
        </ul>
      </div>
    `;

  return `
    <div class="cliente-tab-layout">
      <div class="cliente-form">
        ${tableSelector}
        <div class="cliente-form-group">
          <label class="cliente-form-label" for="flow-client-select">Nome do cliente:</label>
          <select id="flow-client-select" class="cliente-select" onchange="handleTableFlowClientChange(this)">
            <option value="">— Sem cliente —</option>
            ${clients.map((c, i) => `
              <option value="${i}" ${String(i) === String(flow.selectedClientId) ? "selected" : ""}>${c.nome}</option>
            `).join("")}
          </select>
        </div>
      </div>
      ${clientInfo}
    </div>
  `;
}

function renderClientInsights(client, flow) {
  const items = flow.items || [];
  const hora = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const insights = [
    `Comanda aberta às ${hora}.`,
    `Itens no pedido atual: ${items.length}.`,
    `Cliente: ${client.nome}.`,
    client.celular ? `Celular: ${client.celular}.` : null,
    client.nascimento ? `Nascimento: ${client.nascimento}.` : null,
    client.cpf ? `CPF: ${client.cpf}.` : null
  ].filter(Boolean);

  return `
    <div class="cliente-info-card">
      <p class="cliente-info-title">ℹ Dados sobre o Pedido e Cliente</p>
      <ul class="cliente-info-list">
        ${insights.map((text) => `<li>${text}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderFlowPedidoTab() {
  const flow = state.staffTableFlow;
  const currentCat = flow.category;
  const catProducts = productsByCategory(currentCat);
  const items = flow.items || [];
  const { total } = tableFlowTotals();

  return `
    <div class="pedido-tab-layout">
      <div class="pedido-menu-area">
        <nav class="pedido-category-tabs">
          ${categories.map((cat) => `
            <button class="pedido-category-tab ${cat === currentCat ? "is-active" : ""}"
                    data-action="table-flow-category" data-category="${cat}">
              ${cat}
            </button>
          `).join("")}
        </nav>
        <div class="pedido-product-grid">
          ${catProducts.map((product) => `
            <button class="pedido-product-btn"
                    data-action="table-flow-add-product" data-product="${product.id}">
              <strong>${product.nome}</strong>
              <span>${money(product.preco)}</span>
            </button>
          `).join("")}
        </div>
      </div>
      <aside class="pedido-order-panel">
        <div class="pedido-order-header">Itens lançados</div>
        <div class="pedido-order-list">
          ${items.length
            ? items.map((item) => {
                const uid = item.uid || item.id || item.productId;
                const unitPrice = Number(item.unit_price || item.preco || 0);
                return `
                  <article class="pedido-order-item">
                    <span class="qty">${item.quantity}x</span>
                    <span class="nome">${item.nome}</span>
                    <span class="price">${money(unitPrice * item.quantity)}</span>
                    <div class="pedido-item-controls">
                      <button class="pedido-qty-btn" data-action="table-flow-item-decrease" data-uid="${uid}" aria-label="Diminuir">−</button>
                      <button class="pedido-qty-btn plus" data-action="table-flow-item-increase" data-uid="${uid}" aria-label="Aumentar">+</button>
                      <button class="pedido-remove-btn" data-action="table-flow-item-remove" data-uid="${uid}" aria-label="Remover">✕</button>
                    </div>
                  </article>
                `;
              }).join("")
            : `<p class="pedido-order-empty">Nenhum item adicionado.</p>`
          }
        </div>
        <div class="pedido-order-total">
          <span>Total do consumo</span>
          <strong>${money(total)}</strong>
        </div>
        <button class="pedido-lancar-btn" data-action="table-flow-lancar"
                ${items.length ? "" : "disabled"}>
          Lançar
        </button>
      </aside>
    </div>
  `;
}

function renderFlowPagamentoTab() {
  const flow = state.staffTableFlow;
  const items = flow.items || [];
  const { subtotal, service, total } = tableFlowTotals();
  const method = flow.paymentMethod;

  const pixBox = method === "Pix" ? `
    <div class="pagamento-pix-box">
      <div class="pagamento-pix-qr">${renderPixQrSvg()}</div>
      <div class="pagamento-pix-info">
        <span>Chave Pix:</span>
        <strong>brewers@cafe.com</strong>
        <span>Valor:</span>
        <strong class="pix-valor">${money(total)}</strong>
      </div>
    </div>
  ` : "";

  return `
    <div class="pagamento-tab-layout">
      <div class="pagamento-items-area">
        <h3 class="pagamento-items-title">Lista de itens consumidos</h3>
        ${items.map((item) => {
          const unitPrice = Number(item.unit_price || item.preco || 0);
          return `
            <div class="pagamento-item-row">
              <span class="pagamento-item-qty">${item.quantity}x</span>
              <span>${item.nome}</span>
              <span class="pagamento-item-price">${money(unitPrice * item.quantity)}</span>
            </div>
          `;
        }).join("") || `<p style="color:var(--color-muted);font-size:14px">Nenhum item lançado.</p>`}
      </div>

      <div class="pagamento-summary-area">
        <h3 class="pagamento-summary-title">Resumo do Pagamento</h3>
        <div class="pagamento-summary-rows">
          <div class="pagamento-summary-row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
          <div class="pagamento-summary-row"><span>Taxa serviço (10%)</span><span>${money(service)}</span></div>
          <div class="pagamento-summary-row"><span>Desconto</span><span style="color:var(--color-success)">- ${money(0)}</span></div>
          <div class="pagamento-summary-row total"><span>TOTAL</span><strong>${money(total)}</strong></div>
        </div>

        <p class="pagamento-method-label">Forma de Pagamento</p>
        <div class="pagamento-methods">
          ${["Cartão", "Dinheiro", "Pix"].map((m) => `
            <button class="pagamento-method-btn ${method === m ? "is-active" : ""}"
                    data-action="table-flow-payment-method" data-method="${m}">
              ${m === "Cartão" ? "💳 " : m === "Dinheiro" ? "💵 " : "📱 "}${m}
            </button>
          `).join("")}
        </div>
        ${pixBox}
        <div class="pagamento-actions">
          <button class="pagamento-confirm-btn" data-action="table-flow-confirm-payment"
                  ${items.length ? "" : "disabled"}>
            ✓ Confirmar Pagamento
          </button>
          <button class="pagamento-print-btn" data-action="table-flow-print">
            Imprimir Conta
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderPixQrSvg() {
  // Simple fake QR code SVG for prototype
  const size = 80;
  const cell = 8;
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0],
    [1,0,0,0,0,0,1,0,0,1],
    [1,0,1,1,1,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,0,1],
    [1,0,1,1,1,0,1,1,1,0],
    [1,0,0,0,0,0,1,0,1,1],
    [1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,0,1,1,0,1,0],
    [0,1,0,0,1,0,0,1,0,1]
  ];
  const rects = pattern.flatMap((row, r) =>
    row.map((cell, c) => cell
      ? `<rect x="${c * 8}" y="${r * 8}" width="8" height="8" fill="#000"/>`
      : "")
  ).join("");
  return `<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`;
}

// Change handlers wired via onchange (bypasses dataset-only approach)
function handleTableFlowClientChange(select) {
  state.staffTableFlow.selectedClientId = select.value === "" ? null : select.value;
  render();
}
function handleTableFlowTableChange(select) {
  state.staffTableFlow.table = select.value || null;
  render();
}

async function tableFlowLancar() {
  const flow = state.staffTableFlow;
  if (!flow.items.length) {
    showToast("Adicione ao menos um item.");
    return;
  }
  const mesa = flow.table || "Balcão";
  const payload = {
    mesa,
    items: flow.items.map((item) => ({
      product_id: item.product_id || item.productId || "",
      nome: item.nome,
      option: item.option || "",
      quantity: Number(item.quantity || 1),
      unit_price: Number(item.unit_price || item.preco || 0),
      notes: item.notes || ""
    }))
  };

  if (flow.orderId && /^\d+$/.test(String(flow.orderId))) {
    const data = await apiRequest(`/api/orders/${flow.orderId}/items`, {
      method: "PATCH",
      body: JSON.stringify({ items: payload.items })
    });
    if (data?.order) await syncOrders();
  } else {
    const data = await apiRequest("/api/orders", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    if (data?.order) {
      state.staffTableFlow.orderId = data.order.id;
      await syncOrders();
    } else {
      const localId = `local-${Date.now()}`;
      state.staffTableFlow.orderId = localId;
      state.staffOrders = [
        {
          id: localId,
          mesa,
          itens: flow.items.map((i) => `${i.nome} x ${i.quantity}`).join(", "),
          hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
          status: "Novo",
          items: flow.items.map((i) => ({ ...i })),
          total: tableFlowTotals().total
        },
        ...state.staffOrders
      ];
    }
  }

  showToast("Itens lançados com sucesso!");
  state.staffTableFlow.tab = "pagamento";
  render();
}

async function tableFlowConfirmPayment() {
  const flow = state.staffTableFlow;
  const { total } = tableFlowTotals();
  const orderId = flow.orderId;

  if (orderId && /^\d+$/.test(String(orderId))) {
    await apiRequest(`/api/orders/${orderId}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status: "Entregue" })
    });
    await syncOrders();
  } else if (orderId) {
    const localOrder = state.staffOrders.find((o) => o.id === orderId);
    if (localOrder) {
      localOrder.status = "Entregue";
      localOrder.paymentMethod = flow.paymentMethod;
      localOrder.total = total;
    }
  }

  showToast(`Pagamento via ${flow.paymentMethod} confirmado! ${money(total)}`);
  state.staffTableFlow = {
    active: false,
    isNew: false,
    table: null,
    tab: "cliente",
    selectedClientId: null,
    orderId: null,
    items: [],
    paymentMethod: "Pix",
    category: "Bebidas Quentes"
  };
  state.staffView = "orders";
  render();
}

render();
bootstrap();
