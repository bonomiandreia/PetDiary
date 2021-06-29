import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceAkita } from '../../state/auth.service';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formLogin: FormGroup;
  token: string;
  id: string;

  constructor(private fb: FormBuilder, public router: Router, public login: AuthServiceAkita) { 
    this.formLogin = this.fb.group({
      email: ['', Validators.compose([Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  enter(): void {
    if (this.formLogin.value) {
      const body = {
        "email": this.formLogin.value.email,
        "password": this.formLogin.value.password
      }
      this.login.login(body);
    }
  }

  createNewAccount(): void {
    this.router.navigate(['/create-account']);
  }

}
