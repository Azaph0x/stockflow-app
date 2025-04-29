import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'custom-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false
})
export class SelectComponent  implements OnInit {

  @Input() placeholder: string = 'Selecionar';
  @Input() name!: string;
  @Input() control!: FormControl;
  @Input() label!: string;

  @Input() requiredNote: boolean = false;

  @Input({ required: true}) options!: any[];
  @Input({ required: true}) optionLabel!: string
  @Input({ required: true}) optionValue!: string

  constructor() { }

  ngOnInit() {}

}
