import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from '../client/components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ProfilePage from './components/ProfilePage';
import EditUserForm from './components/EditUserForm';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import requireAuth from './components/requireAuth';
import './styles/style.css';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingPage}></IndexRoute>
          <Route path="login" component={LoginForm}></Route>
          <Route path="signup" component={SignupForm}></Route>
          <Route path="edit" component={requireAuth(EditUserForm)}></Route>
          <Route path="profile" component={requireAuth(ProfilePage)}></Route>
          <Route path="dashboard" component={requireAuth(Dashboard)}></Route>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
