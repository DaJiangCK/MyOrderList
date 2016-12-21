import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Item } from '../models/item';
import { ItemService } from '../services/item-service';



@Component({
  selector: 'my-items',
  templateUrl: './items.component.html',
  styleUrls: [ './items.component.css'],
})
export class ItemsComponent implements OnInit {

  items$: FirebaseListObservable<Item[]>;
  // item: Item;
  selectedItem: Item;
  createDate: number;
  isHistory: boolean;

  constructor(
      private itemService: ItemService, 
      private route: ActivatedRoute, 
      private location: Location,
      private router: Router) { }

  ngOnInit(): void {
    this.createDate = +this.route.snapshot.params['date'];

    // this.items = this.af.database.list('/orders' + '/' + this.date);
    if(this.createDate == 1){
       //search for all items
      this.itemService.filterTasks(1);
      this.isHistory = true;
    }else {
      this.itemService.filterTasks(this.createDate);
      this.isHistory = false;
      // this.items$ = this.itemService.items;
    }

    this.items$ = this.itemService.filterItems;
    this.items$.subscribe(queriedItems => {
        console.log(queriedItems);  
    });

  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    // this.gotoDetail();
  }

  cancelSelected(): void {
    this.selectedItem = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.createDate]);
  }

  goBack(): void {
    this.location.back();
  }

  addItem(): void{
    this.router.navigate(['/detail', this.createDate]);
  }

}
