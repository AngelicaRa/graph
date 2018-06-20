import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { About, Login, Home } from './pages/';
import MainMenu from './components/MainMenu';
import { Provider, inject, observer } from 'mobx-react';
import stores from './stores';
import { Graph } from './components/Graph';
import { ChartType } from '../types/types';
import { LoginStore } from './stores/LoginStore';

export interface AppProps {
  loginStore?: LoginStore;
}

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

@inject('loginStore')
@observer
export default class App extends React.Component<AppProps, {}> {
  render() {
    return <Provider {...stores}>
    <Router>
    <React.Fragment>
      <Paper style={styles.app}>
        <MainMenu externalStyles={styles.menu}/>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/bargraph' render={() => <Graph type={ChartType.HISTOGRAM}/>}  />
        <Route path='/linegraph' render={() => <Graph type={ChartType.LINE_CHART}/>} />
        <Route path='/piegraph' render={() => <Graph type={ChartType.PIE_CHART}/>} />
        <Route path='/areagraph' render={() => <Graph type={ChartType.MULTILINE_CHART}/>} />
        <Route path='/Login' component={Login}/>
      </Paper>
    </React.Fragment>
    </Router>
    </Provider>;
  }
}