import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2';
import { Item } from '../models/item';
import { ItemService } from '../services/item-service';

@Component({
  selector: 'add-item',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AddItemComponent implements OnInit {
//   item: FirebaseObjectObservable<any>;
  items$: FirebaseListObservable<Item[]>;
  item : Item;
  createDate: number;
  constructor(private itemService: ItemService, private route: ActivatedRoute, private location: Location) {  }

  ngOnInit(): void {
    this.createDate = +this.route.snapshot.params['date'];
    // this.key = this.route.snapshot.data['key'];
    // console.log(this.date, this.key);
    // this.items = this.af.database.list('/orders' + '/' + this.date);
    // this.item = this.af.database.object('/orders/20161209/-KYaJJQwrhfp5AKRkJoq');
    this.items$ = this.itemService.items;
  }

  createItem(name: string, number: string, color: string, size: string, tbId: string) {
    this.item = new Item(name, number, color, size, tbId, this.createDate);
    this.items$.push(this.item);
  }

  goBack(): void {
      this.location.back();
  }
}