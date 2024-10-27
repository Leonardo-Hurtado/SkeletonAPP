import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string ="";
  password: string ="";

  constructor(private router: Router) { }


  login() {
    const navigationExtras: NavigationExtras = {
      state: {
        username: this.username,
        password: this.password
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  }
}
