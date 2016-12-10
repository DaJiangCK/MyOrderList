import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire, private router: Router) {
  }

  ngOnInit(): void {
    // this.items = this.af.database.list('/orders');
  }

  createItem(date: number) {
    this.router.navigate(['/items', date]);
  }

  signOut(): void {
    this.af.auth.logout();
    this.router.navigate(['/login']);
  }
}