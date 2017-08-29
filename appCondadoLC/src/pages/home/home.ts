import { Component } from '@angular/core';
import { NavController, NavParams,ToastController
        ,Events,PopoverController  } from 'ionic-angular';
import { LucesCtrlProvider} from '../../providers/luces-ctrl/luces-ctrl';
import {Luces} from '../../interfaces/luces.interfaces';
import {PopoverTimerPage} from '../index.pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  listPage:Luces[]=[];
  timer:boolean=false;
  timerCount:string='';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  lucesCtrlProv: LucesCtrlProvider,
              public toastCtrl: ToastController,
              public popoverCtrl: PopoverController,
              public events:Events) {
    this.CargaLuces();
    this.events.publish('msg',0)
    this.events.subscribe('timerCount',(tc)=>{
      this.timerCount=tc;
    })
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
    // this.lucesCtrlProv.comprobar(luces.ipluces).subscribe(
    this.lucesCtrlProv.comprobarPr(luces.ipluces,luces.id).subscribe(
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
        };
        this.events.publish('msg',2);
      },
      err=>{
        this.mostrarMsg("Error de Conexion disp:"+luces.descp);
        this.events.publish('msg',2);
        for(let luce of luces.idLuces){
         luce.disp=true;
         luce.estado=false;
        }
      }
    );
  }

  verificarIp(refresher){
    const promise = new Promise((resp,reject)=>{
      this.CargaLuces();
      this.events.subscribe('msg',(msg)=>{
        console.log(msg);
        if(msg==2){
         resp(123);
         this.events.publish('msg',1)
        }
      });

      console.log('promise');
      //resp(123);

    });
    promise.then(
      (resp)=>{
        console.log('refreses',resp);
        refresher.complete();
      }
    );
  }

  prender(luc:Luces,i:number){
    console.log("prender",luc);
    let luces= luc.idLuces[i];
    if(!luces.disp){
      if(luces.estado){
        this.lucesCtrlProv.prender(luc.ipluces,'off',luces.id+'').subscribe(
          resp=>{
            console.log(resp);
          }
        );
      } else {
        this.lucesCtrlProv.prender(luc.ipluces,'on',luces.id+'').subscribe(
          resp=>{
            console.log(resp);
          }
        );
      }
      luces.estado=!luces.estado;
    }

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

  mostarTimer(){
    console.log(this.listPage);
    let popover = this.popoverCtrl.create(PopoverTimerPage,{data:this.listPage});
    popover.present();

  }


}
