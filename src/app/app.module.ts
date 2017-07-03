import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalesComponent } from './animales/animales.component';
import { SimbolosexoPipe } from './simbolosexo.pipe';
import { SpotifyComponent } from './spotify/spotify.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
