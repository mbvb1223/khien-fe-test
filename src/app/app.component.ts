import { Component } from '@angular/core';
import { AuthenticationService } from './core/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app: Khien-FE-test';

  public constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {

  }
  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
