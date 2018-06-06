import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';
import MainMenu from '../components/MainMenu';

export class About extends React.Component {
  render() {
    return <Paper>
      <Typography variant='title'>ABOUT COMPONENT</Typography>
    </Paper>;
  }
}