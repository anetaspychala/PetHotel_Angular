import { Component } from '@angular/core';
import {Login} from "../login";
import {Role} from "../Role";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, CommonModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  login: Login ={
    login: '',
    password: '',
    role: Role.ADMIN,

  };

}