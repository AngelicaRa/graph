import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Main from './containers/Main';
import { About, BarGraph, LineGraph, PieGraph, AreaGraph } from './pages/';
import MainMenu from './components/MainMenu';

export default class App extends React.Component {
  render() {
    return <Router>
      <React.Fragment>
        <Grid container>
          <Grid item>
            <MainMenu />
          </Grid>
          <Grid item >
            <Route exact path='/' component={Main} />
            <Route path='/about' component={About} />
            <Route path='/bargraph' component={BarGraph} />
            <Route path='/linegraph' component={LineGraph} />
            <Route path='/piegraph' component={PieGraph} />
            <Route path='/areagraph' component={AreaGraph} />
          </Grid>
        </Grid>
      </React.Fragment>
    </Router>;
  }
}