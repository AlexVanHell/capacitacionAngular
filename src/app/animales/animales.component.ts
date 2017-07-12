import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from '../models/animal';
import { animales } from '../mocks/listaAnimales';
import { seleccion } from '../_animations/animation-seleccion';
import { entrada } from '../_animations/animation-entrada';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css'],
  animations: [seleccion, entrada],
  host: { '[@entrada]': '' }
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
    animal.seleccionado = !animal.seleccionado;
    /*this.onAnimalSelect.emit(animal);*/
  }

  eliminarAnimal(animal: Animal) {
    this.animales.splice(this.animales.indexOf(animal), 1);
  }

}
