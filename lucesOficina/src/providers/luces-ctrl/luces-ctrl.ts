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

  constructor(public http: Http) {
    console.log('Hello LucesCtrlProvider Provider');
  }

  prender(ip:string, onF:string){
    let urlP:string ="http://"+ip+"/"+onF;
    return this.http.get(urlP).map( resp=>{return resp.json()});
  }

  comprobar(ip:string){
    let urlP:string ="http://"+ip+"/status";

    console.log(urlP);
    return this.http.get(urlP).map(resp=>{return resp.text()});
  }

}
