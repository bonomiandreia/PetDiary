import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  formLogin: FormGroup;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  create(): void {

  }

  backToLogin(): void {
    this.router.navigate(['/login']);
  }

}
