import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Main from './containers/Main';
import { About, BarGraph, LineGraph, PieGraph, AreaGraph } from './pages/';
import MainMenu from './components/MainMenu';
import { Provider } from 'mobx-react';
import stores from './stores';

const styles = {
  app: {
    width: '800px',
    margin: 'auto',
    display: 'flex'
  },
  menu: {
    width: 'fit-content'
  }
};

export default class App extends React.Component {
  render() {
    return <Provider {...stores}>
    <Router>
    <React.Fragment>
      <Paper style={styles.app}>
        <MainMenu externalStyles={styles.menu}/>
        <Route exact path='/' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/bargraph' component={BarGraph} />
        <Route path='/linegraph' component={LineGraph} />
        <Route path='/piegraph' component={PieGraph} />
        <Route path='/areagraph' component={AreaGraph} />
      </Paper>
    </React.Fragment>
    </Router>
    </Provider>;
  }
}