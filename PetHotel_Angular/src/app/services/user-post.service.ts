import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../User";


@Injectable({
  providedIn: 'root'
})

export class UserPostService {
  private baseURL = "http://localhost:8080/userpanel/addUser"

  constructor(private httpClient: HttpClient) { }

  postUser(user: User): Observable<User[]> {
    console.log('Calling postUser');
    return this.httpClient.post<User[]>(this.baseURL, user);
  }
}
