import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movement } from 'src/app/models/movement.model';
import { MovementService } from 'src/app/services/movement/movement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeMovementsComponent  implements OnInit {

  movements$!: Observable<Movement[]>;

  constructor(
    private movementService: MovementService
  ) { }

  ngOnInit() {
    this.movements$ = this.movementService.getMoviments();
  }

}
