import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from './auth-service';
import { Item } from '../models/item';


@Injectable()
export class ItemService {
  visibleItems$: Observable<Item[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredItems$: FirebaseListObservable<Item[]>;
  private items$: FirebaseListObservable<Item[]>;


  constructor(af: AngularFire, auth: AuthService) {
    const path = `/items/${auth.id}`;
    // console.log("auth uuid ====== " + auth.id);
    this.items$ = af.database.list(path);

    this.filteredItems$ = af.database.list(path, {query: {
      orderByChild: 'createDate',
      equalTo: this.filter$
    }});
    

    this.visibleItems$ = this.filter$
      .switchMap(filter => filter === null ? this.items$ : this.filteredItems$);
    }


  filterTasks(filter: number): void {
    // switch (filter) {
    //   case 'false':
    //     this.filter$.next(false);
    //     break;

    //   case 'true':
    //     this.filter$.next(true);
    //     break;

    //   default:
    //     this.filter$.next(null);
    //     break;
    // }
    if(filter == 1){
        this.filter$.next(null);
    }else{
        this.filter$.next(filter);
    }
  }


  get items(): FirebaseListObservable<Item[]> {
      return this.items$;
  }
    
  get filterItems(): FirebaseListObservable<Item[]> {
      return this.filteredItems$;
  }

  createItem(item: Item): firebase.Promise<any> {
    return this.items$.push(item);
  }

  removeItem(item: Item): firebase.Promise<any> {
    return this.items$.remove(item.$key);
  }

  updateItem(item: Item, changes: any): firebase.Promise<any> {
    return this.items$.update(item.$key, changes);
  }
}
