import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, NgForm} from "@angular/forms";
import {User} from "../User";
import {UserService} from "../services/user.service";
import {Role} from "../Role";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, AfterViewInit {
  @Input() dialogTitle!: string;
  @ViewChild('appDialog', {static: true}) dialog!: ElementRef<HTMLDialogElement>;
  userList: User[] = [];
  @ViewChild('userForm', {static: true}) form: NgForm | undefined;
  currentUser: User | undefined;
  currentUserId: number = 0;
  editedLogin: string = '';
  editedPassword: string = '';
  editedEmail: string = '';
  editedRole: Role | undefined;
  isEditMode = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  ngAfterViewInit() {
    this.getUsers()
  }

  private getUsers() {
    this.userService.getUsersList().subscribe(
      data => {
        this.userList = data;
        console.log(data);
      },
      error => {
        console.error('Bład pobierania użytkowników')
      });
  }

  deleteUser(id: number) {
    console.log(id);
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log('User deleted successfully');
        this.dialog.nativeElement.showModal();
      },
      error => {
        console.error('Błąd usuwania użytkownika', error);
      }
    );
  }

  editUser(id: number) {
    this.currentUserId = id;
    this.isEditMode = true;
    if (this.currentUserId) {
      this.currentUser = this.userList.find((p) => p.id === id);
      console.log(this.form);
      if (this.currentUser) {
        this.editedLogin = this.currentUser.login;
        this.editedPassword = this.currentUser.password;
        this.editedEmail = this.currentUser.email;
        this.editedRole = this.currentUser.role
      }
      console.log('Edycja przebiegla pomyslnie')
    } else {
      console.log('Blad edycji')
    }
  }

  putUser() {
    if (this.currentUserId) {
      let updatedUser: User;

      if (this.editedRole !== undefined) {
        updatedUser = {
          id: this.currentUserId,
          email: this.editedEmail,
          login: this.editedLogin,
          password: this.editedPassword,
          role: this.editedRole,
        };
      } else {
        updatedUser = {
          id: this.currentUserId,
          email: this.editedEmail,
          login: this.editedLogin,
          password: this.editedPassword,
          role: Role.USER,
        };
      }

      this.userService.editUser(this.currentUserId, updatedUser).subscribe(
        () => {
          console.log('User edited successfully');
          this.isEditMode = false;
          this.getUsers();
        },
        (error) => {
          console.error('Błąd edycji użytkownika', error);
        }
      );
    }
  }
}
