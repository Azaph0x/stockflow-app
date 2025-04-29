export type Movement = {
  id: number,
  quantity: number,
  type: MOVEMENT_TYPE,
  movementDate: string,
  productId: number,
  unitValue: number,
  totalValue: number,
  dateValidate: string,
  createdAt: string,
  batchId?: Number,         // FK para Batch (opcional)

}

export enum MOVEMENT_TYPE {
  ENTRY = 'entry',
  LEAVE = 'leave',
  ADJUSTMENT = 'adjustment',
}