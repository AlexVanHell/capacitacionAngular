import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify/spotify.service';
import { Router, ActivatedRoute, ParamMap, Params, CanDeactivate } from '@angular/router';
import { CanDeactivateGuard } from '../candeactivate';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-pokemon-detalle',
	templateUrl: './pokemon-detalle.component.html',
	styleUrls: ['./pokemon-detalle.component.css'],
	providers: [SpotifyService]
})
export class PokemonDetalleComponent implements OnInit, CanDeactivate<CanDeactivateGuard> {
	pokemon: any;
	estaCargando: boolean;
	pokemonNombreViejo: string;

	constructor(private poke: SpotifyService, private route: ActivatedRoute, private router: Router) {}

	canDeactivate(): boolean {
		if (this.pokemon.name !== this.pokemonNombreViejo) {
			return window.confirm('¿Seguro quieres salir?');
		}
		return true;
	}
	
	ngOnInit() {
		this.estaCargando = true;
		this.route.paramMap.switchMap((params: Params) => this.poke.getSinglePokemon(params.get('numeropoke')))
			.subscribe(response => {
				this.pokemon = response;
				this.pokemonNombreViejo = this.pokemon.name;
				this.estaCargando = false;
			});
	}

}
