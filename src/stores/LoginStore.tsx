import { action, observable } from 'mobx';
import * as crypto from 'crypto';
import * as sa from 'superagent';

export class LoginStore {
  @observable token: string;

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
          console.log(`Token: ${res.body}. \n Tipo: ${typeof(res.body)}`);
          this.token = res.body;
        }
        else {
          console.log('Error ', err);
        }
    });
  }
}