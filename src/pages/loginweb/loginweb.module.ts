import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginwebPage } from './loginweb';

@NgModule({
  declarations: [
    LoginwebPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginwebPage),
  ],
})
export class LoginwebPageModule {}
