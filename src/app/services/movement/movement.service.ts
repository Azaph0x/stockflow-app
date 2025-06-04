import { Observable } from "rxjs";
import { Movement } from "../../models/movement.model";

export abstract class MovementService {

  public abstract getMoviments(): Observable<Movement[]>;
  public abstract createMovement(movement: Movement): Observable<Movement>;

}
