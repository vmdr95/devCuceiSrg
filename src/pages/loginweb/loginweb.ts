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

validation(){
  swal({
    title:"Escribe la contraseña de Acceso",  
    content: {
               element: "input",
               attributes: {
                   placeholder: "Type Password Access",
                   type: "password"
                    },
            },
   className: "pasSwal"
 }).then((password)=>{
     let key = "Q3VjZWlTUkcxRGF0YWJhc2VBZG1pbjEwNTg=";
           //get the password and encode in base64
           if(btoa(password)==key){
                swal("¡Acceso Correcto!, Redirigiendo al Administrador...");
                location.href = 'http://127.0.0.1:8000/admin';
           }else if(password=="")
           {
             swal("No se ingreso ningun dato.");
           }
           else{
             swal("contraseña Incorrecta");
           }

});
}


  AdPrivacy(){
    swal({
    title: "Aviso de Privacidad",
    text: "En Construcción",
    icon: "info",
  });
  }

}
