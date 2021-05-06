import { Component, OnInit } from '@angular/core';
import { AuthServiceAkita } from '../../state/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutAKita: AuthServiceAkita) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.logoutAKita.logout();
  }

}
