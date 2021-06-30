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
    this.idUser;
    this.authQuery.auth$.subscribe(id => this.idUser = id.auth._id)

  }


  getPostsById(idUser: string) {
    this.http.get<Posts[]>(`${environment.url}posts/${this.idUser}`).subscribe((data: Posts[]) => {
      this.postsStore.setPosts(data);
    })
  }

  deletePostsById(idPost: string) {
    this.http.delete(`${environment.url}posts/delete/${idPost}`).subscribe(() => {
      this.getPostsById(this.idUser);
    })
  }

  postAddPost(content: string) {
    const body = {
      text: content,
      date: Date.now(),
      idUser: this.idUser,
    }
    this.http.post<Posts[]>(`${environment.url}posts/create`, body).subscribe((data: Posts[]) => {
      this.getPostsById(this.idUser);
    })
  }

  deletePosts(): void {
    this.postsStore.reset();
  }


}
