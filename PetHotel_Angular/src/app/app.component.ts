import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegisterComponent} from "./auth/register/register.component";

import {UserService} from "./services/user.service";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./auth/login/login.component";
import {LoginContainerComponent} from "./containers/login-container/login-container.component";
import {HomeComponent} from "./home/home.component";
import {RegisterContainerComponent} from "./containers/register-container/register-container.component";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {PriceComponent} from "./price/price.component";
import {PriceContainerComponent} from "./containers/price-container/price-container.component";
import {MiddleComponent} from "./middle/middle.component";
import {TreatmentsComponent} from "./treatments/treatments.component";
import {TreatmentsContainerComponent} from "./containers/treatments-container/treatments-container.component";
import {
  UserContainerComponentComponent
} from "./containers/user-container-component/user-container-component.component";
import {AnimalService} from "./services/animal.service";
import {AnimalListComponent} from "./adminPanel/animal-list/animal-list.component";
import {AddAnimalComponent} from "./add-animal/add-animal.component";
import {AdminContainerComponent} from "./containers/admin-container/admin-container.component";
import {AddReservationComponent} from "./add-reservation/add-reservation.component";
import {ReservationService} from "./services/reservation.service";
import {MatNativeDateModule} from "@angular/material/core";
import {UserListComponent} from "./user-list/user-list.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, RegisterComponent, LoginComponent, LoginContainerComponent, RegisterContainerComponent,
    AdminComponent, UserComponent, FooterComponent, FormsModule, HomeComponent, PriceComponent,MatNativeDateModule,
    PriceContainerComponent, MiddleComponent, TreatmentsComponent, TreatmentsContainerComponent, UserContainerComponentComponent,
     AnimalListComponent, AdminContainerComponent, AddReservationComponent, AddAnimalComponent, UserListComponent],
  providers:[UserService, AnimalService, ReservationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sprngSecurityAngular';
}
