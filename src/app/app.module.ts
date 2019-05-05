import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/component/login/login.component';
import { PostListComponent } from './route/post/post-list/post-list.component';
import { PostItemComponent } from './route/post/post-item/post-item.component';
import { PostAddComponent } from './route/post/post-add/post-add.component';
import { PostEditComponent } from './route/post/post-edit/post-edit.component';
import { SharedModule } from './share/share.module';
import { FakeBackendInterceptor } from './core/interceptor/fakebackend.interceptor';
import { FormsModule } from '@angular/forms';


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
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
