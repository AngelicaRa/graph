import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';
import MainMenu from '../components/MainMenu';

export default class Main extends React.Component {
  render() {
    return <Paper>
      <Typography variant='title'>MAIN COMPONENT</Typography>
    </Paper>;
  }
}