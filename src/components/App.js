/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import publications from '../publications.json';
import Loading from './Loading/Loading';
import routes from '../routes';

const ReaderLoadable = Loadable({
  loader: () => import('./Reader/Reader' /* webpackChunkName: 'reader' */),
  loading: Loading,
  delay: 100,
  timeout: 3000,
});

const App = () => (
  <>
    <Switch>
      <Route
        path={routes.HOME}
        render={props => <ReaderLoadable {...props} items={publications} />}
      />
      <Redirect to={routes.HOME_FIRST} />
    </Switch>
  </>
);

export default App;
