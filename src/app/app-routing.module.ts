import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/component/login/login.component';
import { PostListComponent } from './route/post/post-list/post-list.component';
import { PostAddComponent } from './route/post/post-add/post-add.component';
import { PostEditComponent } from './route/post/post-edit/post-edit.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'post/list',
    component: PostListComponent
  },
  {
    path: 'post/add',
    component: PostAddComponent
  },
  {
    path: 'post/edit/:id',
    component: PostEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
