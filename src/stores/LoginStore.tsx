import { action, observable, toJS } from 'mobx';
import * as crypto from 'crypto';
import * as sa from 'superagent';

interface User {
  userName?: string;
  token?: string;
}

export class LoginStore {
  @observable token: string;
  @observable loginVisible = true;
  @observable isLogged = false;
  @observable user?: User;

  @action toggleVisible() {
    this.loginVisible = !this.loginVisible;
  }

  @action login(userName, password) {
    return new Promise((resolve, reject) => {
      const hash = crypto.createHmac('sha256', 'secret')
        .update(password)
        .digest('hex');
      console.log(`Password: ${hash}`);

      sa.post('http://localhost:3000/users/login')
        .send({userName, password: hash})
        .end((err, res) => {
          if (!err) {
            this.isLogged = true;
            this.token = res.body.token;
            this.user = res.body;
            localStorage.setItem('token', res.body.token);
            resolve();
          }
          else {
            console.log('Error ', err);
            reject();
          }
      });
    });
  }

  @action logout(token) {
    console.log('token', token.toJS);
    return new Promise((resolve, reject) => {
      sa.post('http://localhost:3000/users/logout')
      .send({ token })
      .end((err, res) => {
        if (!err) {
          console.log(res);
          this.isLogged = false;
          this.token = '';
          this.user = {};
          localStorage.setItem('token', '');
          resolve();
        } else {
          console.log('Error en SA de logout', err);
          reject(err);
        }
      });
    });
  }
}