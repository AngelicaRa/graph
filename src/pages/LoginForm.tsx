import * as React from 'react';
import { TextField, Button } from '@material-ui/core';
import * as externalCss from './Login.css';
import { LoginStore } from '../stores/LoginStore';
import { inject, observer } from 'mobx-react';
import { GraphStore } from '../stores/graphStore';

const style = {
  input: {
    marginLeft: '20px',
    marginRight: '20px',
    display: 'block',
  },
  button: {
    marginLeft: '20px',
    marginRight: '20px',
    display: 'block',
    background: '#63c98C',
    color: 'white'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }
};

export interface LoginFormProps {
  loginStore?: LoginStore;
  graphStore?: GraphStore;
}

export interface LoginFormState {
  userName: string;
  password: string;
}

@inject('loginStore', 'graphStore')
@observer
export class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor(props) {
    super(props);
    this.state = { userName: '', password: '' };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({userName: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.loginStore.toggleVisible();
    this.props.loginStore.login(this.state.userName, this.state.password)
      .then(() => {
        this.props.graphStore.getAllGraphs();
        console.log('Fin del login');
      });
  }

  render() {
    return <div style={style.form}>
      <form method='POST' autoComplete='off' >
        <TextField
          onChange={this.handleUsername}
          id='username'
          placeholder='User Name'
          margin='normal'
          style={style.input}
        />
        <TextField
          onChange={this.handlePassword}
          id='password'
          placeholder='Password'
          margin='normal'
          style={style.input}
          type='password'
        />
        <Button
          variant='raised'
          style={style.button}
          onClick={this.handleSubmit}
        >Login</Button>
      </form>
    </div>;
  }
}