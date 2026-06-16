# Documentação do Figma para implementação HTML/CSS/JS

Arquivo Figma analisado: `Sem título`  
File key: `1Dcp7NQ4MLzDv1OKyA91yk`  
Páginas encontradas:

- `1. Tablet - Cliente `
- `2. Painel - Atendente/Administrador`

Nome interno retornado pela API: `Document`

## 1. Estrutura geral do projeto

O projeto é um sistema de cafeteria com duas áreas: cardápio digital para cliente em tablet e painel de atendente/administrador. A área do cliente contém tela de boas-vindas, cardápio por categoria, detalhe de produto, carrinho lateral, conferência de pedido, confirmação, chamada de garçom e confirmação de exclusão. A página 2 contém login operacional, dashboard, pedidos, mesas, clientes, relatórios, cardápio administrativo, configurações e modais de caixa/cadastro.

### Lista de telas/frames

Todos os frames principais possuem `1280x800`, exceto o pop-up `ConfirmaçãoDeExclusão`, que possui `212x83`.

| Ordem sugerida | Frame Figma | Área | Tamanho |
| --- | --- | --- | --- |
| 1 | `1 — Boas-vindas` | Cliente | 1280x800 |
| 2 | `2 — Cardápio / Bebidas Quentes` | Cliente | 1280x800 |
| 3 | `2 — Cardápio / Bebidas Geladas` | Cliente | 1280x800 |
| 4 | `2 — Cardápio / Salgados` | Cliente | 1280x800 |
| 5 | `2 — Cardápio / Doces` | Cliente | 1280x800 |
| 6 | `3 — Detalhe / Latte Macchiato` | Cliente | 1280x800 |
| 7 | `3 — Detalhe / Espresso Macchiato` | Cliente | 1280x800 |
| 8 | `3 — Detalhe / Mocaccino` | Cliente | 1280x800 |
| 9 | `3 — Detalhe / Latte` | Cliente | 1280x800 |
| 10 | `3 — Detalhe do Item` | Cliente | 1280x800 |
| 11 | `3 — Detalhe / Café Coado` | Cliente | 1280x800 |
| 12 | `3 — Detalhe / Espresso` | Cliente | 1280x800 |
| 13 | `3 — Detalhe / Mocaccino Gelado` | Cliente | 1280x800 |
| 14 | `3 — Detalhe / Latte Machiatto Gelado` | Cliente | 1280x800 |
| 15 | `3 — Detalhe / Latte Gelado` | Cliente | 1280x800 |
| 16 | `3 — Detalhe / Cappuccino Gelado` | Cliente | 1280x800 |
| 17 | `3 — Detalhe do Item G` | Cliente | 1280x800 |
| 18 | `3 — Detalhe / Misto Quente` | Cliente | 1280x800 |
| 19 | `3 — Detalhe / Pão na Chapa` | Cliente | 1280x800 |
| 20 | `3 — Detalhe / Pão de Queijo` | Cliente | 1280x800 |
| 21 | `3 — Detalhe / Trufa de Chocolate` | Cliente | 1280x800 |
| 22 | `3 — Detalhe / Bolo de Cenoura com Chocolate` | Cliente | 1280x800 |
| 23 | `3 — Detalhe / Brownie Artesanal` | Cliente | 1280x800 |
| 24 | `Conferencia de Pedido` | Cliente / overlay | 1280x800 |
| 25 | `ConfirmaçãoDeExclusão` | Cliente / pop-up | 212x83 |
| 26 | `5 — Pedido Confirmado` | Cliente | 1280x800 |
| 27 | `6 — Chamar Garçom` | Cliente | 1280x800 |

### Telas do atendente/administrador

Página Figma: `2. Painel - Atendente/Administrador`.

| Frame Figma | Área | Tamanho | Função |
| --- | --- | --- | --- |
| `A1 — Login` | Atendente/Admin | 1280x800 | Entrada do funcionário com usuário e senha. |
| `A2 — Dashboard` | Atendente/Admin | 1280x800 | Visão geral de pedidos, estatísticas e caixa. |
| `Aviso` | Overlay | 1280x800 | Alerta para abrir caixa antes de acessar áreas bloqueadas. |
| `Abertura` | Overlay | 1280x800 | Abertura de caixa com valor inicial. |
| `Sangria` | Overlay | 1280x800 | Retirada de valor do caixa com motivo. |
| `Suprimento` | Overlay | 1280x800 | Adição de valor ao caixa com motivo. |
| `Fechamento` | Overlay | 1280x800 | Conferência e fechamento de caixa. |
| `A2 — Dashboard` com `Mesas` | Atendente/Admin | 1280x800 | Grade de mesas e botão `Novo Pedido`. |
| `A2 — Tela de Pedidos` | Atendente/Admin | 1280x800 | Fluxo do pedido de uma mesa. |
| `Tela de Clientes` | Atendente/Admin | 1280x800 | Etapa de cliente no fluxo de atendimento. |
| `Tela de Pagamento` | Atendente/Admin | 1280x800 | Pagamento, impressão de conta e confirmação. |
| `A2 — Dashboard` com `Clientes` | Atendente/Admin | 1280x800 | Lista e cadastro de clientes. |
| `A2 — Dashboard` com `Relatórios` | Atendente/Admin | 1280x800 | Filtros e geração de relatório. |
| `A2 — Dashboard` com resultado de relatório | Atendente/Admin | 1280x800 | Relatório de faturamento gerado. |
| `A2 — Dashboard` com `Cardápio` | Atendente/Admin | 1280x800 | Administração de produtos. |
| `A2 — Dashboard` com `Configurações` | Atendente/Admin | 1280x800 | Configuração de impressoras, mesas e pagamentos. |
| `Configuração de Mesas` | Overlay | 331x351 | Lista e cadastro de mesas. |
| `Configuração de Pagamentos` | Overlay | 323x263 | Lista e cadastro de formas de pagamento. |
| `Configuração Impressora` | Overlay | 439x310 | Configuração de impressora. |
| `Cadastrar Produto` | Overlay | 487x465 | Cadastro de produto. |
| `Cadastro Cliente` | Overlay | 1280x800 | Cadastro de cliente. |
| `Cadastro de Mesas` | Overlay | 403x124 | Cadastro rápido de mesa. |
| `Cadastro de Pagamentos` | Overlay | 403x124 | Cadastro rápido de pagamento. |

