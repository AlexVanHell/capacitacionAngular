import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/animal';
import { animales } from '../mocks/listaAnimales'; 

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
	animales: Animal[];
	animalNuevo = new Animal();
  @Input() persona: string;
  @Output() onAnimalSelect = new EventEmitter<Animal>();

  constructor() {
  	this.animales = animales;
  }

  ngOnInit() {
  }

  agregar(): void {
  	animales.push(this.animalNuevo);
  }

  seleccionarAnimal(animal: Animal) {
    this.onAnimalSelect.emit(animal);
  }

}
