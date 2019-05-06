import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PostItemComponent } from './post-item.component';
import { SharedModule } from '../../../share/share.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { LoginComponent } from '../../../core/component/login/login.component';
import { PostListComponent } from '../post-list/post-list.component';
import { PostAddComponent } from '../post-add/post-add.component';
import { PostEditComponent } from '../post-edit/post-edit.component';

describe('PostItemComponent', () => {
  let component: PostItemComponent;
  let fixture: ComponentFixture<PostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ PostItemComponent, LoginComponent, PostListComponent, PostAddComponent, PostEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
