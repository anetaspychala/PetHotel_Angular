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
  private getURL = "http://localhost:8080/api/v1/auth/admin/allUsers"
  private deleteURL = 'http://localhost:8080/api/v1/auth/admin/deleteUser/{id}';
  private editURL = 'http://localhost:8080/api/v1/auth/admin/editUser/{id}';
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
  getUsersList(): Observable<User[]>{
    console.log('Calling getUsersList');
    return this.httpClient.get<User[]>(this.getURL)
  }
  deleteUser(id: number) {
    console.log('Delete User');
    return this.httpClient.delete(`${this.deleteURL.replace('{id}', id.toString())}`, { responseType: 'text' });
  }
  editUser(id: number, updatedUser: User): Observable<User> {
    console.log('Edit User');
    return this.httpClient.put<User>(`${this.editURL.replace('{id}', id.toString())}`, updatedUser);
  }
}
