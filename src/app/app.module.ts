import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CanDeactivateGuard } from './candeactivate';

import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { AnimalesComponent } from './animales/animales.component';
import { SimbolosexoPipe } from './simbolosexo.pipe';
import { SpotifyComponent } from './spotify/spotify.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{
		path: 'animales',
		component: AnimalesComponent
	},
	{
		path: 'pokemon',
		component: SpotifyComponent,
		canActivate: [AuthService]
	},
	{
		path: '',
		redirectTo: '/pokemon',
		pathMatch: 'full'
	},
	{
		path: 'pokemon/:numeropoke',
		component: PokemonDetalleComponent,
		canDeactivate: [CanDeactivateGuard],
		canActivate: [AuthService]
		/*children: [
			{
				path: 'habilidades',
				component: PokemonHabilidadesComponent,
			}
		]*/
	},
	{
		path: 'login',
		component: LoginComponent
	}
];

@NgModule({
	declarations: [
		AppComponent,
		AnimalesComponent,
		SimbolosexoPipe,
		SpotifyComponent,
		PokemonDetalleComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		HttpModule,
		RouterModule.forRoot(routes, { enableTracing: true })
	],
	providers: [CanDeactivateGuard, AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
