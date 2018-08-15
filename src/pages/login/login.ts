import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import swal from 'sweetalert';
import firebase from 'firebase';

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
              private platform: Platform) {
  }

  signInGoogle(){
    this.googlePlus.login({
      'webClientId': '56958534713-m0bpa8s00ricompodhlg8r420j022ecj.apps.googleusercontent.com',
      'offline': true
    }).then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then( success => {
                // this.usuarioProv.cargarUsuario(
                //   user.displayName,
                //   user.email,
                //   user.photoURL,
                //   user.uid,
                //   'google'
                // );
                console.log(success);
                //this.valida(user.email);
                //this.navCtrl.setRoot(HomePage);
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
    //Dominio academicos.udg.mx
    // else if(email.indexOf('@academicos.udg.mx')!=-1)
    //   {
    //      this.navCtrl.setRoot(HomePage);
    //   }
    //   else if(email.indexOf('@cucei.udg.mx')!=-1)
    //     {
    //       this.navCtrl.setRoot(HomePage);
    //     }
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
}
