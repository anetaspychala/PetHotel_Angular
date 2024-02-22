import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {AnimalListComponent} from "../../adminPanel/animal-list/animal-list.component";


@Component({
  selector: 'app-admin-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AnimalListComponent],
  template: '<router-outlet></router-outlet>',
  styleUrl: './admin-container.component.css'
})
export class AdminContainerComponent {

}
