import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { GraphStore } from '../stores/GraphStore';

export interface GraphProps {
  graphStore: GraphStore;
}

@inject('graphStore')
@observer
export default class Graph extends React.Component<GraphStore, {}> {

  componentDidMount() {
    if (!this.props.graphs) {
      this.props.getGraph();
    }
  }
}