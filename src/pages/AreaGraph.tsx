import * as React from 'react';
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts';
import { Typography } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { GraphStore } from '../stores/graphStore';

interface Props {
  graphStore?: GraphStore;
}

@inject('graphStore')
@observer
export class AreaGraph extends React.Component<Props> {
  render() {
    return <React.Fragment>
      <Typography variant='headline' component='h1' align='center'>AREAGRAPH PAGE</Typography>
      <AreaChart width={600} height={400} data={this.props.graphStore.graphs[0].data}
           margin={{top: 10, right: 30, left: 0, bottom: 0}}>
       <CartesianGrid strokeDasharray='3 3'/>
       <XAxis dataKey='name'/>
       <YAxis/>
       <Tooltip/>
       <Area type='monotone' dataKey='uv' stroke='#82ca9d' fill='#82ca9d' />
     </AreaChart>
    </React.Fragment>;
  }
}