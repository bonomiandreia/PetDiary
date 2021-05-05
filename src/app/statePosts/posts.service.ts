import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostsStore } from './posts.store';
import { environment } from '../../environments/environment';
import { Posts } from 'src/app/models/post.model';
import { Observable } from 'rxjs';
import { PostsRequest } from '../models/postsRequest.model';



@Injectable({ providedIn: 'root' })
export class PostsService { 

  constructor(private postsStore: PostsStore, private http: HttpClient) {
  }

  getPostsById(userId: string): Observable<Posts[]> {
    
    return this.http.get<Posts[]>(`${environment.url}posts/${userId}`);
  }

  postAddPost(body: PostsRequest): Observable<Posts> {
    return this.http.post<Posts>(`${environment.url}posts/create`, body);
  }


}
