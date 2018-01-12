import { Component } from '@angular/core';
import { NavController,NavParams,ToastController,Events  } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import {Luz} from '../../interfaces/luz';
import { LucesCtrlProvider} from '../../providers/luces-ctrl/luces-ctrl';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  luzdt:Luz={
    id:0,
    descp:'Luces',
    icon:'ios-albums',
    ipluces:'192.168.0.188',
    idLuces:[
      {id:1,title:'Luz 1', estado: false,disp:false},
      {id:2,title:'Luz 2', estado: false,disp:false}
    ]

  };

  constructor(public navCtrl: NavController,private vibration: Vibration,public toastCtrl:ToastController,private  lucesCtrlProv: LucesCtrlProvider,public events:Events) {
      this.cargarLsitas();
    //this.cargarLsitas();
    this.events.publish('msg',0);


  }



  vibrar(tiempo){
    this.vibration.vibrate([tiempo]);
  }
  novibrar(){
    this.vibration.vibrate(0);
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


  prender(i:number){
    console.log('id',i)
    let luces= this.luzdt.idLuces[i];
    if(!luces.disp){
      if(luces.estado){
        this.lucesCtrlProv.prender(this.luzdt.ipluces,'off',luces.id+'').subscribe(
          resp=>{
            console.log(resp);
          }
        );
      } else {
        this.lucesCtrlProv.prender(this.luzdt.ipluces,'on',luces.id+'').subscribe(
          resp=>{
            console.log(resp);
          }
        );
      }
      luces.estado=!luces.estado;
    }else{
      this.vibrar(1000);
    }

  }

  cargarLsitas(){
    this.lucesCtrlProv.comprobar(this.luzdt.ipluces).subscribe(
      resp=>{
        let parser = new DOMParser();
        let xmlData = parser.parseFromString(resp, "application/xml");
        let xmlArray=  xmlData.getElementsByTagName("LUZ");
        for(let i=0;i<xmlArray.length;i++){
          this.luzdt.idLuces[i].disp=false;
          if(xmlArray[i].childNodes[0].nodeValue=='1'){
            this.luzdt.idLuces[i].estado=true;
          }else {
            this.luzdt.idLuces[i].estado = false;
          }
        };
        this.events.publish('msg',2);
      },
      err=>{
        this.vibrar(1000);
        this.mostrarMsg("Error de Conexion disp:"+ this.luzdt.descp);
        for(let luce of this.luzdt.idLuces){
          luce.disp=true;
          luce.estado=false;
        }
        this.events.publish('msg',2);

      }
    );
  }

  verificarIp(refresher){
    const promise = new Promise((resp,reject)=>{
      this.cargarLsitas();
      this.events.subscribe('msg',(msg)=>{
        console.log(msg);
        if(msg==2){
          resp(123);
          this.events.publish('msg',1)
        }
      });

    });
    promise.then(
      (resp)=>{
        console.log('refreses',resp);
        refresher.complete();
      }
    );
  }

}
