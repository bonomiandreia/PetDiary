import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getPostsById(userId: string): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.url+'posts/'+userId);
  }
}
