import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateAccountService } from '../../services/create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  formLogin: FormGroup;

  constructor(public router: Router, private fb: FormBuilder, private serviceCreateAccount: CreateAccountService) {
    this.formLogin = this.fb.group({
      email: ['', Validators.compose([Validators.email])],
      password: ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit(): void {
  }

  create(): void {

    if (this.formLogin.value) {
      const body = {
        "email": this.formLogin.value.email,
        "password": this.formLogin.value.password
      }
      this.serviceCreateAccount.create(body);
    }

  }

  backToLogin(): void {
    this.router.navigate(['/login']);
  }

}
