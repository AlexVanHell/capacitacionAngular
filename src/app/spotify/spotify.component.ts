import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormControl } from '@angular/forms';
import { SpotifyService } from './spotify.service';

@Component({
	selector: 'app-spotify',
	templateUrl: './spotify.component.html',
	styleUrls: ['./spotify.component.css'],
	providers: [SpotifyService]
})
export class SpotifyComponent implements OnInit {
	searchControl = new FormControl();
	estaCargando: boolean;
	listaPokemon: any = [];
	offset: number = 0;
	clicks: number = 0;

	constructor(private spoServ: SpotifyService) {
	}

	ngOnInit() {
		this.obtenerPokemones();
		/*this.searchControl.valueChanges
			.filter(text => text.length >= 3)
			.debounceTime(400)
			.distinctUntilChanged()
			.subscribe(value => {
				console.log(value);
				this.spoServ.getItems(value)
					.subscribe(response => this.listaPokemon = response.results);
			});*/
	}

	obtenerPokemones() {
		this.estaCargando = true;
		this.spoServ.getPokemones(this.offset)
			.subscribe(response => {
				for( let item of response.results ) {
					this.listaPokemon.push(item);
				}
				this.clicks++;
				this.offset = this.clicks * 20;
				this.estaCargando = false;
			});
	}

}
