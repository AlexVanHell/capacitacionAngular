import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalesComponent } from './animales/animales.component';
import { SimbolosexoPipe } from './simbolosexo.pipe';
import { SpotifyComponent } from './spotify/spotify.component';

const routes: Routes = [
	{
		path: 'animales',
		component: AnimalesComponent
	},
	{
		path: 'pokemon',
		component: SpotifyComponent
	}
];

@NgModule({
	declarations: [
		AppComponent,
		AnimalesComponent,
		SimbolosexoPipe,
		SpotifyComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(routes, { enableTracing: true })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
