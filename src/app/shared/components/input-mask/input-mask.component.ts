import { ChangeDetectionStrategy, Component, Input, input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss'],
  standalone: false,
})
export class InputMaskComponent  implements OnInit {

  placeholder = input<string>();
  name = input<string>();
  control = input<any>();
  label = input<string>();
  requiredNote = input<boolean>(false);
  icon = input<{ src: boolean, value: string}>();
  mask = input<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.control())
  }

}
