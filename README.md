<h1>Ejemplo de aplicacion movil ionic</h1>
<p>Para realizar una aplicacion móvil basados en Ionic Framework es correspondiente el implementar los siguientes pasos:</p>

<h2>Instalacion</h2>
<ul>
<li>Instalar Node js</li>
<li>Instalar ionic ejecutar el siguiente comando <code>npm install -g ionic</code></li>
<li>Instalar cordova ejecutar el siguiente comando <code>npm install -g cordova</code></li>
</ul>

<h2>Creación de Proyecto</h2>
<p>Para la creacion del proyecto es necesario ejecutar los siguientes comandos:</p>

<ul>
<li>Creacion del proyecto <code>ionic start</code> del cual deberas de seguir los pasos segun a como quieres trabajar tu proyecto.</li>
<li>Para la ejecucion de tu apliacion en tu navegador deberas de utilizar el comando <code>ionic serve</code> accede a la url <a href="http://localhost:8100/">http://localhost:8100/</a> para visualizar tu aplicacion.</li>
  <li>Para compilar la aplicacion es necesario el poder agregar la plataforma que deseas en este caso puedes utilizar <code>ionic cordova platform add android</code></li>
  <li>Para compilar la aplicacion en este caso android puedes utilizar el siguiente comando: <code>ionic cordova build android</code> esto generara un archivo con extension .apk, este deberas de instalar dentro del dispositivo.</li>
</ul>


<h2>Creación de funcionamiento</h2>
<p>Para crear el funcionamiento de la aplicacion es necesario conocer los lineamientos basicos de angular, los cuales puedes obtener mas informacion en el siguiente enlace <a href="http://www.tutorialesprogramacionya.com/angularya/">Curso angular</a></p>

<h3>Creacion de Servicio para consumo de servicio REST creado</h3>
<p>Para el consumo del servicio REST creado es necesario el utilizar el siguiente endpoint <a>http://localhost:3000</a> en este caso la ruta a utilizar sera http://localhost:3000/api/v1/libro </p>

```java
  
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

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
```
