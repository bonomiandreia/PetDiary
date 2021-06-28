import { Component, Input, OnInit } from '@angular/core';

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


  deletePost(id: string) {
    console.log(id)
  }

}
