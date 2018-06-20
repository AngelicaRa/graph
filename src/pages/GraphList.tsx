import * as React from 'react';
import { TextField, Button, Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { GraphStore } from '../stores/GraphStore';
import { inject, observer } from 'mobx-react';
import { LoginStore } from '../stores/LoginStore';

interface GraphListProps {
  graphStore?: GraphStore;
  loginStore?: LoginStore;
}

@inject('graphStore', 'loginStore')
@observer
export default class GraphList extends React.Component<GraphListProps> {

  componentDidMount() {
    if (!this.props.graphStore.graphs) {
      this.props.graphStore.getAllGraphs();
    }
  }

  renderGraphs() {
    return this.props.graphStore.graphs.map(item => <li>{item.name}</li>);
  }

  render() {
    return <Grid sm={12}>
      <Typography variant='headline' component='h1' >Bienvenido {this.props.loginStore.user.userName}</Typography>
      <Typography variant='subheading' component='h3'>lista de graficas</Typography>
      <List component='nav'>
        {this.props.graphStore.graphs && this.props.graphStore.graphs.map(graph =>
          <ListItem button key={graph.nombre}>
            <ListItemText>{graph.nombre}</ListItemText>
          </ListItem>)}
      </List>
    </Grid>;
  }
}