import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-admin-container-component',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet],
  templateUrl: './admin-container-component.component.html',
  styleUrl: './admin-container-component.component.css'
})
export class AdminContainerComponentComponent {

}
