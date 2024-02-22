import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";


import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {Animal} from "../../animals";
import {AnimalService} from "../../services/animal.service";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, MatIcon],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent implements OnInit{
  @Input() dialogTitle!: string;
  @ViewChild('appDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('userForm', {static: true}) form: NgForm | undefined;
  animalList: Animal[] =[];
  currentAnimalId: number = 0;
  currentAnimal: Animal | undefined;
  editedName: string = '';
  editedWeight: number =0;
  editedType: string = '';
  editedSex: string = '';
  isEditMode = false;
 // editedOwner: number =0;
  constructor(private animalService: AnimalService) {}
  ngOnInit() {
    this.getAnimals();
  }
  private getAnimals(){
    this.animalService.getAnimalsList().subscribe(
      data => {
        this.animalList = data;
        console.log(data);
      },
      error => {
        console.error('Bład pobierania zwierzat')
      });
  }
  deleteAnimal(id: number) {
    console.log(id);
    this.animalService.deleteAnimal(id).subscribe(
      () => {
        console.log('Animal deleted successfully');
        this.dialog.nativeElement.showModal();
      },
      error => {
        console.error('Błąd usuwania zwierzecia', error);
      }
    );
  }

  editAnimal(id: number) {
    this.currentAnimalId = id;
    this.isEditMode = true;
    if (this.currentAnimalId) {
      this.currentAnimal = this.animalList.find((p) => p.id === id);
      console.log(this.form);
      if (this.currentAnimal) {
        this.editedName = this.currentAnimal.name;
        this.editedWeight = this.currentAnimal.weight;
        this.editedType = this.currentAnimal.type;
        this.editedSex = this.currentAnimal.sex;
        console.log('Edycja przebiegla pomyslnie')
      } else {
        console.log('Blad edycji')
      }
    }
  }
  putAnimal() {
    if (this.currentAnimalId) {
      const updatedAnimal: Animal = {
        id: this.currentAnimalId,
        name: this.editedName,
        type: this.editedType,
        weight: this.editedWeight,
        sex: this.editedSex,
        //ownerId: this.editedOwner,
      };
      this.animalService.editAnimal(this.currentAnimalId, updatedAnimal).subscribe(
        () => {
          console.log('Animal edited successfully');
          this.isEditMode = false;
          this.getAnimals();
        },
        (error) => {
          console.error('Błąd edycji zwierzęcia', error);
        }
      );
    }
  }
}


