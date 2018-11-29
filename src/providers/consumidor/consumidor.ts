import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConsumidorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsumidorProvider {
  API: string = "http://192.168.1.2:3000/api/v1"
  constructor(public http: HttpClient) {
    console.log('Hello ConsumidorProvider Provider');
  }

  listarLibros(){
    return this.http.get(this.API +'/libro').toPromise();
  }

  agregarLibro(_nombre: string, _autor:string, _isbn:string){
    return this.http.post(this.API + '/libro', {nombre: _nombre, autor: _autor, isbn: _isbn} ).toPromise();
  }

}
