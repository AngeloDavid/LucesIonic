import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LucesCtrlProvider} from '../../providers/luces-ctrl/luces-ctrl';
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
   luces: any[] =[];

  constructor(public navCtrl: NavController, public navParams: NavParams , private  lucespro : LucesCtrlProvider) {
    this.lucespro.getDatos().subscribe(
      resp=>{/*console.log(resp.Datos)*/ this.luces=resp.Datos});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OficinasPage');
  }

}
