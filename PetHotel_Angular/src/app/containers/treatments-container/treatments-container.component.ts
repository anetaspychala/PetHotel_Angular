import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-treatments-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './treatments-container.component.html',
  styleUrl: './treatments-container.component.css'
})
export class TreatmentsContainerComponent {

}
