import * as React from 'react';
import { Typography } from '@material-ui/core';

export class LineGraph extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <React.Fragment>
      <Typography variant='headline' component='h1' align='center'>LINE GRAPH PAGE</Typography>
    </React.Fragment>;
  }
}