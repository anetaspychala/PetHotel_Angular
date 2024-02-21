import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../rooms";
import {User} from "../users";

@Injectable({
  providedIn: 'root'
})

export class RoomService {
  private baseURL = "http://localhost:8080/adminpanel/rooms"
  private postURL = "http://localhost:8080/userpanel/addRoom"
  private deleteURL = 'http://localhost:8080/adminpanel/deleteRoom/{id}';
  private editURL = 'http://localhost:8080/adminpanel/editRoom/{id}';
  constructor(private httpClient: HttpClient) { }

  getRoomsList(): Observable<Room[]>{
    console.log('Calling getRoomsList');
    return this.httpClient.get<Room[]>(this.baseURL)
  }

  postRoom(room: Room): Observable<Room[]> {
    console.log('Calling postRoom');
    return this.httpClient.post<Room[]>(this.postURL, room);
  }
  deleteRoom(id: number) {
    console.log('Delete Room');
    return this.httpClient.delete(`${this.deleteURL.replace('{id}', id.toString())}`, { responseType: 'text' });
  }
  editRoom(id: number, updatedRoom:Room): Observable<Room> {
    console.log('Edit Room');
    return this.httpClient.put<Room>(`${this.editURL.replace('{id}', id.toString())}`, updatedRoom);
  }
}
