import {Injectable, } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Animal} from "../animals";
import {User} from "../users";

@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  private baseURL = "http://localhost:8080/adminpanel/animals"
  private postURL = "http://localhost:8080/userpanel/addAnimal"
  private deleteURL = 'http://localhost:8080/adminpanel/deleteAnimal/{id}';
  private editURL = 'http://localhost:8080/adminpanel/editAnimal/{id}';
  constructor(private httpClient: HttpClient) { }

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
