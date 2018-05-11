import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Page from '@atlaskit/page';
import Navigation from '../../containers/Navigation';

const propTypes = {
  component: PropTypes.func.isRequired
};

const NavigationLayoutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Page navigation={<Navigation />}>
        <Component {...props} />
      </Page>
      )}
  />
);

NavigationLayoutRoute.propTypes = propTypes;

export default NavigationLayoutRoute;