No código inicial, a área de atendente foi implementada como SPA em `index.html#atendente`, reutilizando `styles.css` e `script.js`.

### Ordem de navegação sugerida

1. `1 — Boas-vindas`
2. `2 — Cardápio / Bebidas Quentes`
3. Troca por abas entre `Bebidas Quentes`, `Bebidas Geladas`, `Salgados` e `Doces`.
4. Botão `+` de produto abre a respectiva tela `3 — Detalhe / ...`.
5. Tela de detalhe permite selecionar opção, quantidade, observações e `Adicionar ao Pedido`.
6. Volta ao cardápio com carrinho atualizado.
7. `Confirmar Pedido` abre overlay `Conferencia de Pedido`.
8. `Finalizar Pedido` navega para `5 — Pedido Confirmado`.
9. `Voltar ao Cardápio` retorna ao cardápio; `Voltar ao Início` retorna para boas-vindas.
10. Em qualquer cardápio, `Chamar Garçom` navega para `6 — Chamar Garçom`.

## 2. Descrição de cada tela

### `1 — Boas-vindas`

Finalidade: tela inicial do tablet da mesa.

Tamanho: `1280x800`.

Layout geral: fundo marrom muito escuro `#261408`, faixa superior fina `#B8722A`, card central de `480x400` em `#F9F4EE`, radius `24px`, sombra `0 4 4 rgba(0,0,0,.25)`.

Elementos:

- Logo circular `96x96` em `#B8722A`, com ícone de grãos de café em branco.
- Texto `BREWERS`, Inter Extra Bold, 36px, centralizado.
- Linha horizontal `320px`, cor `#D4B896`.
- Texto `Mesa 7`, Inter Semi Bold 20px, cor `#5C3317`.
- Botão `Toque para iniciar`, `270x56`, radius `12px`, fundo `#B8722A`, texto branco.

Interações:

- `Toque para iniciar` leva para `2 — Cardápio / Bebidas Quentes`.

### `2 — Cardápio / Bebidas Quentes`

Finalidade: cardápio principal com bebidas quentes.

Tamanho: `1280x800`.

Layout geral: header superior `1280x89`, conteúdo em duas colunas: área de produtos à esquerda e carrinho fixo à direita `300px`.

Elementos:

- Header fundo `#1E0F05`.
- Logo textual `BREWERS`, Inter Extra Bold 29.45px, branco.
- Texto `Mesa 7`, cor `#D4B896`.
- Botão `Chamar Garçom`, `160x40`, fundo `#EDE5D8`, texto `#5C3317`.
- Abas: `Bebidas Quentes`, `Bebidas Geladas`, `Salgados`, `Doces`, cada uma `165x50`, pílula radius `81px`.
- Aba ativa: fundo `#B8722A`, texto `#EDE5D8`, sombra interna.
- Abas inativas: fundo `#EDE5D8`, texto `#B8722A`, sombra.
- Título `Bebidas Quentes`, 33.47px, preto.
- Grid de cards `3 colunas`, cards aprox. `287x180`, radius `12.67px`, sombra leve.
- Carrinho lateral com header `Mesa 7`, texto `2 Itens selecionados`, dois itens de Cappuccino, resumo e botão `Confirmar Pedido`.

Produtos/textos:

- `Espresso`; `Uma dose de café espresso. Sabor intenso e aromático. (50ml)`; `R$ 8,00`.
- `Café coado`; `Extração no método V60, corpo limpo e aromático. (100ml)`; `R$ 10,00`.
- `Capuccino italiano`; `Uma dose de café espresso com leite vaporizado, finalizado com canela. (150ml)`; `R$ 14,00`.
- `Latte`; `Uma dose de café espresso com leite vaporizado. (150ml)`; `R$ 12,00`.
- `Mocaccino`; `Uma dose de café espresso, ganache de chocolate e leite vaporizado. (150ml)`; `R$ 15,00`.
- `Espresso macchiato`; `Duas doses de café espresso com uma pequena quantidade da crema de leite vaporizado. (150ml)`; `R$ 14,00`.
- `Latte macchiato`; `Leite vaporizado com meia dose de espresso. (150ml)`; `R$ 14,00`.

Componentes clicáveis:

- Abas de categoria.
- Botão `+` em cada card.
- Botões de quantidade no carrinho: `−`, `+`.
- Ícone de lixeira.
- Botão `Confirmar Pedido`.
- Botão `Chamar Garçom`.

