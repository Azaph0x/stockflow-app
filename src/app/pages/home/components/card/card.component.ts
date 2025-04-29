import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent  implements OnInit {

  @Input({ required: true }) title!: string;
  @Input({ required: true }) Icon!: string;
  @Input() iconIsSource: boolean = false;

  constructor() { }

  ngOnInit() {}

}
