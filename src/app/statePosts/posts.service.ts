import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostsStore } from './posts.store';
import { environment } from '../../environments/environment';
import { Posts } from 'src/app/models/post.model';
import { AuthQuery } from '../state/auth.query';


@Injectable({ providedIn: 'root' })
export class PostsServiceAkita { 
  idUser: string
  constructor(private postsStore: PostsStore, private http: HttpClient, private authQuery: AuthQuery) {
    this.idUser = this.authQuery.getValue().id;
  }


  getPostsById() {
    this.http.get<Posts[]>(`${environment.url}posts/${this.idUser}`).subscribe((data: Posts[]) => {
      return this.postsStore.setPosts(data.reverse());
    })
  }

  deletePostsById(idPost: string) {
    this.http.delete(`${environment.url}posts/delete/${idPost}`).subscribe(() => {
      return this.getPostsById();
    })
  }

  postAddPost(content: string) {
    const body = {
      text: content,
      date: Date.now(),
      idUser: this.idUser,
    }
    this.http.post<Posts[]>(`${environment.url}posts/create`, body).subscribe((data: Posts[]) => {
      return this.getPostsById();
    })
  }


}
