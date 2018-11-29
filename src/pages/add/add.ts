import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { ConsumidorProvider } from '../../providers/consumidor/consumidor';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  nombre: string;
  autor: string;
  isbn: string;
  parent: any;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private _consumidorProvider: ConsumidorProvider,
      private toastCtrl: ToastController) {
     this.parent = this.navParams.get("parent");

  }
  agregar(){
    this._consumidorProvider.agregarLibro(this.nombre, this.autor, this.isbn).then(result=>{
      this.toastCtrl.create({
        message: 'Usuario Agregado',
        duration: 3000,
        position: 'bottom'
      }).present();
      this.parent.actualizarLibros();
      this.navCtrl.pop();
    });
  }

}
