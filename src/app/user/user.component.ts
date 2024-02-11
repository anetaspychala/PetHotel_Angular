import { Component } from '@angular/core';
import {Login} from "../login";
import {Role} from "../Role";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
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
