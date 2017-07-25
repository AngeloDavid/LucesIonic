import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the LucesCtrlProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LucesCtrlProvider {

  BDDComicPersonal="https://pokeapp-af-tp.firebaseio.com/pokeapp-af-tp";
  urlDatos ="./datos.json";
  constructor(public http: Http) {
    console.log('Hello LucesCtrlProvider Provider');
  }

  getDatos(){
  console.log(this.urlDatos);
    return this.http.get(this.urlDatos).map(
      resultado => {
        return resultado.json();
      }
    );
  }
}
