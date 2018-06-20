import { action, observable } from 'mobx';
import * as crypto from 'crypto';
import * as sa from 'superagent';

export class LoginStore {
  @observable token: string;
  @observable loginVisible = true;
  @observable isLogged = false;
  @observable user;

  @action toggleVisible() {
    this.loginVisible = !this.loginVisible;
    console.log(this.loginVisible);
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
          console.log('Peticion ok. Respuesta: ', res);
          console.log(`Token: ${res.body.token}. \n Tipo: ${typeof(res.body.token)}`);
          this.isLogged = true;
          this.token = res.body.token;
          this.user = res.body;
          sessionStorage.setItem('token', res.body.token);
        }
        else {
          console.log('Error ', err);
        }
    });
  }
}