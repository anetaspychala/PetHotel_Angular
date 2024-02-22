import {ChangeDetectorRef, Component, ElementRef, inject, Input, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {Reservation} from "../reservations";
import {ReservationService} from "../services/reservation.service";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-add-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatDatepickerModule, RouterOutlet, RouterLink,],
  templateUrl: './add-reservation.component.html',
  styleUrl: './add-reservation.component.css'
})
export class AddReservationComponent {
  @Input() dialogTitle!: string;
  @ViewChild('appDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

  reservation: Reservation = {
    id: 0,
    startDate: new Date(),
    endDate: new Date(),
    price: 0,
    reservationStatus: '',
    roomStandard:'',
    animalSize: 0,
    additionalTreatment: ''
  };
  constructor(private reservationService: ReservationService) {
  }
  addReservation() {
    this.reservationService.postReservation(this.reservation).subscribe(
      response => {
        console.log('Reservation added successfully', response);
        this.dialog.nativeElement.showModal();
      },
      error => {
        console.error('Error adding reservation', error);
      }
    );
  }
}
