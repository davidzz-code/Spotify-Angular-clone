import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  errorSession: Boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(private authServices: AuthService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('test@test.com', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('12345678', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      }
    )
  }

  sendLogin(): void {
    const {email, password} = this.formLogin.value;
    this.authServices.sendCredentials(email, password).subscribe(
      responseOk => {
        const { data, tokenSession } = responseOk;
        this.cookie.set('token', tokenSession, 4, '/')
        this.errorSession = false;
        this.router.navigate(['/', 'tracks']);
      },
      error => {
        console.log('ERROR CON TU USER O PASSWORD')
        this.errorSession = true

      }
    )
  }
}
