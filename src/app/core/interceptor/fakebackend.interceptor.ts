import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

const users: Array<any> = [{
  id: '1',
  username: 'demo',
  password: 'demo',
  firstName: 'Pham',
  lastName: 'Khien'
}];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, body} = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(delay(500));

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    function authenticate() {
      const {username, password} = body;
      const user = users.find(x => x.username === username && x.password === password);
      console.log(user, username, password);
      if (!user) {
        return error('Username or password is incorrect');
      }

      return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: 'fake-jwt-token'
      });
    }

    function ok(bodyData?) {
      return of(new HttpResponse({status: 200, body: bodyData}));
    }

    function error(message) {
      return throwError({error: {message}});
    }
  }
}

