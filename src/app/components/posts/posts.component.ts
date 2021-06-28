import { Component, Input, OnInit } from '@angular/core';
import { PostsServiceAkita } from '../../statePosts/posts.service';
import { Posts } from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsServiceAkita) { }
  @Input() list: Posts[];
  @Input() displayedColumns;

  ngOnInit(): void {}


  deletePost(id: string) {
    this.postsService.deletePostsById(id);
  }

}
