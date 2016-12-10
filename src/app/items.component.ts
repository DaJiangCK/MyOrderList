import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';



@Component({
  selector: 'my-items',
  templateUrl: './items.component.html',
  styleUrls: [ './items.component.css'],
})
export class ItemsComponent implements OnInit {

  items: FirebaseListObservable<any>;
  selectedItem: any;
  date: number;

  constructor(
      private af: AngularFire, 
      private route: ActivatedRoute, 
      private location: Location,
      private router: Router) { }

  ngOnInit(): void {
    this.date = +this.route.snapshot.params['date'];
    this.items = this.af.database.list('/orders' + '/' + this.date);
}

  onSelect(item: any): void {
    this.selectedItem = item;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.date]);
  }

  goBack(): void {
    this.location.back();
  }

  addItem(): void{
    this.router.navigate(['/additem', this.date]);
  }
}
