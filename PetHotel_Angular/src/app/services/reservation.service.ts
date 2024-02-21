import {Injectable, } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Animal} from "../animals";
import {Reservation} from "../reservations";

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  private baseURL = "http://localhost:8080/adminpanel/reservations"
  private postURL = "http://localhost:8080/userpanel/addReservation"
  private deleteURL = 'http://localhost:8080/adminpanel/deleteReservation/{id}';
  private editURL = 'http://localhost:8080/adminpanel/editReservation/{id}';
  constructor(private httpClient: HttpClient) { }

  getReservationsList(): Observable<Reservation[]>{
    console.log('Calling getReservationsList');
    return this.httpClient.get<Reservation[]>(this.baseURL)
  }
  postReservation(reservation: Reservation): Observable<Reservation[]> {
    console.log('Calling postReservation');
    return this.httpClient.post<Reservation[]>(this.postURL, reservation);
  }
  deleteReservation(id: number) {
    console.log('Delete Reservation');
    return this.httpClient.delete(`${this.deleteURL.replace('{id}', id.toString())}`, { responseType: 'text' });
  }
  editReservation(id: number, updatedReservation: Reservation): Observable<Reservation> {
    console.log('Edit Reservation');
    return this.httpClient.put<Reservation>(`${this.editURL.replace('{id}', id.toString())}`, updatedReservation);
  }
}