Estados visuais:

- Aba ativa/inativa.
- Botão `+` ativo marrom.
- Botão `−` cinza quando indica reduzir.
- Carrinho vazio deve exibir estado vazio, embora o Figma mostre sempre itens.

### `2 — Cardápio / Bebidas Geladas`

Finalidade: listagem da categoria bebidas geladas.

Tamanho: `1280x800`.

Layout: mesmo padrão da tela de bebidas quentes; aba `Bebidas Geladas` ativa.

Produtos/textos:

- `Mocaccino gelado`; `Uma dose de café espresso, ganache de chocolate e leite vaporizado. (240ml)`; `R$ 20,00`.
- `Latte machiatto`; `Leite vaporizado com uma dose de espresso (240ml)`; `R$ 18,00`.
- `Latte gelado`; `Duas doses de espresso com leite vaporizado. (240ml)`; `R$ 18,00`.
- `Capuccino Gelado`; `Duas doses de espresso com leite vaporizado, finalizado com canela em pó. (240ml)`; `R$ 18,00`.
- `Cold Brew`; `Extração lenta de 12h a 15h. (240ml)`; `R$ 17,00`.

Observação: o Figma contém dois cards `Cold Brew`, um com texto truncado `Extração lenta de 12h a 15h. (240ml`. Na implementação, manter apenas um item ou tratar como variação, conforme decisão do produto.

Componentes: mesmos do cardápio principal.

### `2 — Cardápio / Salgados`

Finalidade: listagem de salgados.

Tamanho: `1280x800`.

Layout: mesmo padrão de cardápio; aba `Salgados` ativa.

Produtos/textos:

- `Misto quente`; `Pão, requeijão, presunto cru e queijo mussarela.`; `R$ 14,00`.
- `Pao na chapa`; `R$ 7,00`.
- `Pao de queijo`; `R$ 5,00`.

Observação de conteúdo: nas telas de detalhe, os nomes aparecem com acento: `Pão na Chapa`, `Pão de Queijo`.

### `2 — Cardápio / Doces`

Finalidade: listagem de doces.

Tamanho: `1280x800`.

Layout: mesmo padrão de cardápio; aba `Doces` ativa.

Produtos/textos:

- `Trufa de chocolate`; `R$ 6,00`.
- `Bolo de cenoura com chocolate`; `R$ 15,00`.
- `Brownie artesanal`; `R$ 10,00`.

### Telas `3 — Detalhe / ...`

Finalidade: detalhar produto selecionado, escolher variações, quantidade e observações.

Tamanho: todas `1280x800`.

Layout geral:

- Coluna esquerda `500x800` com foto do produto ocupando o frame, overlay visual suave e título inferior em fonte manuscrita `Island Moments Regular`, 50px.
- Botão voltar `40x40` no topo esquerdo, branco, radius `8px`, seta `←`.
- Área direita com título grande, descrição, tamanho, opções, campo de observação.
- Barra inferior fixa na área direita, `780x123`, fundo branco, divisor superior, seletor de quantidade, preço e botão `Adicionar ao Pedido`.

Elementos recorrentes:

- Título do produto: Inter Bold, aprox. 47.59px, cor `#1E0F05`.
- Descrição: Inter Regular, aprox. 26.59px, cor `#998C80`.
- Tamanho: Inter Bold, aprox. 23.15px, cor `#998C80`.
- Label `Opção de leite` ou `Opção`: Inter Semi Bold, aprox. 24.27px.
- Botões de opção: `220x67`, radius `8px`, borda bege/marrom; ativo com fundo `#B8722A`.
- Campo `Observações`: `680x72`, placeholder `Ex: Sem açúcar...`, borda `#D4B896`, radius `8px`.
- Quantidade: botões circulares para `−` e `+`; valor central.
- Botão `Adicionar ao Pedido`: `270x56`, fundo `#B8722A`, texto branco Inter Extra Bold 20px.

Telas de detalhe e dados:

