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
          sessionStorage.setItem('token', res.body.token);
          console.log('user: ', this.user);
          console.log('Response: ', res);
          console.log('body ', res.body);
          console.log('Token ', res.body.token);
        }
        else {
          console.log('Error ', err);
        }
    });
  }
}