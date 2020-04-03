import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  auth(email, password) {
     return this.httpClient
      .post('http://lesson-4.iilinov-n.myjino.ru/api/auth/login', {
        email: email,
        password: password,
      })
  }

  getMe(token) {
    return this.httpClient
      .post('http://lesson-4.iilinov-n.myjino.ru/api/auth/me', { token: token })
  }

  update(user) {
    user.token = localStorage.token
    return this.httpClient
      .put('http://lesson-4.iilinov-n.myjino.ru/api/auth/user/' + user.id, { user: user })
  }
}

