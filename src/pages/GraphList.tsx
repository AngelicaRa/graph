import * as React from 'react';
import { TextField, Button, Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { GraphStore } from '../stores/GraphStore';
import { inject, observer } from 'mobx-react';
import { LoginStore } from '../stores/LoginStore';

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

    // this.state = {
    //   graphs: this.props.graphStore.getAllGraphs()
    // };
  }

  // componentDidMount() {
  //   const { loginStore } = this.props;
  //   if (loginStore && loginStore.user) {
  //     this.props.graphStore.getAllGraphs();
  //   }
  //   // if (!this.props.graphStore.graphs) {
  //   //   this.props.graphStore.getAllGraphs();
  //   // }
  // }

  // componentWillUpdate() {
  //   const { loginStore } = this.props;
  //   if (loginStore && loginStore.user) {
  //     this.props.graphStore.getAllGraphs();
  //   }
  // }

  render() {
    const { loginStore } = this.props;
    if (loginStore && loginStore.user) {
      return <Grid item sm={12}>
      <Typography variant='headline' component='h1' >Bienvenido {this.props.loginStore.user.userName ? this.props.loginStore.user.userName : ''}</Typography>
      <Typography variant='subheading' component='h3'>lista de graficas</Typography>
      <List component='nav'>
        {this.props.graphStore.graphs && this.props.graphStore.graphs.map(graph =>
          <ListItem button key={graph.name}>
            <ListItemText>{graph.name}</ListItemText>
          </ListItem>)}
      </List>
      <Button
      variant='raised'
      style={{ color: '#63c98C' }}
      onClick={this.props.loginStore.logout}>Logout</Button>
    </Grid>;
    } else {
      return <p>Cargando...</p>;
    }
  }
}