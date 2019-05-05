import { Injectable } from '@angular/core';
import { find, findIndex, remove } from 'lodash';

import { PostModel } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Array<PostModel> = [
    {id: '1', title: 'title-1', content: 'content 1'},
    {id: '2', title: 'title-2', content: 'content 2'},
  ];

  public getAll(): Array<PostModel> {
    return this.posts;
  }

  public getById(postId: string): PostModel {
    return find(this.posts, {id: postId});
  }

  public save(postId: string, postData: PostModel): void {
    this.posts.splice(findIndex(this.posts, {id: postId}), 1, postData);

    alert('Done! Save successfully');
  }

  public deleteById(postId: string): void {
    remove(this.posts, { id: postId });

    alert('Done! Delete successfully');
  }

  public create(postData) {
    postData.id = Math.random().toString(30).slice(2);
    this.posts.push(postData);

    alert('Done! Create successfully');
  }
}
