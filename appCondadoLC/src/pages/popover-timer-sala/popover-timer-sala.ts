import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the PopoverTimerSalaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-timer-sala',
  templateUrl: 'popover-timer-sala.html',
})
export class PopoverTimerSalaPage {

  event={
    id:0,
    timestart:'00:00:15',
    des:false,
    startTimer:true
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
        public events:Events,public storage: Storage) {
    this.event.id=this.navParams.get('idPage');
    console.log(this.event.id);

    this.events.subscribe('timerCount'+this.event.id,(tc)=>{
      console.log(tc);
      this.event.timestart=tc;
    });
    this.events.subscribe('startBool'+this.event.id,(sb)=>{
      console.log(sb);
      this.event.startTimer=sb;
    });
    storage.get('startBool'+this.event.id).then(resp=>{
      console.log('respStrp',resp);
      this.event.startTimer=resp;
    });

  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad PopoverTimerSalaPage');
  }

}
