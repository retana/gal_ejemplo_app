import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { ConsumidorProvider } from '../../providers/consumidor/consumidor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listaLibros: Array<any> = new Array<any>();
  constructor(public navCtrl: NavController, public _consumidorProvider: ConsumidorProvider) {
    this.actualizarLibros();
  }

  actualizarLibros(){
    this._consumidorProvider.listarLibros().then(resultado => {
      this.listaLibros = <Array<any>>resultado;
    });
  }

  addPage(){
    this.navCtrl.push(AddPage, {parent: this});
  }
}