| Frame | Produto | Preço no detalhe | Tamanho | Opções |
| --- | --- | --- | --- | --- |
| `3 — Detalhe / Latte Macchiato` | Latte Macchiato | R$ 14,00 | 150ml | Integral, Vegetal + R$2, Sem Lactose + R$2 |
| `3 — Detalhe / Espresso Macchiato` | Espresso Macchiato | R$ 14,00 | 150ml | Integral, Vegetal + R$2, Sem Lactose + R$2 |
| `3 — Detalhe / Mocaccino` | Mocaccino | R$ 15,00 | 150ml | Integral, Vegetal + R$2, Sem Lactose + R$2 |
| `3 — Detalhe / Latte` | Latte | R$ 12,00 | 150ml | Integral, Vegetal + R$2, Sem Lactose + R$2 |
| `3 — Detalhe do Item` | Capuccino Italiano | R$ 12,00 | 150ml | Integral, Vegetal + R$2, Sem Lactose + R$2 |
| `3 — Detalhe / Café Coado` | Café Coado | R$ 10,00 | 100ml | opções copiadas, talvez não aplicáveis |
| `3 — Detalhe / Espresso` | Espresso | R$ 8,00 | 50ml | opções copiadas, talvez não aplicáveis |
| `3 — Detalhe / Mocaccino Gelado` | Mocaccino Gelado | R$ 20,00 | 240ml | Integral, Vegetal + R$2, Sem Lactose + R$2 |
| `3 — Detalhe / Latte Machiatto Gelado` | Latte Machiatto Gelado | R$ 18,00 | 240ml | Integral, Vegetal + R$2, Sem Lactose + R$2 |
| `3 — Detalhe / Latte Gelado` | Latte Gelado | R$ 18,00 | 240ml | Integral, Vegetal + R$2, Sem Lactose + R$2 |
| `3 — Detalhe / Cappuccino Gelado` | Cappuccino Gelado | R$ 18,00 | 240ml | Integral, Vegetal + R$2, Sem Lactose + R$2 |
| `3 — Detalhe do Item G` | Cold Brew | R$ 17,00 | 240ml | Com limão, Com Laranja, Com gengibre |
| `3 — Detalhe / Misto Quente` | Misto Quente | R$ 14,00 | sem tamanho visível | opções ocultas/copiadas |
| `3 — Detalhe / Pão na Chapa` | Pão na Chapa | R$ 7,00 | sem tamanho visível | opções ocultas/copiadas |
| `3 — Detalhe / Pão de Queijo` | Pão de Queijo | R$ 5,00 | sem tamanho visível | opções ocultas/copiadas |
| `3 — Detalhe / Trufa de Chocolate` | Trufa de Chocolate | R$ 6,00 | sem tamanho visível | opções ocultas/copiadas |
| `3 — Detalhe / Bolo de Cenoura com Chocolate` | Bolo de Cenoura com Chocolate | R$ 15,00 | sem tamanho visível | opções ocultas/copiadas |
| `3 — Detalhe / Brownie Artesanal` | Brownie Artesanal | R$ 10,00 | sem tamanho visível | opções ocultas/copiadas |

Nota importante: `Capuccino italiano` aparece no cardápio/carrinho como `R$ 14,00`, mas no frame `3 — Detalhe do Item` aparece como `R$ 12,00`. Recomenda-se corrigir no Figma ou definir `R$ 14,00` como fonte de verdade.

### `Conferencia de Pedido`

Finalidade: overlay/modal de revisão antes de finalizar.

Tamanho do frame: `1280x800`.

Layout:

- Fundo cinza translúcido cobrindo a tela.
- Modal central `610x646`, fundo branco, radius `21px`.
- Título `Conferência do pedido`, 32.59px, preto.
- Botão fechar `X`, vermelho, no topo direito.
- Lista de itens em linhas `570x88`, fundo `#EDE5D8`, radius `12px`.
- Bloco de resumo `570x140`, borda `#5C3317`, radius `12px`.
- Botão `Finalizar Pedido`, `570x72`, fundo `#5C3317`, texto branco 28.67px.

Textos extraídos:

- `Conferência do pedido`
- `Cappuccino Italiano`
- `Leite Integral`
- `1x`
- `R$ 14,00`
- `Subtotal`, `Taxa de serviço (10%)`, `Total`
- `R$ 5,00`, `R$ 50,00`, `R$ 55,00`

Observação: os valores do resumo no mockup de conferência estão invertidos/inconsistentes. Para implementação funcional, calcular subtotal, taxa 10% e total dinamicamente.

### `ConfirmaçãoDeExclusão`

Finalidade: pop-up pequeno para confirmar exclusão de item.

Tamanho: `212x83`.

Elementos:

- Texto `Confirma a exclusão do item?`
- Botões `Não` e `Sim`.

Interações:

- `Não` fecha o pop-up.
- `Sim` remove item e fecha o pop-up.

### `5 — Pedido Confirmado`

Finalidade: confirmação após finalizar pedido.

Tamanho: `1280x800`.

Layout:

- Fundo `#F9F4EE`.
- Faixa superior `20px`, `#B8722A`.
- Ícone de sucesso central `120x120`, fundo `#E2F3E7`, check `#339959`.
- Título `Pedido Enviado!`, 36px, Inter Extra Bold.
- Texto `Seu pedido está sendo preparado com carinho.`, 24px, `#998C80`.
- Box `Número do Pedido`, `#42`.
- Texto `Tempo estimado: 8–12 min`.
- Dois botões `Voltar ao Cardápio` e `Voltar ao Início`, ambos `270x56`.
- Rodapé `Mesa 7 · Brewers Café`.

### `6 — Chamar Garçom`

Finalidade: selecionar motivo e chamar atendimento.

Tamanho: `1280x800`.

Layout:

- Header `1280x89`, fundo `#1E0F05`.
- Texto clicável `← Chamar Garçom`, branco.
- Texto `Mesa 7`, `#D4B896`.
- Ícone de sino `144x144`.
- Título `O garçom será avisado`.
- Subtítulo `Selecione o motivo da chamada:`.
- Grid de motivos `2x2`, botões `260x56`.
- CTA inferior `Chamar Agora`, centralizado, `400x56`.

Motivos:

- `Tirar dúvidas` ativo no mockup.
- `Pedir mais itens`
- `Fechar a conta`
- `Outro`

## 3. Fluxo funcional

Formato solicitado:

