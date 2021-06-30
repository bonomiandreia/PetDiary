import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Posts } from 'src/app/models/post.model';
import { Observable } from 'rxjs';
import { PostsServiceAkita } from '../../statePosts/posts.service';
import { PostsQuery } from '../../statePosts/posts.query';
import { AuthQuery } from '../../state/auth.query';



@Component({
  selector: 'app-post-page',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostPageComponent implements OnInit {
  formPosts: FormGroup;
  idUser: string;
  posts$: Observable<Posts[]>
  constructor(private fb: FormBuilder, private postsQuery: PostsQuery, private postsService: PostsServiceAkita, private authQuery: AuthQuery) { 
    
    this.formPosts = this.fb.group({
      postArea: ['', Validators.required],
    });
    this.posts$ = this.postsQuery.posts$;

    this.idUser = this.authQuery.getValue().id
  }
  colums = ['id', 'date', 'text', 'actions'];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPostsById(this.idUser);
  }

  postDaily(): void { 
    if (!this.formPosts.valid) {
      return;
    }
    this.postsService.postAddPost(this.formPosts.value.postArea);

  }

}
