import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,Events } from 'ionic-angular';
import { LucesCtrlProvider} from '../../providers/luces-ctrl/luces-ctrl';

/**
 * Generated class for the SalaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})
export class SalaPage {

  title:string='';
  listLuces:any[]=[];
  ipPage:string;
  icon:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private  lucesCtrlProv: LucesCtrlProvider,
              public toastCtrl: ToastController,
              public events:Events) {
  this.title=this.navParams.data.descp;


  this.cargarListLuces();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaPage');
  }

  cargarListLuces(){

    this.listLuces=[];
    this.ipPage=this.navParams.data.ipluces;
    this.listLuces=this.navParams.data.idLuces;
    console.log(this.listLuces);
   this.lucesCtrlProv.comprobar(this.ipPage).subscribe(
      resp=>{
        /*console.log('hola');
        console.log(resp);
        console.log('Luces',this.listLuces);*/

        let parser = new DOMParser();
        let xmlData = parser.parseFromString(resp, "application/xml");
        let xmlArray=  xmlData.getElementsByTagName("LUZ");
        for(let i=0;i<xmlArray.length;i++){
          // console.log(xmlArray[i].childNodes[0].nodeValue);
          this.listLuces[i].disp=false;
          if(xmlArray[i].childNodes[0].nodeValue=='1'){
            this.listLuces[i].estado=true;
          }else {
            this.listLuces[i].estado = false;
          }
        }
        this.events.publish('msg',2);
      },
      err=>{
        this.mostrarMsg("Error de Conexion disp:"+this.title);
        this.events.publish('msg',2);
        for(let luce of this.listLuces){
          luce.disp=true;
          luce.estado=false;
        }
      }
    );
  }

  prender(i:any){
    let luces= this.listLuces[i];
    if(!luces.disp){
      if(luces.estado){
        this.lucesCtrlProv.prender(this.ipPage,'off',luces.id).subscribe(
          resp=>{
            console.log(resp);
          }
        );
      } else {
        this.lucesCtrlProv.prender(this.ipPage,'on',luces.id).subscribe(
          resp=>{
            console.log(resp);
          }
        );
      }
      this.listLuces[i].estado=!this.listLuces[i].estado;
    }

  }

  mostrarMsg(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000 ,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'middle'
    });
    toast.present();
  }
  verificarIp(refresher){
    const promise = new Promise((resp,reject)=>{
      this.cargarListLuces();
      this.events.subscribe('msg',(msg)=>{
        console.log(msg);
        if(msg==2){
          resp(123);
          this.events.publish('msg',1)
        }
      });
      console.log('promise');
    });
    promise.then(
      (resp)=>{
        console.log('refreses',resp);
        refresher.complete();
      }
    );
  }
}
