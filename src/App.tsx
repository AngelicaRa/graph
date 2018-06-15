import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Main from './containers/Main';
import { About, FakeLogin } from './pages/';
import MainMenu from './components/MainMenu';
import { Provider } from 'mobx-react';
import stores from './stores';
import { Graph } from './components/Graph';
import { ChartType } from '../types/types';


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
        <Route path='/bargraph' render={() => <Graph type={ChartType.HISTOGRAM}/>}  />
        <Route path='/linegraph' render={() => <Graph type={ChartType.LINE_CHART}/>} />
        <Route path='/piegraph' render={() => <Graph type={ChartType.PIE_CHART}/>} />
        <Route path='/areagraph' render={() => <Graph type={ChartType.MULTILINE_CHART}/>} />
        <Route path='/fakeLogin' component={FakeLogin} />
      </Paper>
    </React.Fragment>
    </Router>
    </Provider>;
  }
}