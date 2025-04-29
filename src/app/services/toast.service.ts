import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController
  ) { }

  create(message: string, duration: number = 3000, header?: string, icon?: string) {
    this.toastCtrl.create({
      message,
      position: 'bottom',
      cssClass: 'custom-toast',
      duration,
      header,
      icon,
    }).then((r) => r.present())
  }

}
