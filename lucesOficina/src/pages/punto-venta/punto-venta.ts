import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PuntoVentaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-punto-venta',
  templateUrl: 'punto-venta.html',
})
export class PuntoVentaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.llenar_canvas();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuntoVentaPage');
  }



  llenar_canvas () {
  var canvas:any  =   document.getElementById('colorspace');
  var ctx = canvas.getContext('2d');
  function drawCanvas() {
    var colours = ctx.createLinearGradient(0, 0, window.innerWidth, 0);
    for(var i=0; i <= 360; i+=10) {
      colours.addColorStop(i/360, 'hsl(' + i + ', 100%, 50%)');
    }
    ctx.fillStyle = colours;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    var luminance = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    luminance.addColorStop(0, '#ffffff');
    luminance.addColorStop(0.05, '#ffffff');
    luminance.addColorStop(0.5, 'rgba(0,0,0,0)');
    luminance.addColorStop(0.95, '#000000');
    luminance.addColorStop(1, '#000000');
    ctx.fillStyle = luminance; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
  var eventLocked = false;
  function handleEvent(clientX, clientY) {
    if(eventLocked) {
      return;
    }
    function colourCorrect(v) {
      return Math.round(1023-(v*v)/64);
    }
    var data = ctx.getImageData(clientX, clientY, 1, 1).data;
    var params = [
      'r=' + colourCorrect(data[0]),
      'g=' + colourCorrect(data[1]),
      'b=' + colourCorrect(data[2]) ].join('&');
    var req = new XMLHttpRequest();
    req.open('POST', 'http:///?' + params, true);
    req.send();
    eventLocked = true;
    req.onreadystatechange = function() {
      if(req.readyState == 4)
      { eventLocked = false; }
    }
  }



  canvas.addEventListener('touchmove', function(event){
    handleEvent(event.touches[0].clientX, event.touches[0].clientY);}, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight; drawCanvas();
  }
  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
  drawCanvas();
  document.ontouchmove = function(e) {e.preventDefault()};
}






}
