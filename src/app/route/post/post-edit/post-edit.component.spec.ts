import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PostEditComponent } from './post-edit.component';
import { SharedModule } from '../../../share/share.module';
import { LoginComponent } from '../../../core/component/login/login.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { PostListComponent } from '../post-list/post-list.component';
import { PostAddComponent } from '../post-add/post-add.component';

describe('PostEditComponent', () => {
  let component: PostEditComponent;
  let fixture: ComponentFixture<PostEditComponent>;

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
      declarations: [ PostEditComponent, LoginComponent, PostListComponent, PostAddComponent, PostEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