- `1 — Boas-vindas` → Botão `Toque para iniciar` → `2 — Cardápio / Bebidas Quentes`
- `2 — Cardápio / Bebidas Quentes` → Aba `Bebidas Geladas` → `2 — Cardápio / Bebidas Geladas`
- `2 — Cardápio / Bebidas Quentes` → Aba `Salgados` → `2 — Cardápio / Salgados`
- `2 — Cardápio / Bebidas Quentes` → Aba `Doces` → `2 — Cardápio / Doces`
- `2 — Cardápio / Bebidas Geladas` → Aba `Bebidas Quentes` → `2 — Cardápio / Bebidas Quentes`
- `2 — Cardápio / Salgados` → Aba `Doces` → `2 — Cardápio / Doces`
- `2 — Cardápio / Doces` → Aba `Bebidas Quentes` → `2 — Cardápio / Bebidas Quentes`
- `Cardápio` → Botão `Chamar Garçom` → `6 — Chamar Garçom`
- `6 — Chamar Garçom` → Texto `← Chamar Garçom` → `2 — Cardápio / Bebidas Quentes`
- `6 — Chamar Garçom` → Motivo `Tirar dúvidas` → Seleciona motivo
- `6 — Chamar Garçom` → Motivo `Pedir mais itens` → Seleciona motivo
- `6 — Chamar Garçom` → Motivo `Fechar a conta` → Seleciona motivo
- `6 — Chamar Garçom` → Motivo `Outro` → Seleciona motivo
- `6 — Chamar Garçom` → Botão `Chamar Agora` → Ação esperada: notificar garçom
- `2 — Cardápio / Bebidas Quentes` → `+` do `Latte macchiato` → `3 — Detalhe / Latte Macchiato`
- `2 — Cardápio / Bebidas Quentes` → `+` do `Espresso macchiato` → `3 — Detalhe / Espresso Macchiato`
- `2 — Cardápio / Bebidas Quentes` → `+` do `Mocaccino` → `3 — Detalhe / Mocaccino`
- `2 — Cardápio / Bebidas Quentes` → `+` do `Latte` → `3 — Detalhe / Latte`
- `2 — Cardápio / Bebidas Quentes` → `+` do `Capuccino italiano` → `3 — Detalhe do Item`
- `2 — Cardápio / Bebidas Quentes` → `+` do `Café coado` → `3 — Detalhe / Café Coado`
- `2 — Cardápio / Bebidas Quentes` → `+` do `Espresso` → `3 — Detalhe / Espresso`
- `2 — Cardápio / Bebidas Geladas` → `+` do `Mocaccino gelado` → `3 — Detalhe / Mocaccino Gelado`
- `2 — Cardápio / Bebidas Geladas` → `+` do `Latte machiatto` → `3 — Detalhe / Latte Macchiato` no prototype; recomendado corrigir para `3 — Detalhe / Latte Machiatto Gelado`
- `2 — Cardápio / Bebidas Geladas` → `+` do `Latte gelado` → `3 — Detalhe / Latte Gelado`
- `2 — Cardápio / Bebidas Geladas` → `+` do `Capuccino Gelado` → `3 — Detalhe / Cappuccino Gelado`
- `2 — Cardápio / Bebidas Geladas` → `+` do `Cold Brew` → `3 — Detalhe do Item G`
- `2 — Cardápio / Salgados` → `+` do `Misto quente` → `3 — Detalhe / Misto Quente`
- `2 — Cardápio / Salgados` → `+` do `Pao na chapa` → `3 — Detalhe / Pão na Chapa`
- `2 — Cardápio / Salgados` → `+` do `Pao de queijo` → `3 — Detalhe / Pão de Queijo`
- `2 — Cardápio / Doces` → `+` do `Trufa de chocolate` → `3 — Detalhe / Trufa de Chocolate`
- `2 — Cardápio / Doces` → `+` do `Bolo de cenoura com chocolate` → `3 — Detalhe / Bolo de Cenoura com Chocolate`
- `2 — Cardápio / Doces` → `+` do `Brownie artesanal` → `3 — Detalhe / Brownie Artesanal`
- `Detalhe de produto` → Botão `←` → volta para tela anterior
- `Detalhe de produto` → Botão `+` da quantidade → aumenta quantidade
- `Detalhe de produto` → Botão `−` da quantidade → diminui quantidade
- `Detalhe de produto` → Opção `Integral` / `Vegetal` / `Sem Lactose` → seleciona opção
- `Detalhe de produto` → Campo `Observações` → registra observação do item
- `Detalhe de produto` → Botão `Adicionar ao Pedido` → adiciona item ao carrinho e volta ao cardápio
- `Cardápio` → `+` no carrinho → aumenta quantidade do item
- `Cardápio` → `−` no carrinho → diminui quantidade do item
- `Cardápio` → Ícone lixeira do item → abre `ConfirmaçãoDeExclusão`
- `ConfirmaçãoDeExclusão` → Botão `Não` → fecha pop-up
- `ConfirmaçãoDeExclusão` → Botão `Sim` → remove item do carrinho e fecha pop-up
- `Cardápio` → Botão `Confirmar Pedido` → abre overlay `Conferencia de Pedido`
- `Conferencia de Pedido` → Botão `X` → fecha overlay
- `Conferencia de Pedido` → Botão `Finalizar Pedido` → `5 — Pedido Confirmado`
- `5 — Pedido Confirmado` → Botão `Voltar ao Cardápio` → volta ao cardápio
- `5 — Pedido Confirmado` → Botão `Voltar ao Início` → `1 — Boas-vindas`

## 4. Design system

### Cores principais

- `#1E0F05`: marrom quase preto, header e textos fortes.
- `#B8722A`: marrom/caramelo principal, CTAs, abas ativas, preços.
- `#5C3317`: marrom escuro secundário, texto de botões claros e botão final do modal.
- `#F9F4EE`: fundo principal claro.

