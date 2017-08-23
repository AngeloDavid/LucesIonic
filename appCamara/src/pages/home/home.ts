import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NFC, Ndef } from '@ionic-native/nfc';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private iab: InAppBrowser,private nfc: NFC, private ndef: Ndef,public toastCtrl: ToastController) {
    let message = this.ndef.textRecord('Hello world');
    this.mostrarMsg("Hola" + message);
    this.nfc.share([message]).then().catch();
  }

  mostrarBorser(){
    const browser = this.iab.create('http://200.124.227.251/');
    browser.show();
    //browser.close();

  }

  mostrar_tags(){


  }

  mostrarMsg(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }


}
