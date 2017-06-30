import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simbolosexo'
})
export class SimbolosexoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	let simbolo = '';
  	if ( value ) {
  		simbolo = '&#9890;';
  	} else {
  		simbolo = '&#9891;';
  	}
    return simbolo;
  }

}
