import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddItemComponent } from './additem.component';
import { ItemDetailComponent } from './item-detail.component';
import { DashboardComponent } from './dashboard.component';
import { ItemsComponent} from './items.component'
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';

export const firebaseConfig = {
    apiKey: "AIzaSyDUQMwZVFJjwyToBgg-QnZkX1Gz9uwH0ww",
    authDomain: "myorderlist-47990.firebaseapp.com",
    databaseURL: "https://myorderlist-47990.firebaseio.com",
    storageBucket: "myorderlist-47990.appspot.com",
};

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    DashboardComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
