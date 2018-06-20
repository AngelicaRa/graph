import * as React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { inject, observer } from 'mobx-react';
import { GraphStore } from '../stores/graphStore';
// import Graph from '../components/Graph';

interface BarGraphProps {
  graphStore?: GraphStore;
}

interface BarGraphStates {
  data?: object[];
}

@inject('graphStore')
@observer
export class BarGraph extends React.Component<BarGraphProps, BarGraphStates> {


  render() {
    console.log('Render: ', this.props.graphStore.graphs);

    return <Grid item sm={12}>
        <Typography variant='headline' component='h1' align='center'>BARGRAPH PAGE</Typography>
        <BarChart width={600} height={300} data={this.props.graphStore.graphs} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray='3 3'/>
          <XAxis dataKey='name'/>
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Bar dataKey='pv' fill='#8884d8' />
          <Bar dataKey='uv' fill='#82ca9d' />
        </BarChart>
      </Grid>;
  }
}