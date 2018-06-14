import * as React from 'react';
import { Typography } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { GraphStore } from '../stores/GraphStore';

interface MainProps {
  graphStore?: GraphStore;
}

@inject('graphStore')
@observer
export default class Main extends React.Component<MainProps, {}> {
  pepe = [];

  constructor(props) {
    super(props);
  }
  componentDidMount() {
      this.props.graphStore.getGraphs();
      console.log('ComponentDidMount ', this.props.graphStore.graphs);
  }
  componentDidUpdate() {
    console.log('ComponentDidUpdate ', this.props.graphStore.graphs);
    this.pepe = this.props.graphStore.graphs;
  }

  render() {
    return <React.Fragment>
      <Typography variant='headline' component='h1' align='center'>MAIN COMPONENT</Typography>
      {/* <div>{this.props.graphStore.graphs}</div> */}
      {/* {console.log('Render, ', this.props.graphStore.graphs)} */}
    </React.Fragment>;
  }
}