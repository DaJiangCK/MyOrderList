import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../services/auth-service'

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  // items: FirebaseListObservable<any[]>;
  authorized: boolean;
  createDate: number;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    // this.items = this.af.database.list('/orders');
    this.authorized = this.auth.authenticated;
    console.log("signout====" + this.auth.authenticated);
  }

  signOut(): void {
    this.auth.signOut();
    // console.log("signout ====" + this.auth.authenticated);
    // console.log("user id ====" + this.auth.id);
    this.router.navigate(['/login']);
  }

  onDateChanged(event:any) {
  console.log('onDateChanged(): ', event.date, ' - jsdate: ', 
  new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', 
  event.formatted, ' - epoc timestamp: ', event.epoc);
  
  this.createDate = event.epoc;
}

  navigateItems() {
    this.router.navigate(['/items', this.createDate]);
  }

  getHistory(){
    this.router.navigate(['/items', 1]);
  }
}