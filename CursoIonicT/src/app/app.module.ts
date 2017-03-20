import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { RegistroPage } from '../pages/registro/registro';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage
  ],
  providers: [AuthService]
})
export class AppModule {}
