import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }
  @Input() list;
  @Input() displayedColumns;

  ngOnInit(): void {}

}
