export type Batch = {
    id: Number,              // Chave primária (PK), auto-incremento
    productId: Number,       // Chave estrangeira (FK) para Product
    batchNumber: String,     // Número do lote (ex.: "LOTE123")
    dateValidate?: Date,        // Data de validade (opcional)
    quantity: Number,        // Quantidade no lote
    createdAt: Date          // Data de criação
}