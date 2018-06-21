import * as React from 'react';
import { TextField, Button, Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { GraphStore } from '../stores/GraphStore';
import { inject, observer } from 'mobx-react';
import { LoginStore } from '../stores/LoginStore';
import { Redirect } from 'react-router';

interface GraphListProps {
  graphStore?: GraphStore;
  loginStore?: LoginStore;

}

interface GraphListStates {
  graphs?: any;
}

@inject('graphStore', 'loginStore')
@observer
export default class GraphList extends React.Component<GraphListProps, GraphListStates> {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.loginStore.logout(this.props.loginStore.token)
      .then(() => {
        // TODO Redirigir a raiz
        return <Redirect to='/bargraph' />;
      });
  }

  render() {
    const { loginStore } = this.props;
    if (loginStore && loginStore.user && this.props.graphStore.graphs) {
      return <Grid item sm={12}>
      <Typography variant='headline' component='h1' >Bienvenido {this.props.loginStore.user.userName ? this.props.loginStore.user.userName : ''}</Typography>
      <Typography variant='subheading' component='h3'>lista de graficas</Typography>
      <List component='nav'>
        {this.props.graphStore.graphs.map(graph =>
          <ListItem button key={graph.name}>
            <ListItemText>{graph.name}</ListItemText>
          </ListItem>)}
      </List>
      <Button
      variant='raised'
      style={{ color: 'white', background: '#63c98C' }}
      onClick={this.logout}>Logout</Button>
    </Grid>;
    } else {
      return <p>Cargando...</p>;
    }
  }
}