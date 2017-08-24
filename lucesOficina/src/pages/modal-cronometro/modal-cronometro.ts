import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,ToastController  } from 'ionic-angular';
import {Luces} from '../../Interfaces/luces.interfaces';
import { BackgroundMode } from '@ionic-native/background-mode';
import {LucesCtrlProvider} from '../../providers/luces-ctrl/luces-ctrl';
/**
 * Generated class for the ModalCronometroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-cronometro',
  templateUrl: 'modal-cronometro.html',
})
export class ModalCronometroPage {

  contador:number=0;
  estado:boolean=false;
  fecha = new Date();

  luce:Luces={ title: "Titulo",
    icon: "briefcase",
    ip: "0.0.0.0",
    estado: false,
    disp:true
  };
  event = {
    fechaAct: '1990-02-19',
    TiempoAct: '07:43',
    fechaEnds:'',
    timeEnds: '1990-02-20'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,private backgroundMode: BackgroundMode,
              public viewCtrl: ViewController, private  lucespro : LucesCtrlProvider,public toastCtrl: ToastController) {
    this.luce=this.navParams.get('luz');
    let fechaCorta= new Date();
    console.log(fechaCorta);
    this.event.fechaAct=fechaCorta.toISOString();
    this.event.TiempoAct=`${fechaCorta.getHours()}:${fechaCorta.getMinutes()}`;
    this.event.fechaEnds=fechaCorta.toISOString();
    this.event.timeEnds=`${fechaCorta.getHours()+1}:${fechaCorta.getMinutes()}`;
    console.log(this.event)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCronometroPage');
  }


  empezar(){
    console.log(new Date());
    console.log();
    //let fecI=new Date(`${this.event.fechaAct.split('T')[0]} ${this.event.TiempoAct}`).getTime();

    //let fecF=new Date(`${this.event.fechaAct.split('T')[0]} ${this.event.TiempoAct}`).getTime();
    let fecI = new Date().getTime();
    let fecF= new Date(`${this.event.fechaEnds.split('T')[0]} ${this.event.timeEnds}`).getTime();

    console.log(fecF,'-',fecI);
    console.log();
    if(fecI>=fecF && !this.estado){
      this.prender();
    }
  }

  temporizar(){
    setInterval(()=>{
      this.contador++;
      this.empezar();
    },900);
  }

  prender() {
    this.estado=!this.estado;
    console.log('prendido');
    if (this.luce.disp) {
      let estado: boolean = this.luce.estado;
      if (estado) {
        this.lucespro.prender(this.luce.ip, 'off').subscribe(
          resp => {
            console.log(resp);
          }
        );
      } else {
        this.lucespro.prender(this.luce.ip, 'on').subscribe(
          resp => {
            console.log(resp);
          }
        );
      }
      this.luce.estado = !estado;
    } else {
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

  cerrar(){
    this.viewCtrl.dismiss();
  }
}
