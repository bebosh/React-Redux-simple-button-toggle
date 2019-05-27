import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={ createStore(reducers)}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);

serviceWorker.unregister();
