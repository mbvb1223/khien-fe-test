import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialConfigurationModule} from './share/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './core/component/login/login.component';
import { PostListComponent } from './route/post/post-list/post-list.component';
import { PostItemComponent } from './route/post/post-item/post-item.component';
import { PostAddComponent } from './route/post/post-add/post-add.component';
import { PostEditComponent } from './route/post/post-edit/post-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostListComponent,
    PostItemComponent,
    PostAddComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialConfigurationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
