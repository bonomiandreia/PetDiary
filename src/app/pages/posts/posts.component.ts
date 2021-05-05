import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Posts } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts/posts.service';
import { AuthQuery } from '../../state/auth.query';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-post-page',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostPageComponent implements OnInit {
  formPosts: FormGroup;
  id;
  idUser$;
  constructor(private posts: PostsService, private fb: FormBuilder, public authQuery: AuthQuery) { 
    
    this.formPosts = this.fb.group({
      postArea: ['', Validators.compose([Validators.required])],
    });
    this.idUser$ = this.authQuery.idUser$;
    this.idUser$.subscribe(id => this.id = id)
  }

  listPosts: Posts[] = [];
  colums = ['id', 'date', 'text'];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.posts.getPostsById(this.id).subscribe((data) => {
      this.listPosts = data;
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
      this.posts.postAddPost(body).subscribe((data) => {
        this.getPosts();
      })
    }


  }

}
