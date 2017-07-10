import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

	constructor(private router: Router) {
		console.log(localStorage.getItem('personita'));
	}

	canActivate(): boolean {
		if ( this.isLogged() ) {
			return true
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}

	getUser(): any {
		return JSON.parse(localStorage.getItem('personita'));
		/* 
			usuario = {
				nombre, :user
				contra :password
			}  
		*/
	}

	setUser(usuario: any): void {
		console.log(usuario);
		localStorage.setItem('personita', JSON.stringify(usuario));
	}

	isLogged(): boolean {
		return localStorage.getItem('personita') != undefined;
	}

	logout(): void {
		localStorage.removeItem('personita');
		this.router.navigate(['/login']);
	}

}
