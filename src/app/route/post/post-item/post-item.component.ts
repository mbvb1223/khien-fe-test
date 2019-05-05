import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostModel } from '../../../core/model/post.model';
import { PostService } from '../../../core/service/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: PostModel;

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public delete(postId: string): void {
    this.postService.deleteById(postId);

    this.router.navigate(['posts/list']);
  }
}
