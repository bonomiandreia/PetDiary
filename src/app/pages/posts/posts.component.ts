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
  idUser$: Observable<string>;
  posts$: Observable<Posts[]>
  constructor(private fb: FormBuilder, private postsQuery: PostsQuery, private postsService: PostsServiceAkita) { 
    
    this.formPosts = this.fb.group({
      postArea: ['', Validators.required],
    });
    this.posts$ = this.postsQuery.posts$;
  }
  colums = ['id', 'date', 'text'];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPostsById();
  }

  postDaily(): void { 
    if (!this.formPosts.valid) {
      return;
    }
    this.postsService.postAddPost(this.formPosts.value.postArea);

  }

}
