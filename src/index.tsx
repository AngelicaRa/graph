import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import stores from './stores';

ReactDOM.render(
  (<Provider {...stores}><App /></Provider>),
  document.getElementById('app'));
