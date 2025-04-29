# StockFlow - Sistema de Gerenciamento de Estoque


## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Requisitos do Sistema](#requisitos-do-sistema)
- [Instalação e Configuração](#instalação-e-configuração)
- [Uso](#uso)
- [Arquitetura](#arquitetura)
- [Modelo de Dados](#modelo-de-dados)
- [Status do Projeto](#status-do-projeto)
- [Contato](#contato)

## 📝 Sobre o Projeto

StockFlow é uma aplicação desenvolvida com Angular e Ionic para gerenciamento completo de estoque, permitindo controlar entradas, saídas e ajustes de produtos em tempo real. A plataforma é cross-platform, funcionando tanto em ambientes web quanto em dispositivos móveis (Android e iOS).

Este projeto está sendo desenvolvido como parte da disciplina de Desenvolvimento de Aplicativos Móveis, com foco em atividades extensionistas, visando aplicar conhecimentos acadêmicos em soluções práticas para a comunidade.

O sistema está sendo projetado para atender pequenas e médias empresas que precisam de um controle eficiente de inventário, com funcionalidades como:
- Gestão de produtos e categorias
- Controle de movimentações de estoque 
- Gerenciamento de lotes e datas de validade
- Relatórios simples e objetivos
- Interface responsiva e intuitiva

## ✨ Funcionalidades

### Produtos
- Cadastro e edição de produtos
- Visualização detalhada do estoque atual
- Controle por código de barras (opcional)
- Categorizaç ão de produtos
- Histórico de movimentações por produto

### Movimentações de Estoque
- Registro de entradas, saídas e ajustes
- Cálculo automático de valores totais
- Rastreamento de usuário responsável pela operação
- Histórico completo de movimentações

### Lotes
- Gestão de produtos por lote
- Controle de validade

### Relatórios
- Relatórios de estoque atual
- Histórico de movimentações por período
- Alertas de estoque baixo
- Análise de valor de inventário

### Interface de Usuário
- Design responsivo
- Navegação por abas para facilitar o acesso às funcionalidades
- Leitor de código de barras integrado (via câmera)
- Modo offline com sincronização posterior

## 🛠️ Tecnologias Utilizadas

  - Angular 16+
  - Ionic Framework 7+
  - Capacitor para aplicações nativas
  - RxJS para programação reativa e gerenciamento de estado

## 📁 Estrutura do Projeto

```
stockflow/
├── src/
│   ├── app/
│   │   ├── models/            # Interfaces/modelos de dados
│   │   ├── pages/             # Páginas da aplicação
│   │   │   ├── home/          # Página inicial
│   │   │   ├── products/      # Gestão de produtos
│   │   │   ├── movements/     # Movimentações de estoque
│   │   │   └── reports/       # Relatórios e análises
│   │   ├── services/          # Serviços para lógica de negócio e API
│   │   ├── shared/            # Componentes, pipes, diretivas compartilhadas
│   │   └── tabs/              # Sistema de navegação por abas do Ionic
│   ├── assets/                # Recursos estáticos
│   └── environments/          # Configurações de ambiente
├── resources/                 # Recursos para apps nativas (ícones, splash)
└── capacitor.config.json      # Configuração do Capacitor
```

## 💻 Requisitos do Sistema

- Node.js 16+
- NPM 8+ ou Yarn 1.22+
- Angular CLI 16+
- Ionic CLI 7+
- Android Studio (para build Android)
- Xcode (para build iOS, apenas em macOS)

## 🚀 Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/azaph0x/stockflow.git
   cd stockflow
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. **Execute a aplicação no modo de desenvolvimento:**
   ```bash
   ionic serve
   ```

4. **Para construir a versão para produção:**
   ```bash
   ionic build --prod
   ```

5. **Para compilar para Android:**
   ```bash
   ionic capacitor add android
   ionic capacitor copy android
   ionic capacitor open android
   ```

6. **Para compilar para iOS:**
   ```bash
   ionic capacitor add ios
   ionic capacitor copy ios
   ionic capacitor open ios
   ```

## 🖥️ Uso

Após instalar e executar o aplicativo, você poderá:

1. Fazer login no sistema com suas credenciais
2. Navegar pelas abas para acessar as diferentes funcionalidades
3. Na aba Produtos: cadastrar novos produtos e categorias
4. Na aba Movimentações: registrar entradas, saídas e ajustes no estoque
5. Na aba Relatórios: visualizar relatórios simples de estoque
6. Usar o leitor de código de barras para identificação rápida de produtos

## 🏗️ Arquitetura

O projeto segue a arquitetura de páginas do Ionic com Angular, com os seguintes princípios:

- **Navegação por Abas:** Sistema de navegação típico de aplicativos móveis
- **Reactive Forms:** Para gerenciamento de formulários
- **Service Layer:** Para regras de negócio e comunicação com APIs
- **Componentes Reutilizáveis:** No diretório shared para facilitar a manutenção
- **Modelo de Dados:** Interfaces TypeScript representando as entidades do sistema

## 📊 Modelo de Dados

### Entidades Principais

#### Product
```typescript
{
    id: Number,              // PK
    name: String,            // Nome do produto
    description: String,     // Descrição do produto
    isActivated: Boolean,    // Está ativo ou não
    barCode: string,         // Código de barras (opcional)
    stockQuantity: Number,   // Quantidade atual em estoque
    unitPrice: Number,       // Preço de venda do produto
    categoryId: Number,      // FK para CategoryProduct
    userId: Number,          // FK para usuário (opcional)
    createdAt: Date,         // Data de criação
    updatedAt: Date,         // Data de última atualização
    unitOfMeasure: String    // Tipo (ex.: "kg", "unidade", "litro")
}
```

#### Movement
```typescript
{
    id: Number,              // PK
    productId: Number,       // FK para Product
    quantity: Number,        // Quantidade movimentada
    type: String,            // Tipo: "ENTRADA", "SAÍDA", "AJUSTE"
    movementDate: Date,      // Data da movimentação
    unitValue: Number,       // Valor unitário na movimentação (preço de custo)
    totalValue: Number,      // Valor total (quantity * unitValue)
    userId: Number,          // FK para usuário (opcional)
    createdAt: Date,         // Data de criação
    updatedAt: Date,         // Data de última atualização
    batchId: Number,         // FK para Batch (opcional)
}
```

#### Batch
```typescript
{
    id: Number,              // PK
    productId: Number,       // FK para Product
    batchNumber: String,     // Número do lote
    dateValidate: Date,      // Data de validade (opcional)
    quantity: Number,        // Quantidade no lote
    createdAt: Date          // Data de criação
}
```

#### CategoryProduct
```typescript
{
    id: Number,              // PK
    name: String,            // Nome da categoria
    description: String,     // Descrição (opcional)
    createdAt: Date,         // Data de criação
    updatedAt: Date          // Data de última atualização
}
```

### Relacionamentos
- **Product <-> CategoryProduct:** Uma Category para muitos Product (1:N)
- **Product <-> Movement:** Um Product para muitos Movement (1:N)
- **Movement <-> User:** Um User para muitos Movement (1:N)
- **Product <-> Batch:** Um Product para muitos Batch (1:N)

## 📋 Status do Projeto

**Importante**: Este projeto está atualmente em fase de desenvolvimento, sendo construído como um MVP (Minimum Viable Product). Algumas funcionalidades podem estar em implementação ou podem sofrer alterações conforme o desenvolvimento avança.

### Em desenvolvimento:
- Interface de usuário responsiva
- Funcionalidades básicas de CRUD para produtos e movimentações
- Implementação completa do controle de movimentações
- Autenticação

### Próximas etapas:
- Implementação do controle de lotes
- Aprimoramento dos relatórios

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto extensionista, entre em contato:
- Email: azaph.contato@gmail.com

---

Desenvolvido com ❤️ 