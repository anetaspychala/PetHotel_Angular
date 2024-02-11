import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../User";
import {Observable} from "rxjs";
import {Login} from "../login";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/api/v1/auth/register"
  private loginURL = "http://localhost:8080/api/v1/auth/login"
  constructor(private httpClient: HttpClient) { }
requestHeader = new HttpHeaders(
  {"No-Auth": "True"}
);
  postUser(user: User): Observable<User[]> {
    console.log('Calling postUser');
    return this.httpClient.post<User[]>(this.baseURL, user);
  }
  postLoginUser(login: Login): Observable<Login[]> {
    console.log('Calling login User');
    return this.httpClient.post<Login[]>(this.loginURL, login);
  }

}