### Cores secundárias e de apoio

- `#FFFFFF`: cards, textos sobre botões, áreas internas.
- `#EDE5D8`: pills inativas, cards de conferência, fundos de imagem.
- `#F0E5D7`: fundo do carrinho lateral.
- `#C4B7A2`: header interno do carrinho.
- `#998C80`: textos secundários/descritivos.
- `#D4B896`: textos de mesa, divisores, placeholder.
- `#BFBFBF`: botões desabilitados/reduzir, bordas cinzas.
- `#E2F3E7`: fundo do ícone de sucesso.
- `#339959`: check de sucesso.
- `#FF0000`: X do modal.

### Tipografia

- Fonte principal: `Inter`.
- Pesos encontrados: Regular 400, Medium 500, Semi Bold 600, Bold 700, Extra Bold 800.
- Fonte decorativa em títulos sobre fotos: `Island Moments Regular`, 50px.
- Fonte pontual no X: `Iceland Regular`.

Tamanhos recorrentes:

- 10px, 10.56px: descrições pequenas em cards.
- 12px, 13px: detalhes de carrinho e rodapé.
- 14.79px, 15px, 16px: nomes e textos médios.
- 18px, 20px: botões e labels.
- 23.15px, 24.27px, 26.59px: detalhe de produto.
- 28px, 32.59px, 33.47px, 36px: títulos.
- 47.59px e 50px: títulos grandes de detalhe.

### Radius

- Cards de produto: `12.67px`.
- Cards do carrinho: `12px`.
- Botões principais: `12px`.
- Botão header `Chamar Garçom`: `10px`.
- Abas de categoria: `81px`.
- Modal de conferência: `21px`.
- Card de boas-vindas: `24px`.
- Logo circular: `48px`.
- Botões circulares: `16.9px`, `20px`, `24.55px`.

### Sombras

- Sombra principal: `0 4px 4px rgba(0,0,0,.25)`.
- Botões principais: `0 4px 2px rgba(0,0,0,.25)`.
- Cards de produto: `0 2.11px 8.44px rgba(0,0,0,.06)`.
- Algumas abas usam sombra interna `inset 0 4px 4px rgba(0,0,0,.25)`.

### Espaçamentos e dimensões recorrentes

- Header: `89px` de altura.
- Margem lateral do conteúdo: `24px`.
- Abas: `165x50`, gap horizontal aprox. `31px`.
- Grid produto: cards `287x180`, gap horizontal aprox. `33px`, gap vertical aprox. `21px`.
- Carrinho lateral: `300px` de largura.
- Itens do carrinho: `284x88`; miniatura `64x64`.
- Botão confirmar no carrinho: `270x56`.
- Modal conferência: `610x646`; linhas `570x88`; botão `570x72`.
- Detalhe: mídia esquerda `500x800`, conteúdo direito `780px`, barra inferior `780x123`.

### Estilo de botões

- Primário: fundo `#B8722A`, texto branco, radius `12px`, altura `56px`.
- Primário escuro do checkout: fundo `#5C3317`, texto branco, radius `17px`, altura `72px`.
- Pílulas de categoria: ativas com fundo `#B8722A`; inativas com fundo `#EDE5D8`.
- Botão adicionar em card: círculo `33.8px`, fundo `#B8722A`, sinal `+` branco.
- Botão quantidade: círculo menor `23px`; reduzir cinza, aumentar marrom.

### Estilo de inputs

- Campo de observação `680x72`, fundo branco, borda `#D4B896`, radius `8px`, padding interno `12px`, placeholder `#D4B896`.

### Estilo de cards

- Produto: fundo branco, imagem no topo `~287x84`, texto em baixo, preço marrom, botão circular à direita.
- Carrinho: fundo branco, radius `12px`, miniatura `64x64`, nome e opção, quantidade e preço.
- Conferência: linhas em `#EDE5D8`, radius `12px`.

### Estilo de menus e tabelas

- Menu principal é uma barra de abas horizontais.
- Não há tabela tradicional; o resumo de valores é uma lista de linhas label/valor com divisor antes do total.

## 5. Assets

### Logos e ícones

| Asset | Onde aparece | Exportação ideal | Tamanho aprox. | Exportar separado |
| --- | --- | --- | --- | --- |
| Logo circular com grãos | `1 — Boas-vindas` | SVG | 96x96 | Sim |
| Ícone lixeira | Carrinho e conferência | SVG | 14x19 | Sim |
| Ícone sino | `6 — Chamar Garçom` | SVG | 144x144 | Sim |
| Ícone sucesso/check | `5 — Pedido Confirmado` | SVG | 120x120 | Opcional; pode ser CSS/texto |
| Seta voltar | Detalhes e chamada | SVG ou texto | 40x40 | Opcional |

### Fotos de produtos

Exportar em PNG ou JPG:

