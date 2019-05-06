import { Component, OnInit } from '@angular/core';

import { PostService } from '../../../core/service/post.service';
import { PostModel } from '../../../core/model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts: Array<PostModel>;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.posts = this.postService.getAll();
  }
}
