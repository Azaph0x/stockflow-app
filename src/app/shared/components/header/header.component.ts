import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {

  @Input({ required: true }) title!: string;
  @Input() backRoute!: string[];

  constructor(
    private navCtrl: NavController
  ) { }
  ngOnInit() {}

  back() {
    if(this.backRoute) {
      this.navCtrl.navigateForward(this.backRoute)
      return;
    }
    this.navCtrl.back();
  }

}
