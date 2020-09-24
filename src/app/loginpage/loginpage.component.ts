import { Component, OnInit } from '@angular/core';
// import {LoginServiceService} from '../login-service.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AuthService } from 'angularx-social-login';

import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
declare var window: any;
declare var FB: any;
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
  providers: []
})
export class LoginpageComponent implements OnInit {

  public uFName;
  public uLName;
  public uEmail;
  public uPassword;
  public loginName;
  public validate = false;
  private user: SocialUser;
  constructor(private _router: Router, private http: HttpClient, private authService: AuthService) {

   }



  ngOnInit() {
  }


googleLoginClick() {
  const b = this.authService.signOut(false);
  console.log(b);
  const a = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

   console.log('Google ::', a);
   this.authService.authState.subscribe((user) => {
    this.user = user;
    console.log('user:::', this.user);
    this._router.navigate(['/Home']);
    // this.loggedIn = (user != null);
  });
}

facebookLoginClick() {

   const a = this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);

   console.log('Facebook', a);

   this.authService.authState.subscribe((user) => {
    this.user = user;
    console.log('user:::', this.user);

  });
  const b = this.authService.signOut(false);
  console.log(b);

}
  emailLoginClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/products/3', true);
    xhr.onload = function () {
      console.log(xhr.responseText);
    };
    xhr.send();
  }
}
