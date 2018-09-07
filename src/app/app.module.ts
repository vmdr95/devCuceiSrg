import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';
import { Toast } from '@ionic-native/toast';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { LoginwebPage } from "../pages/loginweb/loginweb";
import { MenuprincipalPage } from "../pages/menuprincipal/menuprincipal";
import { FormreportemovilPage } from "../pages/formreportemovil/formreportemovil";
import { UsuarioProvider } from '../providers/usuario/usuario';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Plugins
import { GooglePlus } from '@ionic-native/google-plus';

export const firebaseConfig = {
  apiKey: "AIzaSyA0DEHXIXxm83tCuyo1ywqWYQxDHC-GAzI",
  authDomain: "cucei-srg.firebaseapp.com",
  databaseURL: "https://cucei-srg.firebaseio.com",
  projectId: "cucei-srg",
  storageBucket: "cucei-srg.appspot.com",
  messagingSenderId: "56958534713"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LoginwebPage,
    MenuprincipalPage,
    FormreportemovilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoginwebPage,
    MenuprincipalPage,
    FormreportemovilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    UsuarioProvider,
    CallNumber,
    StatusBar,
    Toast
  ]
})
export class AppModule {}
