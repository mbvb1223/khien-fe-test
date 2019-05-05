import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject  } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserModel } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: Subject<UserModel> = new Subject();
  private currentUser: UserModel;

  constructor(private http: HttpClient) {
    this.currentUserSubject.asObservable().subscribe((userData: UserModel) => this.currentUser = userData);
    this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser')));
  }

  public get currentUserValue(): UserModel {
    return this.currentUser;
  }

  public login(username: string, password: string) {
    return this.http.post<any>(`/users/authenticate`, { username, password }).pipe(
      tap((user: UserModel) => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));

          this.currentUserSubject.next(user);
        }

        return user;
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('currentUser');

    this.currentUserSubject.next(null);
  }
}
