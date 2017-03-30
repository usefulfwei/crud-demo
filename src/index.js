/**
 * Created by jwdn on 2017/3/30.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './store'

const store = configureStore();

import routes from './routes'

ReactDOM.render((
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
),document.getElementById('app'));