import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  withRouter
} from 'react-router-dom';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
};

const SlashRedirect = ({ location: { pathname }, children }) => {
  if (!localStorage.getItem('authToken')) {
    return <Redirect to="/login" />;
  } else if (pathname === '/' || pathname === '/login') {
    return <Redirect to="/feed" />;
  }
  return children;
};

SlashRedirect.propTypes = propTypes;

export default withRouter(SlashRedirect);
