import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AuthCredential} from '@firebase/auth-types';
import { Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import swal from 'sweetalert';

@IonicPage()
@Component({
  selector: 'page-loginweb',
  templateUrl: 'loginweb.html',
})
export class LoginwebPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private googlePlus: GooglePlus,
              private platform: Platform,
              private alertCtrl: AlertController,
              private afAuth: AngularFireAuth,) {
  }

  // signInGoogleWeb()
  // {
  //  var provider = new firebase.auth.GoogleAuthProvider();
  //  firebase.auth().signInWithPopup(provider).then(function(result) {
  //  // This gives you a Google Access Token. You can use it to access the Google API.
  //  var token = result.credential.accessToken;
  //  // The signed-in user info.
  //  var user = result.user;
  //
  //        let email = user.email;
  //        console.log(email);
  //        if(email.indexOf('@alumnos.udg.mx')!=-1)
  //        {
  //          this.navCtrl.push(HomePage);
  //          // location.href = 'http://127.0.0.1:8000/admin';
  //        }
  //          else if(email.indexOf('@academicos.udg.mx')!=-1)
  //            {
  //              this.navCtrl.push(HomePage);
  //            }
  //              else if(email.indexOf('@cucei.udg.mx')!=-1)
  //                {
  //                  this.navCtrl.push(HomePage);
  //                }
  //       else
  //        {
  //          let email = user.email;
  //            swal({
  //                title: "Oops!... Ha Ocurrido un Error.",
  //                text: "Has introducido un email inválido: "+ email+", el cual no pertenece a un correo Institucional UDG.",
  //                icon: "error",
  //            });
  //       }
  // }).catch(function(error) {
  //  // Handle Errors here.
  //  var errorCode = error.code;
  //  var errorMessage = error.message;
  //  // The email of the user's account used.
  //  var email = error.email;
  //  // The firebase.auth.AuthCredential type that was used.
  //  var credential = error.credential;
  //  // ...
  // });
  //
  // }

}
