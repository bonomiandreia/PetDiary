import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

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
