import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddItemComponent } from './additem.component';
import { DashboardComponent } from './dashboard.component';
import { ItemsComponent} from './items.component';
import { ItemDetailComponent} from './item-detail.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'items/:date', component: ItemsComponent},
    // { path: 'detail/:date/:key', component: AddItemComponent}
    { path: 'additem/:date', component: AddItemComponent},
    { path: 'detail/:date', component: ItemDetailComponent},
    { path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}