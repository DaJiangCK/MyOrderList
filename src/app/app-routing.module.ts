import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ItemsComponent} from './items.component';
import { ItemDetailComponent} from './item-detail.component';
import { LoginComponent } from './login.component';
import { UnauthGuard } from '../guards/unauth-guard';
import { AuthGuard } from '../guards/auth-guard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'items/:date', component: ItemsComponent, canActivate: [AuthGuard] },
    { path: 'detail/:date', component: ItemDetailComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [UnauthGuard]}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}