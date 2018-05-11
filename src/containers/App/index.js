import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Apollo
import { ApolloLink } from 'apollo-link';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloProvider } from 'react-apollo';

import '@atlaskit/css-reset/dist/bundle.css';

import Router from '../Router';


const hasSubscriptionOperation = ({ query: { definitions } }) =>
  definitions.some(
    ({ kind, operation }) =>
      kind === 'OperaPtionDefinition' && operation === 'subscription',
  );

const WSClient = new SubscriptionClient('ws://2c7517e2.ngrok.io/subscriptions', {
  reconnect: true
});

const HttpWSLink = ApolloLink.split(
  hasSubscriptionOperation,
  new WebSocketLink(WSClient),
  new HttpLink({ uri: 'http://2c7517e2.ngrok.io/graphql' })
);

const AuthLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('authToken');
  operation.setContext(context => ({
    ...context,
    headers: {
      ...context.headers,
      authorization: token || '',
    },
  }));

  return forward(operation);
});

const ApolloCache = new InMemoryCache();
const client = new ApolloClient({
  link: ApolloLink.from([
    AuthLink,
    HttpWSLink
  ]),
  cache: ApolloCache
});

// render main React component
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('app'));
};

render(Router);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('../Router', () => {
    render(Router);
  });
}
