import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';

export class About extends React.Component {
  render() {
    return <Paper>
      <Typography variant='headline' component='h1' align='center'>ABOUT COMPONENT</Typography>
    </Paper>;
  }
}