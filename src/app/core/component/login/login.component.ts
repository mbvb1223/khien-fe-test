import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  public login(): void {
    this.authenticationService.login(this.username, this.password).subscribe(
      () => alert('Done!'),
      () => alert('Error!'),
    );
  }
}
