import { trigger, state, style, animate, transition } from '@angular/animations';

export const seleccion = 
	trigger('seleccion', [
      state('activo', style({
        backgroundColor: 'orange',
        transform: 'scale(1.2)'
      })),
      transition('inactivo <=> activo', animate('300ms ease-in')),
    ]);