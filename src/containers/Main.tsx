import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';
import MainMenu from '../components/MainMenu';

export default class Main extends React.Component {
  render() {
    return <Paper>
      <Typography variant='headline' component='h1' align='center'>MAIN COMPONENT</Typography>
    </Paper>;
  }
}