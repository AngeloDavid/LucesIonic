import { Component,ElementRef, ViewChild } from '@angular/core';
import { NavController,ToastController,Events  } from 'ionic-angular';
import {Luz} from '../../interfaces/luz';
import { LucesCtrlProvider} from '../../providers/luces-ctrl/luces-ctrl';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {
  /*//canvas
  @ViewChild('canvas') canvasEl : ElementRef;*/



  ledTab:Luz= {
    id:1,
    descp:'Tira Led',
    icon:'ios-albums',
    //ipluces:'192.168.0.15:3001/dato',
    ipluces:'192.168.0.155',
    idLuces:[
      {id:1,title:'Tira Led', estado: true,disp:false},
    ]
  };

  video: any ={
    //src:"http://192.168.0.15:3001/dato/",
    src:"http://192.168.0.155/" ,
    estado:false
  };


 /* private _CANVAS  : any;
  private _CONTEXT : any;
  private content:string;*/

  constructor(public navCtrl: NavController,public toastCtrl:ToastController,
              private  lucesCtrlProv: LucesCtrlProvider,public events:Events,
              public sanitizer: DomSanitizer              ) {
    this.events.publish('msg',0);
    this.cargarLsitas();
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
    let luces= this.ledTab.idLuces[i];
    if(!luces.disp){
      if(luces.estado){
        this.lucesCtrlProv.prender(this.ledTab.ipluces,'off','').subscribe(
          resp=>{
            console.log(resp);
          }
        );
      } else {
        this.lucesCtrlProv.prender(this.ledTab.ipluces,'on','').subscribe(
          resp=>{
            console.log(resp);
          }
        );
      }
      luces.estado=!luces.estado;
      this.video.estado=!this.video.estado;
      console.log(this.video.estado);
    }else{

    }

  }

  cargarLsitas(){
    this.lucesCtrlProv.comprobar(this.ledTab.ipluces).subscribe(
      resp=>{
        let parser = new DOMParser();
        let xmlData = parser.parseFromString(resp, "application/xml");
        let xmlArray=  xmlData.getElementsByTagName("LUZ");
        for(let i=0;i<xmlArray.length;i++){
          this.ledTab.idLuces[i].disp=false;
          if(xmlArray[i].childNodes[0].nodeValue=='1'){
            this.ledTab.idLuces[i].estado=true;
          }else {
            this.ledTab.idLuces[i].estado = false;
          }
        };
        this.events.publish('msg',2);
        this.video.estado=true;
      },
      err=>{
        this.mostrarMsg("Error de Conexion disp:"+ this.ledTab.descp);
        this.video.estado=false;
        for(let luce of this.ledTab.idLuces){
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




/*


  ionViewDidLoad()
  {
    this._CANVAS 	    = this.canvasEl.nativeElement;
    this._CANVAS.width  	= window.innerWidth;
    this._CANVAS.height 	=  window.innerHeight;

    this.initialiseCanvas();
      }

 drawCanvas() {
    let  colours = this._CONTEXT.createLinearGradient(0, 0, window.innerWidth, 0);
    for(let i=0; i <= 360; i+=10) {
      colours.addColorStop(i/360, 'hsl(' + i + ', 100%, 50%)');
    }
    this._CONTEXT.fillStyle = colours;
    this._CONTEXT.fillRect(0, 0, window.innerWidth, window.innerHeight);
    let luminance = this._CONTEXT.createLinearGradient(0, 0, 0, this._CONTEXT.canvas.height);
    luminance.addColorStop(0, '#ffffff');
    luminance.addColorStop(0.05, '#ffffff');
    luminance.addColorStop(0.5, 'rgba(0,0,0,0)');
    luminance.addColorStop(0.95, '#000000');
    luminance.addColorStop(1, '#000000');
   this._CONTEXT.fillStyle = luminance; this._CONTEXT.fillRect(0, 0, this._CONTEXT.canvas.width, this._CONTEXT.canvas.height);
}
  initialiseCanvas()
  {
    if(this._CANVAS.getContext)
    {
      this.setupCanvas();
    }
  }

  setupCanvas()
  {
    this._CONTEXT = this._CANVAS.getContext('2d');
    this.drawCanvas();

  }

  clearCanvas()
  {
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this.setupCanvas();
  }

  drawCircle()
  {
    this.clearCanvas();
    this._CONTEXT.beginPath();

    // x, y, radius, startAngle, endAngle
    this._CONTEXT.arc(this._CANVAS.width/2, this._CANVAS.height/2, 80, 0, 2 * Math.PI);
    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
  }
*/



}
