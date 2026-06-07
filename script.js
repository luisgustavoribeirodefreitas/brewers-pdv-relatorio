const categories = ["Bebidas Quentes", "Bebidas Geladas", "Salgados", "Doces"];
const staffNav = [
  { id: "overview", label: "Visão Geral", icon: "▣" },
  { id: "orders", label: "Pedidos", icon: "▤" },
  { id: "clients", label: "Clientes", icon: "●" },
  { id: "reports", label: "Relatórios", icon: "▥" },
  { id: "menu", label: "Cardápio", icon: "◫" },
  { id: "settings", label: "Configurações", icon: "⚙" }
];

const orderStatusFlow = ["Novo", "Em preparo", "Pronto", "Entregue"];

const products = [
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

const state = {
  view: window.location.hash === "#atendente" ? "staff-login" : "welcome",
  category: "Bebidas Quentes",
  selectedProductId: null,
  detailQty: 1,
  detailOption: "",
  detailNotes: "",
  selectedReason: "Tirar dúvidas",
  pendingDeleteId: null,
  staffView: "overview",
  staffModal: null,
  cashOpen: false,
  toast: "",
  staffOrders: [
    { id: "p3", mesa: "Mesa 3", itens: "Cappuccino × 2, Pão de queijo", hora: "14:31", status: "Novo" },
    { id: "p7", mesa: "Mesa 7", itens: "Cold Brew × 1, Croissant × 1", hora: "14:28", status: "Em preparo" },
    { id: "p1", mesa: "Mesa 1", itens: "Espresso × 3", hora: "14:27", status: "Novo" },
    { id: "p5", mesa: "Mesa 5", itens: "Latte × 2, Bolo de laranja × 2", hora: "14:20", status: "Em preparo" },
    { id: "p9", mesa: "Mesa 9", itens: "Mocha × 1, Affogato × 1", hora: "14:15", status: "Pronto" },
    { id: "p2", mesa: "Mesa 2", itens: "Flat White × 2", hora: "14:10", status: "Entregue" }
  ],
  cart: [
    makeCartItem("capuccino-italiano", "Leite Integral", 1),
    makeCartItem("capuccino-italiano", "Leite Vegetal", 1)
  ]
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
  return `background-image: linear-gradient(135deg, rgba(184,114,42,.22), rgba(30,15,5,.12)), url("${path}")`;
}

function totals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.preco * item.quantity, 0);
  const service = subtotal * 0.1;
  return { subtotal, service, total: subtotal + service };
}

function productById(id) {
  return products.find((product) => product.id === id);
}

function setView(view) {
  state.view = view;
  render();
}

function render() {
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
  app.innerHTML = views[baseView]();
  renderModal();
  wireStaticFields();
}

function renderWelcome() {
  return `
    <section class="screen welcome-screen" data-screen="1 — Boas-vindas">
      <div class="welcome-card">
        <div class="logo-mark" aria-hidden="true">☕</div>
        <h1 class="welcome-title">BREWERS</h1>
        <div class="welcome-line"></div>
        <p class="welcome-table">Mesa 7</p>
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
        <span class="table-label">Mesa 7</span>
      </div>
      <button class="waiter-button" data-action="call">Chamar Garçom</button>
    </header>
  `;
}

