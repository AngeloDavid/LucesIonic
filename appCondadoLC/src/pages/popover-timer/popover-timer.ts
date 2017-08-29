import { Component } from '@angular/core';
import { NavController, NavParams,Events,ViewController } from 'ionic-angular';
import {Luces} from '../../interfaces/luces.interfaces';
import {LucesCtrlProvider} from '../../providers/luces-ctrl/luces-ctrl';
/**
 * Generated class for the PopoverTimerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-popover-timer',
  templateUrl: 'popover-timer.html',
})
export class PopoverTimerPage {


  List:Luces[]=[];
  t;
  event = {
    timeStarts: '00:30:00',
  };
  min=0;
  seg=0;
  segs=0;
  des:boolean=false;



  constructor(public navCtrl: NavController, public navParams: NavParams,
              private  lucesCtrlProv: LucesCtrlProvider,public events:Events,private viewCtrl :ViewController) {
    this.List=this.navParams.get('data');
    console.log(this.List);
    this.events.subscribe('timerCount',(tc)=>{
      this.event.timeStarts=tc;
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverTimerPage');
  }

  start(){
    console.log(this.event.timeStarts);
    let horaarray= this.event.timeStarts.split(":");
    console.log(horaarray);
    this.min=  parseInt(horaarray[1]);
    this.seg=  parseInt(horaarray[2]);
    this.min=60*this.min;
    this.segs=this.min+this.seg;


    this.t=setInterval(()=>{this.okTimer();}, 1000);

  }
  aumentarZero(i:number){
    if(i<10){
       return `0${i}`;
    } else {
      return  `${i}`;
    }
  }
  segMim(segu:number){
    let min= Math.floor(segu/60);
    let seg=segu % 60;
    console.log(min,'-',seg);
    return `00:${this.aumentarZero(min)}:${this.aumentarZero(seg)}`
  }


  okTimer(){
    // console.log(this.segs);
    if(this.segs<=0){
        clearTimeout(this.t);
        for(let luz of this.List){
          for (let lindex in luz.idLuces){
            if(luz.idLuces[lindex].temp &&!luz.idLuces[lindex].disp)
              this.prender(luz, parseInt(lindex),this.des);
          }
        }
    } else {
        this.segs--;
        this.event.timeStarts=this.segMim(this.segs);
    }
    this.events.publish('timerCount',this.event.timeStarts);
  }

  cerrar(){
    clearTimeout(this.t);
    this.viewCtrl.dismiss();
    this.events.publish('timerCount','');

  }


  prender(luc:Luces,i:number, desi:boolean){
    console.log("prender",luc);
    let luces= luc.idLuces[i];
    if(!luces.disp){
      if(!desi){
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
}
