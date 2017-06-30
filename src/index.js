import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Login from './components/pages/Login';
import Page from './components/Page';
import User from './components/user/User'

const routes =
    <Route path={'/'} components={Page}>
        <IndexRedirect to="/login" />
        <Route path={'app'} component={App}>
            <Route path={'user'} component={User} />
        </Route>
        <Route path={'login'} components={Login} />
    </Route>;
ReactDOM.render(
  <Router history={hashHistory}>
      {routes}
  </Router>,
  document.getElementById('root')
);