- `espresso.png`: cards e detalhe de Espresso.
- `cafe-coado.png`: Café Coado.
- `capuccino-italiano.png`: Capuccino Italiano, miniaturas do carrinho.
- `latte.png`: Latte.
- `mocaccino.png`: Mocaccino.
- `espresso-macchiato.png`: Espresso Macchiato.
- `latte-macchiato.png`: Latte Macchiato.
- `mocaccino-gelado.png`: Mocaccino Gelado.
- `latte-machiatto-gelado.png`: Latte Machiatto Gelado.
- `latte-gelado.png`: Latte Gelado.
- `capuccino-gelado.png`: Cappuccino Gelado.
- `cold-brew.png`: Cold Brew.
- `misto-quente.png`: Misto Quente.
- `pao-na-chapa.png`: Pão na Chapa.
- `pao-de-queijo.png`: Pão de Queijo.
- `trufa-de-chocolate.png`: Trufa de Chocolate.
- `bolo-de-cenoura.png`: Bolo de Cenoura com Chocolate.
- `brownie-artesanal.png`: Brownie Artesanal.

Tamanhos recomendados:

- Cards: exportar/cortar em proporção próxima de `287x84`, mas usar arquivo maior `574x168` para retina.
- Detalhe: exportar versão vertical ou ampla capaz de preencher `500x800`; ideal `1000x1600` ou maior, dependendo da foto.
- Miniatura carrinho: pode reutilizar a mesma foto, exibida em crop `64x64`.

## 6. Conteúdo do sistema

### Produtos

```json
[
  {"nome":"Espresso","categoria":"Bebidas Quentes","descricao":"Uma dose de café espresso. Sabor intenso e aromático.","preco":"R$ 8,00","imagem":"espresso.png","observacoes":"Tamanho: 50ml"},
  {"nome":"Café coado","categoria":"Bebidas Quentes","descricao":"Extração no método V60, corpo limpo e aromático.","preco":"R$ 10,00","imagem":"cafe-coado.png","observacoes":"Tamanho: 100ml"},
  {"nome":"Capuccino italiano","categoria":"Bebidas Quentes","descricao":"Uma dose de café espresso com leite vaporizado, finalizado com canela.","preco":"R$ 14,00","imagem":"capuccino-italiano.png","observacoes":"Detalhe mostra R$ 12,00; cardápio/carrinho mostram R$ 14,00."},
  {"nome":"Latte","categoria":"Bebidas Quentes","descricao":"Uma dose de café espresso com leite vaporizado.","preco":"R$ 12,00","imagem":"latte.png","observacoes":"Tamanho: 150ml"},
  {"nome":"Mocaccino","categoria":"Bebidas Quentes","descricao":"Uma dose de café espresso, ganache de chocolate e leite vaporizado.","preco":"R$ 15,00","imagem":"mocaccino.png","observacoes":"Tamanho: 150ml"},
  {"nome":"Espresso macchiato","categoria":"Bebidas Quentes","descricao":"Duas doses de café espresso com uma pequena quantidade da crema de leite vaporizado.","preco":"R$ 14,00","imagem":"espresso-macchiato.png","observacoes":"Tamanho: 150ml"},
  {"nome":"Latte macchiato","categoria":"Bebidas Quentes","descricao":"Leite vaporizado com meia dose de espresso.","preco":"R$ 14,00","imagem":"latte-macchiato.png","observacoes":"Tamanho: 150ml"},
  {"nome":"Mocaccino gelado","categoria":"Bebidas Geladas","descricao":"Uma dose de café espresso, ganache de chocolate e leite vaporizado.","preco":"R$ 20,00","imagem":"mocaccino-gelado.png","observacoes":"Tamanho: 240ml"},
  {"nome":"Latte machiatto","categoria":"Bebidas Geladas","descricao":"Leite vaporizado com uma dose de espresso.","preco":"R$ 18,00","imagem":"latte-machiatto-gelado.png","observacoes":"Tamanho: 240ml"},
  {"nome":"Latte gelado","categoria":"Bebidas Geladas","descricao":"Duas doses de espresso com leite vaporizado.","preco":"R$ 18,00","imagem":"latte-gelado.png","observacoes":"Tamanho: 240ml"},
  {"nome":"Capuccino Gelado","categoria":"Bebidas Geladas","descricao":"Duas doses de espresso com leite vaporizado, finalizado com canela em pó.","preco":"R$ 18,00","imagem":"capuccino-gelado.png","observacoes":"Tamanho: 240ml"},
  {"nome":"Cold Brew","categoria":"Bebidas Geladas","descricao":"Extração lenta de 12h a 15h.","preco":"R$ 17,00","imagem":"cold-brew.png","observacoes":"Opções: Com limão, Com Laranja, Com gengibre"},
  {"nome":"Misto quente","categoria":"Salgados","descricao":"Pão, requeijão, presunto cru e queijo mussarela.","preco":"R$ 14,00","imagem":"misto-quente.png","observacoes":""},
  {"nome":"Pão na Chapa","categoria":"Salgados","descricao":"Pão francês grelhado na chapa com manteiga.","preco":"R$ 7,00","imagem":"pao-na-chapa.png","observacoes":""},
  {"nome":"Pão de Queijo","categoria":"Salgados","descricao":"Tradicional pão de queijo mineiro, quentinho e crocante.","preco":"R$ 5,00","imagem":"pao-de-queijo.png","observacoes":""},
  {"nome":"Trufa de Chocolate","categoria":"Doces","descricao":"Trufa artesanal de chocolate meio amargo.","preco":"R$ 6,00","imagem":"trufa-de-chocolate.png","observacoes":""},
  {"nome":"Bolo de Cenoura com Chocolate","categoria":"Doces","descricao":"Fofinho bolo de cenoura coberto com calda de chocolate.","preco":"R$ 15,00","imagem":"bolo-de-cenoura.png","observacoes":""},
  {"nome":"Brownie Artesanal","categoria":"Doces","descricao":"Brownie artesanal de chocolate amargo.","preco":"R$ 10,00","imagem":"brownie-artesanal.png","observacoes":""}
]
```

