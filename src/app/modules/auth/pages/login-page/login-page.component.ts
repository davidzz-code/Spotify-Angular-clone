import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

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

  constructor(private authServices: AuthService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
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
        console.log('sesión iniciada perfe')
        this.errorSession = false
      },
      error => {
        console.log('ERROR CON TU USER O PASSWORD')
        this.errorSession = true

      }
    )
  }
}
