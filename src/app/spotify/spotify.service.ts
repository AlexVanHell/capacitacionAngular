import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

	constructor(private http: Http) {}

	/*getItems(busqueda: string): Observable<any> {
		return this.http
				.get(`http://pokeapi.co/api/v2/pokemon/`)
				.map(res => res.json());
	}*/

	getPokemones(offset: number): Observable<any> {
		return this.http
				.get(`http://pokeapi.co/api/v2/pokemon?offset=${offset}`)
				.map(res => res.json());
	}

	getSinglePokemon(numero: number): Observable<any> {
		return this.http
				.get(`http://pokeapi.co/api/v2/pokemon/${numero}`)
				.map(res => res.json());
	}

}
