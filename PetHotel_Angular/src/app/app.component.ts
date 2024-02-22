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
import {AddAnimalComponent} from "./userPanel/add-animal/add-animal.component";
import {AdminContainerComponent} from "./containers/admin-container/admin-container.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, RegisterComponent, LoginComponent, LoginContainerComponent, HomeComponent, RegisterContainerComponent,
    AdminComponent, UserComponent, FooterComponent, FormsModule, HomeComponent, PriceComponent,
    PriceContainerComponent, MiddleComponent, TreatmentsComponent, TreatmentsContainerComponent, UserContainerComponentComponent,
     AnimalListComponent, AddAnimalComponent, AdminContainerComponent],
  providers:[UserService, AnimalService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sprngSecurityAngular';
}
