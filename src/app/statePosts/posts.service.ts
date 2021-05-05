import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostsStore } from './posts.store';
import { environment } from '../../environments/environment';
import { Posts } from 'src/app/models/post.model';
import { Observable, Subscription } from 'rxjs';
import { PostsRequest } from '../models/postsRequest.model';



@Injectable({ providedIn: 'root' })
export class PostsServiceAkita { 

  constructor(private postsStore: PostsStore, private http: HttpClient) {
  }


  getPostsById(userId: string) {
    this.http.get<Posts[]>(`${environment.url}posts/${userId}`).subscribe((data: Posts[]) => {
      return this.postsStore.setPosts(data);
    })
  }

  postAddPost(body: PostsRequest) {
    this.http.post<Posts[]>(`${environment.url}posts/create`, body).subscribe((data: Posts[]) => {
      return this.postsStore.setPosts(data);
    })
  }


}
