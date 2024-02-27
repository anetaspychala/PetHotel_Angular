import {ChangeDetectorRef, Component, ElementRef, inject, Input, ViewChild} from '@angular/core';

import {CommonModule} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../User";
import {Role} from "../../Role";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() dialogTitle!: string;
  @ViewChild('appDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

  user: User ={
    id: 0,
    login: '',
    email: '',
    password: '',
    role: Role.USER,
  }
  constructor(private userService: UserService) {
  }

  formSubmitted = false;
  addUser() {
    this.formSubmitted = true;
    this.userService.postUser(this.user).subscribe(
      response => {
        console.log('User added successfully', response);
        this.dialog.nativeElement.showModal();
      },
      error => {
        console.error('Error adding user', error);
      }
    );
  }
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
