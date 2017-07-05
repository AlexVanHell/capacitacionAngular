import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CanDeactivateGuard } from './candeactivate';

import { AppComponent } from './app.component';
import { AnimalesComponent } from './animales/animales.component';
import { SimbolosexoPipe } from './simbolosexo.pipe';
import { SpotifyComponent } from './spotify/spotify.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';

const routes: Routes = [
	{
		path: 'animales',
		component: AnimalesComponent
	},
	{
		path: 'pokemon',
		component: SpotifyComponent
	},
	{
		path: '',
		redirectTo: '/pokemon',
		pathMatch: 'full'
	},
	{
		path: 'pokemon/:numeropoke',
		component: PokemonDetalleComponent,
		canDeactivate: [CanDeactivateGuard]
		/*children: [
			{
				path: 'habilidades',
				component: PokemonHabilidadesComponent,
			}
		]*/
	}
];

@NgModule({
	declarations: [
		AppComponent,
		AnimalesComponent,
		SimbolosexoPipe,
		SpotifyComponent,
		PokemonDetalleComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(routes, { enableTracing: true })
	],
	providers: [CanDeactivateGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
