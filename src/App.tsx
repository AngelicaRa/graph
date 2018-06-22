import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { About, Login, Home, LoginForm } from './pages/';
import MainMenu from './components/MainMenu';
import { Provider, inject, observer } from 'mobx-react';
import stores from './stores';
import { Graph } from './components/Graph';
import Desarrollo from './components/Desarrollo';
import { ChartType } from '../types/types';
import { LoginStore } from './stores/LoginStore';
import { GraphStore } from './stores/graphStore';

export interface AppProps {
  loginStore?: LoginStore;
  graphStore?: GraphStore;
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

@inject('loginStore', 'graphStore')
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
        <Route path='/bargraph' render={() => this.props.graphStore.graphs ? <Graph type={ChartType.HISTOGRAM}/> : <Desarrollo />}  />
        <Route path='/linegraph' render={() => this.props.graphStore.graphs ?  <Graph type={ChartType.LINE_CHART}/> : <Desarrollo />} />
        <Route path='/piegraph' render={() => this.props.graphStore.graphs ?  <Graph type={ChartType.MULTILINE_CHART}/> : <Desarrollo />} />
        <Route path='/areagraph' render={() => this.props.graphStore.graphs ?  <Graph type={ChartType.PIE_CHART}/> : <Desarrollo />} />
        <Route path='/login' component={Login}/>
      </Paper>
    </React.Fragment>
    </Router>
    </Provider>;
  }
}