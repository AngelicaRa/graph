import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Main from './containers/Main';
import { About, BarGraph, LineGraph, PieGraph, AreaGraph } from './pages/';
import MainMenu from './components/MainMenu';
import { Provider } from 'mobx-react';
import stores from './stores';

export default class App extends React.Component {
  render() {
    return <Provider {...stores}>
      <Router>
        <React.Fragment>
          <Grid container spacing={8}>
            <Grid item md={3}></Grid>
            <Grid item md={1}>
              <MainMenu />
            </Grid>
            <Grid item md={5}>
              <Route exact path='/' component={Main} />
              <Route path='/about' component={About} />
              <Route path='/bargraph' component={BarGraph} />
              <Route path='/linegraph' component={LineGraph} />
              <Route path='/piegraph' component={PieGraph} />
              <Route path='/areagraph' component={AreaGraph} />
            </Grid>
          </Grid>
          <Grid item md={3}></Grid>
        </React.Fragment>
      </Router>
    </Provider>;
  }
}