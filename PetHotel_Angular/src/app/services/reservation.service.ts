import {Injectable, } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../reservations";

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  private baseURL = "http://localhost:8080/api/v1/auth/admin/reservations"
  private postURL = "http://localhost:8080/api/v1/auth/user/addReservation"
  private deleteURL = 'http://localhost:8080/api/v1/auth/admin/deleteReservation/{id}';
  private editURL = 'http://localhost:8080/api/v1/auth/admin//editReservation/{id}';
  constructor(private httpClient: HttpClient) { }
  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  );
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
