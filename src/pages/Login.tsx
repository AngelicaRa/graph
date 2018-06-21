import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import { LoginForm } from './LoginForm';
import GraphList from './GraphList';
import { GraphStore } from '../stores/graphStore';
import { LoginStore } from '../stores/LoginStore';

interface LoginProps {
  loginStore?: LoginStore;
  graphStore?: GraphStore;
}

@inject('loginStore', 'graphStore')
@observer
export class Login extends React.Component<LoginProps> {
  render() {
    return <Grid container>
      {(this.props.loginStore.isLogged) ? <GraphList /> : <LoginForm />}
    </Grid>;
  }
}