import {Injectable, } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Animal} from "../animals";


@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  private baseURL = "localhost:8080/api/v1/auth/admin/animals"
  private postURL = "localhost:8080/api/v1/auth/user/addAnimal"
  private deleteURL = 'localhost:8080/api/v1/auth/admin/deleteAnimal/{id}';
  private editURL = 'localhost:8080/api/v1/auth/admin/editAnimal/{id}';
  constructor(private httpClient: HttpClient) { }

  requestHeader = new HttpHeaders(
    {"No-Auth": "True"}
  );
  getAnimalsList(): Observable<Animal[]>{
    console.log('Calling getAnimalsList');
    return this.httpClient.get<Animal[]>(this.baseURL)
  }
  postAnimal(animal: Animal): Observable<Animal[]> {
    console.log('Calling postAnimal');
    return this.httpClient.post<Animal[]>(this.postURL, animal);
  }

  deleteAnimal(id: number) {
    console.log('Delete Animal');
    return this.httpClient.delete(`${this.deleteURL.replace('{id}', id.toString())}`, { responseType: 'text' });
  }
  editAnimal(id: number, updatedAnimal: Animal): Observable<Animal> {
    console.log('Edit Animal');
    return this.httpClient.put<Animal>(`${this.editURL.replace('{id}', id.toString())}`, updatedAnimal);
  }
}
