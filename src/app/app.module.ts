import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail.component';
import { DashboardComponent } from './dashboard.component';
import { ItemsComponent } from './items.component';
import { LoginComponent } from './login.component';
import { AngularFireModule, AuthMethods } from 'angularfire2';
// import { FirebaseModule } from '../firebase/firebase.config';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from '../services/auth-service';
import { ItemService } from '../services/item-service';
import { UnauthGuard } from '../guards/unauth-guard';
import { AuthGuard } from '../guards/auth-guard';

import { MyDatePickerModule } from 'mydatepicker';

import { MaterialModule } from '@angular/material';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

export const firebaseConfig = {
    apiKey: "AIzaSyDUQMwZVFJjwyToBgg-QnZkX1Gz9uwH0ww",
    authDomain: "myorderlist-47990.firebaseapp.com",
    databaseURL: "https://myorderlist-47990.firebaseio.com",
    storageBucket: "myorderlist-47990.appspot.com",
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemsComponent,
    ItemDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    // FirebaseModule,
    AppRoutingModule,
    MyDatePickerModule,
    MaterialModule.forRoot(),
    AlertModule
  ],
  providers: [
    AuthService,
    ItemService,
    UnauthGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
