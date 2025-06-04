import { Observable, of } from "rxjs";
import { Movement, MOVEMENT_TYPE } from "../../models/movement.model";
import { MovementService } from "./movement.service";
import { Injectable } from "@angular/core";

@Injectable()
export class MovementMockService extends MovementService {

  movementMock: Movement = {
    createdAt: new Date().toISOString(),
    dateValidate: '10/02/2025',
    movementDate: '10/02/2025',
    type: MOVEMENT_TYPE.ENTRY,
    id: 1,
    productId: 1,
    quantity: 10,
    unitValue: 1000,
    totalValue: (1000 * 10),
  }

  movementMockLeave: Movement = { ...this.movementMock, type: MOVEMENT_TYPE.LEAVE }

  public createMovement(movement: Movement): Observable<Movement> {
    return of();
  }

  public getMoviments(): Observable<Movement[]> {
    return of([
      this.movementMock,
      this.movementMockLeave
    ]);
  }

}
