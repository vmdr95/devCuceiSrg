import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AuthCredential} from '@firebase/auth-types';
import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import swal from 'sweetalert';

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
              private alertCtrl: AlertController) {
  }


  signInGoogleMobile(){
    this.googlePlus.login({
      'webClientId': '56958534713-m173jrtbfjsda0ob8pp0tgpbur81codd.apps.googleusercontent.com',
      'offline': true
    }).then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then( user => {
          // console.log(JSON.stringify(user));
          //       this.usuarioProv.cargarUsuario(
          //         user.displayName,
          //         user.email,
          //         user.photoURL,
          //         user.uid,
          //         'google'
          //
          //       );
                let correo = user.email;
                this.valida(correo);

        })
        .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
      }).catch(err => console.error("Error: " + JSON.stringify(err))) ;
  }
  valida(email:string){
    //Si en el array email contiene el dominio
    //Dominio alumnos.udg.mx
    if(email.indexOf('@alumnos.udg.mx')!=-1)
    {
       this.navCtrl.setRoot(HomePage);
    }
      // Dominio academicos.udg.mx
      else if(email.indexOf('@academicos.udg.mx')!=-1)
        {
          this.navCtrl.setRoot(HomePage);
        }
            // Dominio cucei.udg.mx
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
  AdPrivacy(){
    swal({
    title: "Aviso de Privacidad",
    text: "En Construcción",
    icon: "info",
  });
  }
}
