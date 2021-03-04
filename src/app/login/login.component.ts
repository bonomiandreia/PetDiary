import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
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
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  token;
  id;

  constructor(private fb: FormBuilder, private login: LoginService, public router: Router) { 
    this.formLogin = this.fb.group({
      email: ['', Validators.compose([Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
  }

  sendData(): void {
    if (this.formLogin.value) {
        this.login.login(this.formLogin.value.email, this.formLogin.value.password).subscribe((data) => {
          this.token = data['token'];
          this.id = data['auth']['_id'];
          localStorage.setItem('token', this.token);
          localStorage.setItem('userId', this.id);
          this.router.navigate(['posts']);
      })
    }
  }

}
