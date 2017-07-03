import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  constructor(private http: Http) {}

  getItems(): Observable<any> {
  	return this.http.get(`https://api.spotify.com/v1/search&q=`)
  }


}
