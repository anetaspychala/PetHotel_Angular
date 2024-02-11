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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, RegisterComponent, LoginComponent, LoginContainerComponent, HomeComponent, RegisterContainerComponent,AdminComponent, UserComponent, FooterComponent, FormsModule, HomeComponent],
  providers:[UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sprngSecurityAngular';
}
