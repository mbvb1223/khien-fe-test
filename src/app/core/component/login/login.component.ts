import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  private defaultLink = 'posts/list';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate([this.defaultLink]);
    }
  }

  ngOnInit() {
  }

  public login(): void {
    if (!this.username || !this.password) {
      alert('Please fill your UserName/Password!');

      return;
    }

    this.authenticationService.login(this.username, this.password).subscribe(
      () => {
        alert('Done!');

        this.router.navigate([this.defaultLink]);
      },
      () => alert('Error!')
    );
  }
}