function renderMenu() {
  const currentProducts = products.filter((product) => product.categoria === state.category);
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
      <div class="product-image" style='${imageStyle(product)}'><span aria-hidden="true">☕</span></div>
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
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const values = totals();
  return `
    <aside class="cart-panel" aria-label="Pedido da mesa">
      <div class="cart-header">
        <strong>Mesa 7</strong>
        <span>${totalItems} ${totalItems === 1 ? "item selecionado" : "Itens selecionados"}</span>
      </div>
      <div class="cart-list">
        ${state.cart.length ? state.cart.map(renderCartItem).join("") : `<p class="empty-cart">Nenhum item selecionado.</p>`}
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
  return `
    <article class="${className}" data-cart-id="${item.uid}">
      <div class="cart-thumb" style='${imageStyle(product)}'></div>
      <div>
        <h3 class="cart-item-title">${item.nome}</h3>
        <p class="cart-item-option">${item.option || "Sem opção"}</p>
        ${renderQtyControl(item)}
      </div>
      <p class="cart-item-price">${money(item.preco * item.quantity)}</p>
      <button class="remove-button" aria-label="Remover ${item.nome}" data-action="request-delete" data-cart-id="${item.uid}">⌫</button>
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
        <button class="primary-button" data-action="add-to-cart">Adicionar ao Pedido</button>
      </div>
    </section>
  `;
}

function renderCall() {
  const reasons = ["Tirar dúvidas", "Pedir mais itens", "Fechar a conta", "Outro"];
  return `
    <section class="screen call-screen" data-screen="6 — Chamar Garçom">
      <header class="screen-header">
        <button class="call-header-back" data-action="back-menu">← Chamar Garçom</button>
        <span class="call-table">Mesa 7</span>
      </header>
      <div class="call-center">
        <div class="bell-icon" aria-hidden="true">&#128276;</div>
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
      <div class="success-icon">✓</div>
      <h2 class="success-title">Pedido Enviado!</h2>
      <p class="success-copy">Seu pedido está sendo preparado com carinho.</p>
      <div class="order-number-box">
        <span>Número do Pedido</span>
        <strong>#42</strong>
      </div>
      <p class="success-time">Tempo estimado: 8–12 min</p>
      <div class="success-actions">
        <button class="secondary-button" data-action="back-menu">Voltar ao Cardápio</button>
        <button class="secondary-button" data-action="home">Voltar ao Início</button>
      </div>
      <p class="success-footer">Mesa 7 · Brewers Café</p>
    </section>
  `;
}

function renderStaffLogin() {
  return `
    <section class="screen staff-login-screen" data-screen="A1 — Login">
      <div class="staff-login-left">
        <div class="staff-login-copy">
          <h1>BREWERS</h1>
          <h2>Sistema de Gestão<br>de Pedidos</h2>
          <div class="staff-login-line"></div>
          <p>Controle total do seu café na palma da mão.</p>
          <ul class="staff-feature-list">
            <li><span>▤</span>Pedidos em tempo real</li>
            <li><span>▣</span>Gestão de mesas</li>
            <li><span>▰</span>Fechamento de contas</li>
            <li><span>◔</span>Relatórios do dia</li>
          </ul>
        </div>
      </div>
      <form class="staff-login-form" data-action="staff-enter">
        <h2>Bem-vindo</h2>
        <p>Acesse sua conta</p>
        <label>Usuário<input value="ana.barista" autocomplete="username"></label>
        <label>Senha<input value="••••••••" type="text" autocomplete="current-password"></label>
        <button class="staff-primary" type="submit">Entrar</button>
        <small>Brewers v2.1 · Somente para funcionários</small>
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
  return `
    <aside class="staff-sidebar">
      <div class="staff-logo">
        <strong>BREWERS</strong>
        <span>Painel Admin</span>
      </div>
      <nav class="staff-nav" aria-label="Navegação do painel">
        ${staffNav.map((item) => `
          <button class="staff-nav-item ${state.staffView === item.id ? "is-active" : ""}" data-action="staff-nav" data-staff-view="${item.id}">
            <span>${item.icon}</span>${item.label}
          </button>
        `).join("")}
      </nav>
      <button class="staff-back-client" data-action="home">Voltar ao cliente</button>
      <div class="staff-user">
        <div>AB</div>
        <p><strong>Ana Barista</strong><span>Turno da manhã</span></p>
      </div>
    </aside>
  `;
}

function renderStaffContent() {
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
  const delivered = state.staffOrders.filter((order) => order.status === "Entregue").length + 33;
  const cashLabel = state.cashOpen ? "Caixa aberto" : "Abrir Caixa";
  return `
    ${renderStaffHeader("Pedidos em Aberto", "Segunda-feira, 13 de Abril · 14:32", `
      <button class="cash-button" data-action="${state.cashOpen ? "cash-menu" : "open-cash-modal"}">${cashLabel}<span>⌄</span></button>
    `)}
    <section class="staff-stats">
      <article><strong>47</strong><span>Pedidos Hoje</span></article>
      <article><strong class="warn">${prep}</strong><span>Em Preparo</span></article>
      <article><strong class="ok">${delivered}</strong><span>Entregues</span></article>
      <article><strong class="dark">6/12</strong><span>Mesas Ativas</span></article>
    </section>
    ${renderOrdersTable(state.staffOrders)}
  `;
}

