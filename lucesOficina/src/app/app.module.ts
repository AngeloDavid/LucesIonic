import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PuntoVentaPage,OficinasPage,ModalCronometroPage} from '../pages/index.pages';
import { BackgroundMode } from '@ionic-native/background-mode';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LucesCtrlProvider } from '../providers/luces-ctrl/luces-ctrl';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PuntoVentaPage,
    OficinasPage ,
    ModalCronometroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PuntoVentaPage,
    OficinasPage,
    ModalCronometroPage
  ],
  providers: [
    BackgroundMode,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LucesCtrlProvider
  ]
})
export class AppModule {}
