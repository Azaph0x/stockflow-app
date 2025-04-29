import { Component, input, Input, InputSignal, OnInit } from '@angular/core';
import { Movement, MOVEMENT_TYPE } from 'src/app/models/movement.model';

@Component({
  selector: 'item-movement',
  templateUrl: './item-movement.component.html',
  styleUrls: ['./item-movement.component.scss'],
  standalone: false
})
export class ItemMovementComponent  implements OnInit {

  // @Input() product?: Product;
  @Input({ required: true}) movement!: Movement;

  constructor() { }

  ngOnInit() {}

  getColor() {
    return this.isEntry() ? 'green' : 'red';
  }

  isEntry() {
    return this.movement.type == MOVEMENT_TYPE.ENTRY;
  }

}
