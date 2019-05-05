import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from '../../../core/service/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  public title: string;
  public content: string;

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public create(): void {
    this.postService.create({title: this.title, content: this.content});

    this.router.navigate(['posts/list']);
  }
}
