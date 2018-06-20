import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { GraphStore } from '../stores/GraphStore';
import { ChartType } from '../../types/types';
import { BarGraph, PieGraph, LineGraph, AreaGraph } from '../pages';
import { Grid } from '@material-ui/core';

export interface GraphProps {
  graphStore?: GraphStore;
  type: ChartType;
}

@inject('graphStore')
@observer
export class Graph extends React.Component<GraphProps, {}> {

  componentDidMount() {
    if (!this.props.graphStore.graphs) {
      this.props.graphStore.getFirstGraph();
    }
  }

  renderHistogram() { return <BarGraph />; }
  renderPiechart() { return <PieGraph />; }
  renderMultilineChart() { return <AreaGraph />; }
  renderLineChart() { return <LineGraph />; }

  renderChart(type) {
    switch (type) {
      case ChartType.HISTOGRAM:
        return this.renderHistogram();

      case ChartType.PIE_CHART:
        return this.renderPiechart();

      case ChartType.MULTILINE_CHART:
        return this.renderMultilineChart();

      case ChartType.LINE_CHART:
        return this.renderLineChart();
    }
  }

  render() {
    return <Grid container style={{ width: '100%' }}>
      {this.renderChart(this.props.type)}
    </Grid >;
  }
}