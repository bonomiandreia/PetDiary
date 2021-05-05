import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PostsStore } from './posts.store';

@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private postsStore: PostsStore, private http: HttpClient) {
  }


}
