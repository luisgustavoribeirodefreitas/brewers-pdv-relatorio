# Brewers - Prototipo Figma com SQLite

Este projeto roda como uma SPA em HTML, CSS e JavaScript puro, com um backend local simples em Python e SQLite.

## Como acessar

1. No terminal, dentro desta pasta, rode:

```powershell
.\start-server.cmd
```

2. Abra no navegador:

- Cliente: http://127.0.0.1:8000
- Atendente/administrador: http://127.0.0.1:8000/#atendente

## Banco de dados

O banco e criado automaticamente em:

```text
brewers.sqlite3
```

Ele guarda produtos, pedidos, itens do pedido, clientes e estado do caixa. Se o arquivo ainda nao existir, o `server.py` cria as tabelas e popula dados iniciais baseados no Figma.

Se voce tiver Python instalado no PATH, tambem pode rodar:

```powershell
python server.py
```

## Endpoints principais

- `GET /api/products`
- `GET /api/orders`
- `POST /api/orders`
- `PATCH /api/orders/{id}/status`
- `GET /api/clients`
- `POST /api/clients`
- `GET /api/cash`
- `POST /api/cash/open`
- `POST /api/cash/close`

## Assets

As imagens reais ainda precisam ser exportadas do Figma para a pasta `assets/`, mantendo os nomes indicados no projeto, por exemplo `espresso.png`, `cold-brew.png` e `logo.svg`.
