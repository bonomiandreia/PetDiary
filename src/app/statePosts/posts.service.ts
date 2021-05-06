import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostsStore } from './posts.store';
import { environment } from '../../environments/environment';
import { Posts } from 'src/app/models/post.model';
import { AuthQuery } from '../state/auth.query';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class PostsServiceAkita { 
  idUser: string
  constructor(private postsStore: PostsStore, private http: HttpClient, private authQuery: AuthQuery) {
    this.authQuery.idUser$.subscribe(id => this.idUser = id)
  }


  getPostsById() {
    console.log('texto', this.authQuery.idUser)
    this.http.get<Posts[]>(`${environment.url}posts/${this.idUser}`).subscribe((data: Posts[]) => {
      return this.postsStore.setPosts(data);
    })
  }

  postAddPost(content: string) {
    const body = {
      text: content,
      date: Date.now(),
      idUser: this.authQuery.idUser,
    }
    this.http.post<Posts[]>(`${environment.url}posts/create`, body).subscribe((data: Posts[]) => {
      return this.postsStore.setPosts(data);
    })
  }


}
