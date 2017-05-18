import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';

import { selLoggedPublic, selLoggedPrivate } from 'js/business/account/selectors';

import { history } from './store';
import * as routes from '../constants/routes';

import Layout from '../components/views/Layout';
import WelcomeView from '../components/views/WelcomeView';
import AboutView from '../components/views/AboutView';
import WalletsView from '../containers/WalletsView';
import OperationView from '../containers/OperationView';
import RegisterView from '../containers/RegisterView';
import LoginView from '../containers/LoginView';
import AccountView from '../containers/AccountView';

import { OPERATIONS } from 'js/business/operations/action-creators';

const RouterContainer = ({ loggedPublic }) =>
  <ConnectedRouter history={history}>
    <Layout>
      {
        loggedPublic ?
          <div>
            <Switch>
              <Route
                exact
                component={WalletsView}
                path={routes.Root}
              />
              <Route
                component={AccountView}
                path={routes.Account}
              />
              <Route
                component={() => <OperationView mode={OPERATIONS.SEND} />}
                path={routes.Operation_G(OPERATIONS.SEND)}
              />
              <Route
                component={() => <OperationView mode={OPERATIONS.EXCHANGE} />}
                path={routes.Operation_G(OPERATIONS.EXCHANGE)}
              />
              <Route
                component={() => <OperationView mode={OPERATIONS.RECEIVE} />}
                path={routes.Operation_G(OPERATIONS.RECEIVE)}
              />
              <Route
                exact
                component={AboutView}
                path={routes.About}
              />
              <Redirect to={routes.Root} />
            </Switch>
          </div>
          :
          <Switch>
            <Route
              exact
              component={WelcomeView}
              path={routes.Root}
            />
            <Route
              exact
              component={AboutView}
              path={routes.About}
            />
            <Route
              component={RegisterView}
              path={routes.Register}
            />
            <Route
              component={LoginView}
              path={routes.Login}
            />
            <Redirect from="*" to={routes.Root} />
          </Switch>
      }
    </Layout>
  </ConnectedRouter>;

const mapStateToProps = state => ({
  loggedPublic: selLoggedPublic(state),
  loggedPrivate: selLoggedPrivate(state),
});

export default connect(mapStateToProps, null)(RouterContainer);
