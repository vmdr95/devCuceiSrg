import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Platform } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';
import swal from 'sweetalert';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import {AuthCredential} from '@firebase/auth-types';
import { AngularFireAuth } from 'angularfire2/auth';
import { CallNumber } from '@ionic-native/call-number';
import { StatusBar } from '@ionic-native/status-bar';
import { Toast } from '@ionic-native/toast';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              public usuarioProv: UsuarioProvider,
              public navParams: NavParams,
              private googlePlus: GooglePlus,
              private platform: Platform,
              private alertCtrl: AlertController,
              private callNumber: CallNumber,
              private statusBar: StatusBar,
              private toast: Toast,
              private toastCtrl: ToastController) {

                // let status bar overlay webview
                this.statusBar.overlaysWebView(true);

                // set status bar to white
                this.statusBar.backgroundColorByHexString('#0E8BF8');
  }


  signInGoogleMobile(){
    // this.googlePlus.login({
    //   'webClientId': '56958534713-m0bpa8s00ricompodhlg8r420j022ecj.apps.googleusercontent.com',
    //   'offline': true
    // }).then(res => {
    //   firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
    //     .then( user => {
    //       console.log(JSON.stringify(user));
    //             this.usuarioProv.cargarUsuario(
    //               user.displayName,
    //               user.email,
    //               user.photoURL,
    //               user.uid,
    //               'google'

    //             );
    //             // let correo = user.email;
    //             // this.valida(correo);
    //             this.navCtrl.setRoot(HomePage);
    //     })
    //     .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
    //   }).catch(err => console.error("Error: " + JSON.stringify(err)));
    this.navCtrl.push(HomePage);
}

 valida(email:string){
    //Si en el array email contiene el dominio
    //Dominio alumnos.udg.mx

    if(email.indexOf('@alumnos.udg.mx')!=-1)
    {
       this.navCtrl.setRoot(HomePage);
    }

    //Dominio academicos.udg.mx
    else if(email.indexOf('@academicos.udg.mx')!=-1)
      {
         this.navCtrl.setRoot(HomePage);
      }
      else if(email.indexOf('@cucei.udg.mx')!=-1)
        {
          this.navCtrl.setRoot(HomePage);
        }

      //si no es ninguno
      else
      {
          swal({
          title: "Oops!... Ha Ocurrido un Error.",
          text: "Has intentado ingresar con el correo: "+ email+", el cual no pertenece a un correo Institucional UDG.",
          icon: "error",
        });
      }
  }
  authSys(){
    let toast = this.toastCtrl.create({
      message: '¡Opción Disponible Próximamente!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  HelpEmail(){
    let toast = this.toastCtrl.create({
      message: '¡Opción Disponible Próximamente!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  emergency(){
    this.callNumber.callNumber("3313668535", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
  AdPrivacy(){
    swal({
    title: "Aviso de Privacidad",
    text: "En Construcción",
    icon: "info",
  });
  }
}
