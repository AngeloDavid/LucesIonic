import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ToastController   } from 'ionic-angular';
import {LucesCtrlProvider} from '../../providers/luces-ctrl/luces-ctrl';
import {Luces} from '../../Interfaces/luces.interfaces';
import { parseString } from 'xml2js';
import {ModalCronometroPage} from '../modal-cronometro/modal-cronometro';
/**
 * Generated class for the OficinasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-oficinas',
  templateUrl: 'oficinas.html',
})
export class OficinasPage {
   luces: Luces[] =[{
     title: "Oficina 1",
     icon: "briefcase",
     ip: "192.168.100.101",
     estado: false,
     disp:true
   }, {
     title: "Oficina 2",
     icon: "briefcase",
     ip: "192.168.100.102",
     estado: false,
     disp:true
   },
     {
       title: "Oficina 3",
       icon: "briefcase",
       ip: "192.168.100.103",
       /*estado: false ,*/
       disp:true
     }, {
       title: "Sala de reuniones",
       icon: "ios-people",
       ip: "192.168.100.104",
       /*estado: false,*/
       disp:true
     }];

  constructor(public navCtrl: NavController, public navParams: NavParams , private  lucespro : LucesCtrlProvider,public toastCtrl: ToastController,public modalCtrl: ModalController) {

    for (let luz of this.luces){
      this.lucespro.comprobar(luz.ip).subscribe(
        resp=>{
          parseString(resp,function (err, result) {
            luz.disp=false;
            let dato=result['CASA']['CUARTO'][0]['LUZ'][0];
            console.log(dato);
            if(dato==1){
              luz.estado=true;
            }else{
              luz.estado=false;
            }
          });
        },
        err=>{
          this.mostrarMsg("Error: dispositivo "+luz.title+" desconectado");
        }
      );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OficinasPage');
  }


  prender(index:number){

    if(!this.luces[index].disp){
      let estado: boolean = this.luces[index].estado;
      if(estado){
        this.lucespro.prender(this.luces[index].ip,'off').subscribe(
          resp=>{
            console.log(resp);
          }
        );
      }else{
        this.lucespro.prender(this.luces[index].ip,'on').subscribe(
          resp=>{
            console.log(resp);
          }
        );
      }
      this.luces[index].estado=!estado;
    }else{
      this.mostrarMsg("Dispositivo desactivado")
    }


  }
  mostrarMsg(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000 ,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }


  presentModal(luce:Luces) {
    let modal = this.modalCtrl.create(ModalCronometroPage,{ luz: luce });
    modal.present();
  }



}
