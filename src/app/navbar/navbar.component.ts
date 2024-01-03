import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { DeliveryComponent } from '../delivery/delivery.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../login/login.component";
import { LogoutComponent } from '../logout/logout.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [MenuComponent, KitchenComponent, DeliveryComponent, DashboardComponent, CommonModule, LoginComponent, LogoutComponent]
})
export class NavbarComponent {
  
}
