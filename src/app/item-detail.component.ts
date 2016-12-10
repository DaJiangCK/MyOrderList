import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
//   item: FirebaseObjectObservable<any>;
  items: FirebaseListObservable<any>;
  @Input() item: any;
  date: number;
  constructor(private af: AngularFire, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.date = +this.route.snapshot.params['date'];
    // this.key = this.route.snapshot.data['key'];
    // console.log(this.date, this.key);
    this.items = this.af.database.list('/orders' + '/' + this.date);
    // this.item = this.af.database.object('/orders/20161209/-KYaJJQwrhfp5AKRkJoq');
    
  }

  updateItem(itemName: string, itemNumber: string, itemSize: string, itemColor: string) {
    this.items.update(this.item.$key, { itemName: itemName, itemNumber: itemNumber, itemSize: itemSize, itemColor: itemColor});
  }

  deleteItem() {    
    this.items.remove(this.item); 
    this.item = null;
  }

  deleteEverything() {
    this.items.remove();
  }

  goBack(): void {
      this.location.back();
  }
}