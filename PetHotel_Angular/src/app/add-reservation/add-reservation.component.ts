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
    reservationStatus: 'Niepotwierdzony',
    roomStandard:'',
    animalSize: 0,
    additionalTreatment: ''
  };
  constructor(private reservationService: ReservationService) {
  }
  calculatePrice() {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const startDate = new Date(this.reservation.startDate);
    const endDate = new Date(this.reservation.endDate);
    const numberOfDays = Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / millisecondsPerDay));

    let roomStandardPrice = 0;
    let additionalPrice = 0;
    let animalSizePrice = 0;
    switch (this.reservation.additionalTreatment) {
      case 'WETERYNARZ':
        additionalPrice = 200;
        break;
      case 'FRYZJER':
        additionalPrice = 230;
        break;
      case 'BEHAWIORYSTA':
        additionalPrice = 100;
        break;
    }

    switch (this.reservation.roomStandard) {
      case 'BASIC':
        roomStandardPrice = 80;
        break;
      case 'STANDARD':
        roomStandardPrice = 130;
        break;
      case 'PREMIUM':
        roomStandardPrice = 160;
        break;
      default:
        roomStandardPrice = 80;
    }


    if(this.reservation.animalSize.valueOf()==30){
      animalSizePrice = 40;
    }
    else if (this.reservation.animalSize.valueOf()==20){
      animalSizePrice = 20;
    }else{
      animalSizePrice=0;
    }
    this.reservation.price = (numberOfDays * animalSizePrice) + (numberOfDays * roomStandardPrice) + (this.reservation.additionalTreatment ? additionalPrice : 0);
  }
  addReservation() {
    this.calculatePrice();
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