### Pedido simulado do Figma

```json
{
  "mesa": "Mesa 7",
  "itensSelecionados": 2,
  "itens": [
    {"nome": "Cappuccino Italiano", "opcao": "Leite Integral", "quantidade": 1, "preco": "R$ 14,00"},
    {"nome": "Cappuccino Italiano", "opcao": "Leite Vegetal", "quantidade": 1, "preco": "R$ 14,00"}
  ],
  "subtotal": "R$ 28,00",
  "taxaServico": "R$ 2,80",
  "total": "R$ 30,80"
}
```

### Conferência simulada do Figma

```json
{
  "tela": "Conferencia de Pedido",
  "itens": [
    {"nome": "Cappuccino Italiano", "opcao": "Leite Integral", "quantidade": 1, "preco": "R$ 14,00"},
    {"nome": "Cappuccino Italiano", "opcao": "Leite Integral", "quantidade": 1, "preco": "R$ 14,00"},
    {"nome": "Cappuccino Italiano", "opcao": "Leite Integral", "quantidade": 1, "preco": "R$ 14,00"}
  ],
  "subtotalNoMockup": "R$ 5,00",
  "taxaServicoNoMockup": "R$ 50,00",
  "totalNoMockup": "R$ 55,00",
  "observacao": "Valores inconsistentes; calcular dinamicamente na implementação."
}
```

## 7. Regras de responsividade

O arquivo contém apenas versão tablet `1280x800`.

Não foram encontrados frames mobile ou desktop separados.

Recomendação de adaptação:

- Tablet/base: manter layout original com header `89px`, grid de produtos em 3 colunas e carrinho lateral fixo `300px`.
- Desktop maior: centralizar o app em container máximo `1280px`, mantendo a proporção visual.
- Tablet menor: reduzir gaps e permitir scroll vertical na lista de produtos.
- Mobile: transformar o layout em coluna única; carrinho abaixo dos produtos ou como drawer/bottom sheet; abas com scroll horizontal; detalhes do produto empilhados com foto acima e barra de ação fixa no rodapé.
- Modal de conferência: largura fluida até `610px`, com scroll interno caso haja muitos itens.

## 8. Código base sugerido

Estrutura criada neste projeto:

```txt
/index.html
/styles.css
/script.js
/assets/
/assets/README.md
/DOCUMENTACAO_FIGMA.md
```

Classes CSS semânticas principais:

- `.app-shell`
- `.screen`
- `.welcome-screen`
- `.welcome-card`
- `.logo-mark`
- `.screen-header`
- `.brand-block`
- `.waiter-button`
- `.menu-layout`
- `.menu-main`
- `.category-tabs`
- `.category-tab`
- `.product-grid`
- `.product-card`
- `.product-image`
- `.product-body`
- `.cart-panel`
- `.cart-item`
- `.qty-control`
- `.cart-summary`
- `.detail-screen`
- `.detail-media`
- `.detail-content`
- `.detail-actions`
- `.option-button`
- `.notes-wrap`
- `.call-screen`
- `.reason-grid`
- `.success-screen`
- `.modal-overlay`
- `.checkout-modal`
- `.delete-dialog`

## 9. Exportação recomendada

### Frames a exportar como referência visual

Exportar estes frames em PNG para entregar ao outro assistente como comparação:

- `1 — Boas-vindas`
- `2 — Cardápio / Bebidas Quentes`
- `2 — Cardápio / Bebidas Geladas`
- `2 — Cardápio / Salgados`
- `2 — Cardápio / Doces`
- `3 — Detalhe do Item`
- `3 — Detalhe do Item G`
- `3 — Detalhe / Latte Macchiato`
- `3 — Detalhe / Espresso Macchiato`
- `3 — Detalhe / Mocaccino`
- `3 — Detalhe / Latte`
- `3 — Detalhe / Café Coado`
- `3 — Detalhe / Espresso`
- `3 — Detalhe / Mocaccino Gelado`
- `3 — Detalhe / Latte Machiatto Gelado`
- `3 — Detalhe / Latte Gelado`
- `3 — Detalhe / Cappuccino Gelado`
- `3 — Detalhe / Misto Quente`
- `3 — Detalhe / Pão na Chapa`
- `3 — Detalhe / Pão de Queijo`
- `3 — Detalhe / Trufa de Chocolate`
- `3 — Detalhe / Bolo de Cenoura com Chocolate`
- `3 — Detalhe / Brownie Artesanal`
- `Conferencia de Pedido`
- `ConfirmaçãoDeExclusão`
- `5 — Pedido Confirmado`
- `6 — Chamar Garçom`

### Assets a exportar separadamente

Exportar obrigatoriamente:

- Logo circular/grãos: SVG.
- Ícone de lixeira: SVG.
- Ícone sino: SVG.
- Fotos de todos os produtos: PNG/JPG.

Exportar opcionalmente:

- Check de sucesso como SVG, se não for recriado com CSS/texto.
- Seta voltar como SVG, se não for recriada com texto.

Destino sugerido:

- Colocar SVGs e imagens em `/assets/`.
- Usar os nomes listados em `/assets/README.md` para que o código inicial funcione sem alterar caminhos.
