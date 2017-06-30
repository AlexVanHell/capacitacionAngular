import { Component } from '@angular/core';
import { Persona } from './models/persona';
import { Animal } from './models/animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  arreglo: string[] = ['Luis', 'Fernanda', 'Jose', 'Jessica', 'Adrian'];
  posicionEscogida: string;

  constructor() {
  	this.posicionEscogida = this.arreglo[4].toString();

    for(let i = 0; i < this.arreglo.length; i++){ //bucle para recorrer las posiciones del arreglo
      console.log(this.arreglo[i]);
      // [0] Luis
      // [1] Fernanda
      // [2] Jose
      // [3] Jessica
      // [4] Adrian
    }

    for (let nombre in this.arreglo) {
      console.log(this.arreglo[nombre]);
    }

    for (let nombre of this.arreglo) {
      console.log(nombre);
    }

  }

  mostrarAnimalElegido(animal: Animal) {
    alert('El nombre del animal elegido es:' + animal.nombre);    
  }

}
