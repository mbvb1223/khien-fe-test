import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/component/login/login.component';
import { PostListComponent } from './route/post/post-list/post-list.component';
import { PostAddComponent } from './route/post/post-add/post-add.component';
import { PostEditComponent } from './route/post/post-edit/post-edit.component';
import { AuthGuard } from './core/guard/authentication.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'posts/list',
    component: PostListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts/add',
    component: PostAddComponent
  },
  {
    path: 'posts/edit/:id',
    component: PostEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
