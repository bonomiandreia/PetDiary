import { Component, OnInit } from '@angular/core';
import { AuthServiceAkita } from '../../state/auth.service';
import { AuthQuery } from '../../state/auth.query';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  email: string;

  constructor(private logoutAKita: AuthServiceAkita, akitaQuery: AuthQuery) {

    this.email = akitaQuery.getValue().email;
    console.log(this.email)
   }

  ngOnInit(): void {
  }

  logout(): void {
    this.logoutAKita.logout();
  }

}
