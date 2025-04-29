import { Component, Input, input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false
})
export class InputComponent  implements OnInit {

  @Input() placeholder!: string;
  @Input() name!: string;
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() requiredNote: boolean = false;
  @Input() icon!: { src: boolean, value: string};

  constructor() { }

  ngOnInit() {}

}
