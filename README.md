# ☕ Café Luan

Sistema de gestão de pedidos para cafeteria, desenvolvido em **Vue 3** como adaptação do projeto base T-Burguer, migrando o segmento de negócio de hamburgueria para cafeteria.

## 🔗 Links

- **Produção (front-end):** https://luanlxt.github.io/cafe-luan/
- **API (JSON Server):** https://cafe-luan-db.onrender.com
- **Repositório do front-end:** https://github.com/luanLXT/cafe-luan
- **Repositório do banco de dados:** https://github.com/luanLXT/cafe-luan-db

> ⚠️ A API está hospedada em um plano gratuito (Render), que entra em modo de espera após períodos de inatividade. A primeira requisição após esse período pode levar de 30 a 50 segundos para responder.

## 📋 Visão Geral

O projeto original (T-Burguer) foi adaptado para o segmento de **cafeteria**. As principais mudanças realizadas foram:

- Substituição completa da identidade visual: nome, logotipo, paleta de cores (tons de marrom e dourado) e imagens.
- O campo "Ponto da Carne" do projeto original foi substituído por **Tipo de Leite** (integral, desnatado, vegetal ou sem leite) e **Tamanho** (pequeno, médio ou grande).
- O cardápio passou a listar variedades de café (Espresso, Cappuccino, Café com Chocolate, entre outros), com opcionais de **acompanhamentos** (cookies, muffins, pão de queijo) e **adicionais** (dose extra de espresso, chantilly, calda de caramelo).
- A listagem de pedidos ganhou controle de **status** (recebido, em preparo, pronto para retirada, entregue).

## 🚨 Solução Técnica dos Alertas Semânticos

A validação e o feedback visual foram centralizados em um componente reutilizável, `AlertaComponent.vue`, responsável por exibir mensagens com cor e ícone de acordo com o tipo de evento:

| Tipo | Cor | Quando é usado |
|---|---|---|
| `erro` | 🔴 Vermelho | Campos obrigatórios não preenchidos, falhas ao registrar pedido |
| `aviso` | 🟠 Laranja | Situações que impedem a ação, mas não são um erro de preenchimento (ex: nenhum café selecionado) |
| `info` | 🔵 Azul | Atualizações de status do pedido |
| `sucesso` | 🟢 Verde | Pedido criado ou excluído com sucesso |

**Como funciona:**

O `AlertaComponent` recebe três props: `tipo`, `mensagem` e `visivel`. Cada componente pai (`PedidoComponent` e `ListaPedidoComponent`) mantém um objeto reativo `alerta` em seu `data()`, e expõe um método `mostrarAlerta(tipo, mensagem)` que atualiza esse objeto e rola a tela suavemente até o alerta, garantindo que o usuário sempre veja o feedback, independentemente de onde estiver na página.

A validação do formulário de pedido (`PedidoComponent.vue`) é feita antes do envio à API: o método `validarPedido()` verifica, em sequência, se um café foi selecionado, se o nome do cliente foi informado, e se o tipo de leite e o tamanho foram escolhidos. Caso qualquer verificação falhe, o alerta correspondente é exibido e o envio é interrompido — o pedido só é enviado à API se todas as validações passarem.

## 🧭 Experiência do Usuário (UX)

- **Redirecionamento automático:** após a confirmação de um pedido (alerta de sucesso exibido), o usuário é automaticamente redirecionado para a tela de listagem de pedidos.
- **Atualização em tempo real:** a listagem de pedidos reflete imediatamente qualquer alteração — seja um novo pedido, uma exclusão ou uma mudança de status — sem necessidade de recarregar a página.

## 🛠️ Tecnologias

- Vue 3 (Options API)
- Vue Router 4
- JSON Server (mock de API REST)
- GitHub Pages (deploy do front-end)
- Render (hospedagem da API)

## ⚙️ Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar o banco de dados mock (porta 3000)
npm run bancojson

# Em outro terminal, rodar o front-end
npm run serve
```

Acesse `http://localhost:8080` no navegador.

## 📦 Estrutura do Projeto

```
src/
├── components/
│   ├── AlertaComponent.vue        # Alertas semânticos reutilizáveis
│   ├── BannerComponent.vue
│   ├── NavBarComponent.vue
│   ├── PedidoComponent.vue        # Formulário de pedido com validação
│   └── ListaPedidoComponent.vue   # Listagem com atualização em tempo real
├── views/
│   ├── MenuView.vue
│   ├── ConfiguracaoPedidoView.vue
│   └── PedidosView.vue
└── router/
    └── index.js
```

---

Desenvolvido por Luan como projeto acadêmico, adaptado do projeto-base T-Burguer.