import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../../models/post.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getPostsById(userId: string): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${environment.url}posts/${userId}`);
  }

  postAddPost(body): any {
    return this.http.post(`${environment.url}posts/create`, body);
  }
}
