import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Posts } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts/posts.service';
import { AuthQuery } from '../../state/auth.query';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostsServiceAkita } from '../../statePosts/posts.service';
import { PostsQuery } from '../../statePosts/posts.query';



@Component({
  selector: 'app-post-page',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostPageComponent implements OnInit {
  formPosts: FormGroup;
  id: string;
  idUser$: Observable<string>;
  posts$: Observable<Posts[]>
  constructor(private posts: PostsService, private fb: FormBuilder, private postsQuery: PostsQuery, public authQuery: AuthQuery, public postsService: PostsServiceAkita) { 
    
    this.formPosts = this.fb.group({
      postArea: ['', Validators.compose([Validators.required])],
    });
    this.idUser$ = this.authQuery.idUser$;
    this.idUser$.subscribe(id => this.id = id);
    this.posts$ = this.postsQuery.posts$;
  }

  listPosts: Posts[] = [];
  colums = ['id', 'date', 'text'];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.posts$.subscribe((posts: Posts[]) => {
      this.postsService.getPostsById(this.id);
      this.listPosts = posts;
    })
  }

  postDaily(): void { 
    const date = Date.now();
    const body = {
      idUser: this.id,
      date,
      text: this.formPosts.value.postArea
    }
    if (this.formPosts.value) { 
      this.postsService.postAddPost(body);
      this.getPosts();
    }


  }

}
