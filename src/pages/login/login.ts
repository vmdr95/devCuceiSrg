import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
<<<<<<< HEAD
<<<<<<< HEAD
// import * as firebase from 'firebase/app';
import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import swal from 'sweetalert';
import firebase from 'firebase';
=======
import * as firebase from 'firebase/app';
import {AuthCredential} from '@firebase/auth-types';
=======
// import * as firebase from 'firebase/app';
>>>>>>> 89e2876cc6a77cb8c5944d3d8a960c8fe0531f76
import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import swal from 'sweetalert';
<<<<<<< HEAD
>>>>>>> 32d9b737191fb188f5b3fed079d019587fcaf633
=======
import firebase from 'firebase';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import {AuthCredential} from '@firebase/auth-types';
>>>>>>> 89e2876cc6a77cb8c5944d3d8a960c8fe0531f76

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

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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

=======
                );
                // let correo = user.email;
                // this.valida(correo);
                this.navCtrl.setRoot(HomePage);
>>>>>>> db0afaac361e147687410c01a9076f665db61e7f
        })
        .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
      }).catch(err => console.error("Error: " + JSON.stringify(err))) ;
>>>>>>> 32d9b737191fb188f5b3fed079d019587fcaf633
  }
  valida(email:string){
    //Si en el array email contiene el dominio
    //Dominio alumnos.udg.mx
<<<<<<< HEAD
=======



 valida(email:string){
    //Si en el array email contiene el dominio
    //Dominio alumnos.udg.mx

    if(email.indexOf('@alumnos.udg.mx')!=-1)

    // if(email.indexOf('@alumnos.udg.mx')!=-1)
    // {
    //    this.navCtrl.setRoot(HomePage);
    // }
    //
    if(email == 'miguel.quezada@alumnos.udg.mx')

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

    //     this.navCtrl.setRoot(HomePage);
    //   }

>>>>>>> 89e2876cc6a77cb8c5944d3d8a960c8fe0531f76
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
=======

<<<<<<< HEAD
 valida(email:string){
    //Si en el array email contiene el dominio
    //Dominio alumnos.udg.mx

    if(email.indexOf('@alumnos.udg.mx')!=-1)
=======
    // if(email.indexOf('@alumnos.udg.mx')!=-1)
    // {
    //    this.navCtrl.setRoot(HomePage);
    // }
    //
    if(email == 'miguel.quezada@alumnos.udg.mx')
>>>>>>> 32d9b737191fb188f5b3fed079d019587fcaf633
    {
       this.navCtrl.setRoot(HomePage);
    }
    //Dominio academicos.udg.mx
    // else if(email.indexOf('@academicos.udg.mx')!=-1)
    //   {
<<<<<<< HEAD
    //      this.navCtrl.setRoot(HomePage);
    //   }
    //   else if(email.indexOf('@cucei.udg.mx')!=-1)
    //     {
    //       this.navCtrl.setRoot(HomePage);
    //     }
=======
    //     this.navCtrl.setRoot(HomePage);
    //   }
>>>>>>> 32d9b737191fb188f5b3fed079d019587fcaf633
>>>>>>> db0afaac361e147687410c01a9076f665db61e7f
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
