import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	mensajesError: any = {
		user: false,
		pass: false
	}
	formLogin: FormGroup;

	constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
		this.construirForm();
	}

	ngOnInit() {
	}

	construirForm(): void {
		this.formLogin = this.fb.group({
			'user': ['', Validators.required],
			'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});

		this.formLogin.valueChanges.subscribe( data => {
			/*this.mensajesError.pass = false;

			if ( !this.formLogin.get('password').valid && this.formLogin.get('password').touched ) {
				this.mensajesError.pass = true;
			}*/
		})
	}

	validarForm(): boolean {
		if ( !this.formLogin.valid ) {
			return false;
		}

		let usuario = {
			user: this.formLogin.controls.user.value,
			password: this.formLogin.controls.password.value
		}

		this.auth.setUser(usuario);
		this.router.navigate(['/pokemon']);
		return true;

		/*this.mensajesError.user = false;
		this.mensajesError.pass = false;

		if ( !this.formLogin.get('user').valid ) {
			this.mensajesError.user = true;
		}

		if ( !this.formLogin.get('password').valid ) {
			this.mensajesError.pass = true;
		}*/
	}

}
