import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Posts } from 'src/app/models/post.model';

export interface PostsState {
  data: Posts[];
}

export function createPosts() {
  return {
    data: [],
  } as PostsState;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'post', resettable: true })
export class PostsStore extends Store<PostsState> {
  //entityStore
  constructor() {
    super(createPosts());
  }

  setPosts(data: Posts[]): void {
    console.log(data)
    this.update({ data });
  }

}
