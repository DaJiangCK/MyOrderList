import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ItemService } from '../services/item-service';
import { Item } from '../models/item';
import { ItemsComponent } from './items.component';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
//   item: FirebaseObjectObservable<any>;
  // items: FirebaseListObservable<any>;
  // items$: FirebaseListObservable<Item[]>;
  @Input() item: Item;
  @Output() cancelSelected = new EventEmitter();
  newItem: Item;
  // items$: FirebaseListObservable<Item[]>;
  createDate: number;
  constructor(private itemService: ItemService, 
  private route: ActivatedRoute, 
  private location: Location) {
  }

  ngOnInit(): void {
    this.createDate = +this.route.snapshot.params['date'];
    console.log("this.createDate =========" + this.createDate);
    // if(this.item){
    //   this.items$ = this.itemService.items;
    // }
  }

  createItem(name: string, number: string, size: string, color: string, tbId: string) {
      this.newItem = new Item(name, number, size, color, tbId, this.createDate);
      console.log(this.newItem);
      this.itemService.createItem(this.newItem);
  }

  updateItem(name: string, number: string, size: string, color: string, tbId: string) {
      this.itemService.updateItem(this.item, {name,number,size,color,tbId});
  }

  removeItem() {    
    this.itemService.removeItem(this.item);
    this.cancelSelected.emit();
  }

  // deleteEverything() {
  //   this.items.remove();
  // }

  goBack(): void {
      this.location.back();
  }
}