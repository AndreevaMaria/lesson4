import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  email = 'wpfeffer@example.org'
  password = 'password'

  ngOnInit() {
  }

  auth() {
    this.userService
      .auth(this.email, this.password)
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.access_token)
          this.getProfile()
        }
      )
  }

  user = null

  getProfile() {
    this.userService
      .getMe(localStorage.token)
      .subscribe((res) => { this.user = res })
  }
}
