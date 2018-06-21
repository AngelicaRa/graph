import * as React from 'react';
import { Typography } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { GraphStore } from '../stores/graphStore';
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, LineChart, Legend, Line } from 'recharts';

interface Props {
  graphStore?: GraphStore;
}


@inject('graphStore')
@observer
export class LineGraph extends React.Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return <React.Fragment>
      <Typography variant='headline' component='h1' align='center'>LINE GRAPH PAGE</Typography>
      <LineChart width={600} height={300} data={this.props.graphStore.graphs[0].data}
           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey='name'/>
      <YAxis/>
      <CartesianGrid strokeDasharray='3 3'/>
      <Tooltip/>
      <Legend />
      <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{r: 8}}/>
      <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
     </LineChart>
    </React.Fragment>;
  }
}