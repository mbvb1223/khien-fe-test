import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cloneDeep } from 'lodash';

import { PostService } from '../../../core/service/post.service';
import { PostModel } from '../../../core/model/post.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  public post: PostModel;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(params => {
        this.post = cloneDeep(this.postService.getById(params.get('id')));

        if (!this.post) {
          alert('Error! Post is not existing');
          this.router.navigate(['posts/list']);
        }
      });
  }

  public save(): void {
    if (!this.post.title) {
      alert('Title can not be empty');

      return;
    }

    this.postService.save(this.post.id, this.post);
    this.router.navigate(['posts/list']);
  }
}
