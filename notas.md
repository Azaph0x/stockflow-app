# Entity

Product = {
    id: Number, // PK
    name: String, // Nome do product
    description: String, // Descrição do product
    isActivated: Boolean, // está ativo ou não
    barCode: string, // codigo barra (opcional)
    stockQuantity: Number,   // Quantidade atual em estoque (atualizada via gatilhos ou lógica)
    unitPrice: Number, // Preço do produto (Preço de venda)
    categoryId: Number,      // Chave estrangeira (FK) para CategoryProduct
    userId: Number,        // FK para usuário (opcional)
    createdAt: Date, // Data de criação
    updatedAt: Date  // Data de última atualização
    unitOfMeasure: String //  Tipo: (ex.: "kg", "unidade", "litro")
}

Movement = {
    id: Number,              // PK
    productId: Number,       // FK para Product
    quantity: Number,        // Quantidade movimentada
    type: String,            // Tipo: "ENTRADA", "SAÍDA", "AJUSTE"
    movementDate: Date,      // Data da movimentação
    unitValue: Decimal,      // Valor unitário na movimentação (ex.: 25.50) - Preço de custo
    totalValue: Decimal,     // Valor total (quantity * unitValue, para relatórios)
    userId: Number,          // FK para usuário (opcional)
    createdAt: Date,          // Data de criação
    updatedAt: Date          // Data de última atualização
    batchId: Number,         // FK para Batch (opcional)
}

Batch = { // Para gerenciar lotes de produtos (ex.: validade, número do lote). (Futuramente)
    id: Number,              // Chave primária (PK), auto-incremento
    productId: Number,       // Chave estrangeira (FK) para Product
    batchNumber: String,     // Número do lote (ex.: "LOTE123")
    dateValidate: Date,        // Data de validade (opcional)
    quantity: Number,        // Quantidade no lote
    createdAt: Date          // Data de criação
}


CategoryProduct = {
  id: Number,               // PK
  name: String,            // Nome da categoria
  description: String,     // Descrição (opcional)
  createdAt: Date,         // Data de criação
  updatedAt: Date          // Data de última atualização
}

Relacionamentos
Product <-> CategoryProduct: Uma Category para muitos Product (1:N). Vinculado por categoryId em Product.
Product <-> Movement: Um Product para muitos Movement (1:N). Vinculado por productId em Movement.
Movement <-> User: Um User para muitos Movement (1:N). Vinculado por userId em Movement.
Product <-> Batch: Um Product para muitos Batch (1:N). Vinculado por productId em Batch.


Supplier = {
  id: Number,
  name: String,
  cnpj_cpf: String,
}

