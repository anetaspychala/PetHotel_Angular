import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-user-container-component',
  standalone: true,
    imports: [
      CommonModule, RouterLink, RouterOutlet
    ],
  templateUrl: './user-container-component.component.html',
  styleUrl: './user-container-component.component.css'
})
export class UserContainerComponentComponent {

}
