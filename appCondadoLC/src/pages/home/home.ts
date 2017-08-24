import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { LucesCtrlProvider} from '../../providers/luces-ctrl/luces-ctrl';
import {Luces} from '../../interfaces/luces.interfaces';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  listPage:Luces[]=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  lucesCtrlProv: LucesCtrlProvider,
              public toastCtrl: ToastController) {
    this.CargaLuces();


  }

  CargaLuces(){
    this.listPage=[];
    for( let data of this.navParams.data){
      this.listPage.push(data);
    }
    for(let luce of this.listPage){
      this.cargarLsitas(luce);
    }
  }
  cargarLsitas(luces:Luces){
    this.lucesCtrlProv.comprobar(luces.ipluces).subscribe(
    /*this.lucesCtrlProv.comprobarPr(luces.ipluces,luces.id).subscribe(*/
      resp=>{
        let parser = new DOMParser();
        let xmlData = parser.parseFromString(resp, "application/xml");
        let xmlArray=  xmlData.getElementsByTagName("LUZ");
        for(let i=0;i<xmlArray.length;i++){
          luces.idLuces[i].disp=false;
          if(xmlArray[i].childNodes[0].nodeValue=='1'){
            luces.idLuces[i].estado=true;
          }else {
            luces.idLuces[i].estado = false;
          }
        }
      },
      err=>{
        this.mostrarMsg("Error de Conexion ip:"+luces.ipluces);
      }
    );
  }
  mostrarMsg(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000 ,
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Ok'
    });
    toast.present();
  }
  verificarIp(refresher){

    setTimeout(() => {
      this.CargaLuces();
      refresher.complete();
    }, 4000);
  }

}