function renderOrdersTable(orders) {
  return `
    <section class="staff-table">
      <div class="staff-table-head">
        <span>Mesa</span><span>Itens do Pedido</span><span>Hora</span><span>Status</span><span>Ações</span>
      </div>
      ${orders.map((order) => `
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
      `).join("")}
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
  const tables = ["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4", "Mesa 5", "Mesa 6", "Mesa 7", "Mesa 8", "Mesa 9"];
  return `
    ${renderStaffHeader("Mesas", "", `<button class="staff-primary small" data-action="new-order">Novo Pedido</button>`)}
    <section class="tables-grid">
      ${tables.map((table) => `
        <button class="table-card" data-action="staff-table-detail" data-table="${table}">
          <span>${table}</span>
        </button>
      `).join("")}
    </section>
  `;
}

function renderStaffClients() {
  const clients = [
    ["Luis Gustavo Freitas", "123.xxx.xxx-52", "(43) 9 1644-4645", "13/03/2007", "R. Marialvence, 140, Maringá, Paraná"],
    ["Maria Lucia Gonzaga", "158.xxx.xxx-90", "(44) 9 5516-6358", "25/12/1996", "R. Mario e Luigi, 6, Maringá, Paraná"]
  ];
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
          <div class="product-image" style='${imageStyle(product)}'></div>
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
  if (state.staffModal) {
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

  if (modal === "cash-menu") {
    return `
      <div class="modal-overlay staff-modal-layer">
        <div class="cash-menu-popover">
          <button data-action="staff-modal" data-modal="suprimento">Suprimento</button>
          <button data-action="staff-modal" data-modal="sangria">Sangria</button>
          <button data-action="staff-modal" data-modal="fechamento">Fechar Caixa</button>
          <button data-action="close-staff-modal">Caixa aberto</button>
        </div>
      </div>
    `;
  }

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
    return renderStaffDialog(titles[modal], `
      <p class="staff-dialog-message">Realize a abertura do caixa!</p>
    `, `<button class="staff-primary" data-action="close-staff-modal">Voltar</button>`);
  }

  if (modal === "order-detail" || modal === "table-detail") {
    return renderStaffDialog(titles[modal], renderOrderFlowBody(), `
      <button class="staff-secondary" data-action="close-staff-modal">Cancelar</button>
      <button class="staff-primary" data-action="staff-modal" data-modal="client-step">Cliente</button>
      <button class="staff-primary" data-action="staff-modal" data-modal="payment-step">Pagamento</button>
    `);
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
    return renderStaffDialog("Tela de Pagamento", `
      <div class="payment-summary">
        <div><span>Subtotal</span><strong>R$ 28,00</strong></div>
        <div><span>Taxa de serviço</span><strong>R$ 2,80</strong></div>
        <div><span>Total</span><strong>R$ 30,80</strong></div>
      </div>
      <div class="staff-form-grid">
        <label>Forma de pagamento<select><option>Pix</option><option>Dinheiro</option><option>Crédito</option></select></label>
        <label>Valor recebido<input value="R$ 30,80"></label>
      </div>
    `, `
      <button class="staff-secondary" data-action="show-toast" data-message="Conta enviada para impressão">Imprimir Conta</button>
      <button class="staff-primary" data-action="confirm-payment">✓ Confirmar Pagamento</button>
    `);
  }

  const bodyByModal = {
    "cash-open": `
      <label class="staff-money-label">Valor disponível em caixa<input value="R$ 0,00"></label>
    `,
    sangria: `
      <label class="staff-money-label">Valor a ser retirado do caixa<input value="R$"></label>
      <label class="staff-money-label">Motivo<textarea placeholder="Motivo"></textarea></label>
    `,
    suprimento: `
      <label class="staff-money-label">Valor a ser adicionado ao caixa<input value="R$"></label>
      <label class="staff-money-label">Motivo<textarea placeholder="Motivo"></textarea></label>
    `,
    fechamento: `
      <div class="payment-summary">
        <div><span>Dinheiro:</span><strong>R$100</strong></div>
        <div><span>Pix:</span><strong>R$49</strong></div>
        <div><span>Crédito:</span><strong>R$165</strong></div>
      </div>
    `,
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

  const saveAction = modal === "cash-open" ? "save-cash-open" : modal === "fechamento" ? "save-cash-close" : "close-staff-modal";
  return renderStaffDialog(titles[modal] || "Painel", bodyByModal[modal] || "", `
    <button class="staff-secondary" data-action="close-staff-modal">Cancelar</button>
    <button class="staff-primary" data-action="${saveAction}">Salvar</button>
  `);
}

function renderStaffDialog(title, body, footer) {
  return `
    <div class="modal-overlay staff-modal-layer">
      <section class="staff-dialog" role="dialog" aria-modal="true">
        <button class="close-x staff-close" data-action="close-staff-modal" aria-label="Fechar">X</button>
        <h2>${title}</h2>
        <div class="staff-dialog-body">${body}</div>
        <div class="staff-dialog-actions">${footer}</div>
      </section>
    </div>
  `;
}

function renderOrderFlowBody() {
  return `
    <div class="order-flow-tabs">
      <button class="is-active">Pedido</button><button>Cliente</button><button>Pagamento</button>
    </div>
    <div class="staff-config-list">
      <div><span>Cappuccino Italiano</span><strong>R$ 14,00</strong></div>
      <div><span>Pão de queijo</span><strong>R$ 5,00</strong></div>
      <div><span>Observação</span><em>Mesa próxima ao balcão.</em></div>
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
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, [data-category], [data-option], [data-reason]");
  if (!target) return;

  const action = target.dataset.action;
  const category = target.dataset.category;
  const option = target.dataset.option;
  const reason = target.dataset.reason;
  const staffView = target.dataset.staffView;

  if (category) {
    state.category = category;
    setView("menu");
    return;
  }

  if (staffView) {
    if (!state.cashOpen && staffView !== "overview") {
      state.staffModal = "cash-warning";
    } else {
      state.staffView = staffView;
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
    "staff-enter": () => enterStaffPanel(),
    call: () => setView("call"),
    "back-menu": () => setView("menu"),
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
    "increase-cart": () => updateCartQty(target.dataset.cartId, 1),
    "decrease-cart": () => updateCartQty(target.dataset.cartId, -1),
    "request-delete": () => {
      state.pendingDeleteId = target.dataset.cartId;
      render();
    },
    "cancel-delete": () => {
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
    finalize: () => {
      state.view = "success";
      render();
    },
    "notify-waiter": () => showToast(`Garçom chamado: ${state.selectedReason}`),
    "open-cash-modal": () => {
      state.staffModal = "cash-open";
      render();
    },
    "cash-menu": () => {
      state.staffModal = "cash-menu";
      render();
    },
    "staff-modal": () => {
      state.staffModal = target.dataset.modal;
      render();
    },
    "close-staff-modal": () => {
      state.staffModal = null;
      render();
    },
    "save-cash-open": () => {
      state.cashOpen = true;
      state.staffModal = null;
      state.staffView = "overview";
      render();
    },
    "save-cash-close": () => {
      state.cashOpen = false;
      state.staffModal = null;
      state.staffView = "overview";
      render();
    },
    "advance-order": () => advanceOrder(target.dataset.orderId),
    "staff-order-detail": () => {
      state.staffModal = "order-detail";
      render();
    },
    "staff-table-detail": () => {
      state.staffModal = "table-detail";
      render();
    },
    "new-order": () => {
      state.staffModal = "table-detail";
      render();
    },
    "generate-report": () => showToast("Relatório gerado"),
    "show-toast": () => showToast(target.dataset.message || "Ação realizada"),
    "confirm-payment": () => {
      state.staffModal = null;
      showToast("Pagamento confirmado");
    }
  };

  if (actions[action]) actions[action]();
});

document.addEventListener("submit", (event) => {
  if (event.target.matches(".staff-login-form")) {
    event.preventDefault();
    enterStaffPanel();
  }
});

function enterStaffPanel() {
  window.location.hash = "atendente";
  state.view = "staff";
  state.staffView = "overview";
  render();
}

function advanceOrder(orderId) {
  const order = state.staffOrders.find((item) => item.id === orderId);
  if (!order) return;
  const nextIndex = Math.min(orderStatusFlow.indexOf(order.status) + 1, orderStatusFlow.length - 1);
  order.status = orderStatusFlow[nextIndex];
  render();
}

function openDetail(productId) {
  const product = productById(productId);
  state.selectedProductId = productId;
  state.detailQty = 1;
  state.detailOption = product.opcoes[0] || "";
  state.detailNotes = "";
  setView("detail");
}

function addCurrentProduct() {
  const product = productById(state.selectedProductId);
  const option = state.detailOption || product.opcoes[0] || "";
  state.cart.push(makeCartItem(product.id, option, state.detailQty, state.detailNotes));
  setView("menu");
}

function updateCartQty(cartId, delta) {
  const item = state.cart.find((entry) => entry.uid === cartId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
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

render();
