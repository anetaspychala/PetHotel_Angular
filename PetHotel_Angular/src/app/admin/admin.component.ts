import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AnimalListComponent} from "../adminPanel/animal-list/animal-list.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterLink, CommonModule,AnimalListComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
