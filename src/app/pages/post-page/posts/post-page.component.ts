import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Posts } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts/posts.service';



@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  formPosts: FormGroup;
  id = localStorage.getItem('userId');
  constructor(private posts: PostsService, private fb: FormBuilder) { 
    
    this.formPosts = this.fb.group({
      postArea: ['', Validators.compose([Validators.required])],
    });
  }

  listPosts: Posts[] = [];
  colums = ['id', 'date', 'text'];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
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
