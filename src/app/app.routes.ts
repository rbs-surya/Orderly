import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    // {path: '', component: DashboardComponent},
    {path: '', redirectTo: 'dashboard', pathMatch:'full'},
    {path: 'logout', component: LogoutComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path:'menu', component: MenuComponent},
    {path:'kitchen', component: KitchenComponent},
    {path:'delivery', component: DeliveryComponent}
];
