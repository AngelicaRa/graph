import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
{name: 'Group C', value: 300}, {name: 'Group D', value: 200}];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline='central'>
    {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export class PieGraph extends React.Component {
  render() {
    return <React.Fragment>
      <Typography variant='headline' component='h1' align='center'>PIE-GRAPH PAGE</Typography>
      <PieChart width={180} height={180} >
      <Pie
      dataKey = 'value'
      data={data}
      cx={80}
      cy={80}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill='#8884d8'
      >
      {
        data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
      }
      </Pie>
      </PieChart>
    </React.Fragment>;
  }
}