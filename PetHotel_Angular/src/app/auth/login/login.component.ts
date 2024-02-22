import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {UserService} from "../../services/user.service";
import {Login} from "../../login";
import {Role} from "../../Role";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: Login ={
    login: '',
    password: '',
    role: Role.ADMIN,

  };
  constructor(private userService: UserService, private router: Router) {

  }

  formSubmitted = false;
  loginUser() {
    this.formSubmitted = true;
    this.userService.postLoginUser(this.login).subscribe(
      (response: Login | Login[]) => {
        if (Array.isArray(response)) {
          console.error('Unexpected array response:', response);
        } else {
          console.log('Server Response:', response);
          if (this.login) {
            localStorage.setItem('currentUser', JSON.stringify(this.login));
          }
          if (response && response.role) {
            if (response.role === Role.USER) {
              this.router.navigate(['/user']);
            } else if (response.role === Role.ADMIN) {
              this.router.navigate(['/admin']);
            } else {
              console.error('Unknown role:', response.role);
            }
          } else {
            console.error('Role property not found in the response or is undefined.');
          }
        }
      },
      error => {
        console.error('Error login user', error);
      }
    );
  }

}
