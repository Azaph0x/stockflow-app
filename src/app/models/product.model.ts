export type Product = {
  id: number,
  name: string,
  description: string,
  isActivated: Boolean,
  barCode: string,
  categoryId: number,
  stockQuantity: number;
  unitPrice: number;
  createdAt: string,
}

export type ProductDTO = {
  name: string,
  description: string,
  isActivated: Boolean,
  categoryId: number,
  barCode: string,
  unitPrice: number
}
