import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private login: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.login.logout();
    this.router.navigate(['/']);
  }

}
