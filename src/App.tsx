import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Main from './containers/Main';
import About from './pages/About';
import BarGraph from './pages/BarGraph';
import Chart from './components/Chart';
import MainMenu from './components/MainMenu';

const styles = {
  display: 'flex'
};

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
            <Route exact path='/bargraph' component={BarGraph} />
          </Grid>
        </Grid>
      </React.Fragment>
    </Router>;
  }
}