import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'angularx-social-login';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public title;
  constructor(private _router: Router, private authService: AuthService) {
  }
  ngOnInit() {
    // tslint:disable-next-line: no-debugger
    debugger;
    console.log('This is Homepage');
    console.log('WelCome');
    this.title = sessionStorage.getItem('LoginUser');
   console.log(this.title);

  //  this.title= sessionStorage.getItem("LoginUser");
  //  console.log(this.title);
  }

  backClick() {
    const b = this.authService.signOut(false);
    console.log(b);
    this._router.navigateByUrl('/login');
  }

}
