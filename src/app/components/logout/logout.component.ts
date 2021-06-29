import { Component, OnInit } from '@angular/core';
import { AuthServiceAkita } from '../../state/auth.service';
import { AuthQuery } from '../../state/auth.query';
import { PostsServiceAkita } from '../../statePosts/posts.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  email: string;

  constructor(private logoutAKita: AuthServiceAkita, akitaQuery: AuthQuery, private postsService: PostsServiceAkita) {
    this.email = akitaQuery.getValue().email;
   }

  ngOnInit(): void {
  }

  logout(): void {
    this.logoutAKita.logout();
    this.postsService.deletePosts();
  }

}
