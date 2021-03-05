import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts/posts.service';
import { Posts } from '../models/post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  constructor(private posts: PostsService) { }

  listPosts: Posts[];
  colums = ['id', 'date', 'text'];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    let id = localStorage.getItem('userId');
    this.posts.getPostsById(id).subscribe((data) => {
      this.listPosts = data;
    })
  }

}
