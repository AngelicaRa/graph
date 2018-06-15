import * as React from 'react';
import * as sa from 'superagent';

export interface FakeLoginState {
  userName: string;
  password: string;
}

export class FakeLogin extends React.Component<{}, FakeLoginState> {
  constructor(props) {
    super(props);
    this.state = { userName: '', password: '' };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeUserpassword = this.handleChangeUserpassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({userName: event.target.value});
  }
  handleChangeUserpassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    sa.post('http://localhost:3000/users/login')
    .send({
      userName: this.state.userName,
      password: this.state.password })
    .end((err, res) => {
      if (!err) {
        console.log('Peticion ok. Respuesta: ', res);
      }
      console.log('Error ', err);
    });

    // fetch('http://localhost:3000/users/login', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state)
    // });
  }

  render() {
    return <React.Fragment>
      <form method='POST' onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' name='userName' value={this.state.userName} onChange={this.handleChangeUsername} />
        </label><br/>
        <label>
          Password:
          <input type='Password' name='password' value={this.state.password} onChange={this.handleChangeUserpassword} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </React.Fragment>;
  }
}