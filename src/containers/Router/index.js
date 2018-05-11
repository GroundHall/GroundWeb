import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Loadable from 'react-loadable';
import Spinner from '@atlaskit/spinner';

const LoadableLogin = Loadable({
  loader: () => import('../Login'),
  loading: Spinner,
});

import Profile from '../Profile';

import Feed from '../Feed';

import NavigationLayoutRoute from '../../components/NavigationLayoutRoute';
import SlashRedirect from './SlashRedirect';

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <SlashRedirect>
        <Switch>
          <NavigationLayoutRoute path="/feed" component={Feed} />
          <NavigationLayoutRoute path="/user/:userId" component={Profile} />
        </Switch>
      </SlashRedirect>
      <Route exact path="/login" component={LoadableLogin} />
    </React.Fragment>
  </BrowserRouter>
);

export default Router;
