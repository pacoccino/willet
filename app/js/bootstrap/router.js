import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';

import { selLoggedPublic, selLoggedPrivate } from 'js/business/account/selectors';

import { history } from './store';

import Layout from '../components/views/Layout';
import WelcomeView from '../components/views/WelcomeView';
import AboutView from '../components/views/AboutView';
import MainView from '../containers/MainView';
import OperationView from '../containers/OperationView';
import RegisterView from '../containers/RegisterView';
import LoginView from '../containers/LoginView';
import AccountView from '../containers/AccountView';
import * as routes from '../constants/routes';
import TopMenu from 'js/components/ui/TopMenu';

import { OPERATIONS } from 'js/business/operations/action-creators';

const RouterContainer = ({ loggedPublic }) =>
  <ConnectedRouter history={history}>
    <Layout>
      {
        loggedPublic ?
          <div>
            <TopMenu />
            <Switch>
              <Route
                exact
                component={MainView}
                path={routes.Root}
              />
              <Route
                component={AccountView}
                path={routes.Account}
              />
              <Route
                component={MainView}
                path={routes.Wallet}
              />
              <Route
                component={OperationView}
                path={routes.Send}
                mode={OPERATIONS.SEND}
              />
              <Route
                component={OperationView}
                path={routes.Exchange}
                mode={OPERATIONS.EXCHANGE}
              />
              <Route
                component={OperationView}
                path={routes.Receive}
                mode={OPERATIONS.RECEIVE}
              />
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
          </Switch>
      }
      <Redirect from="*" to={routes.Root} />
    </Layout>
  </ConnectedRouter>;

const mapStateToProps = state => ({
  loggedPublic: selLoggedPublic(state),
  loggedPrivate: selLoggedPrivate(state),
});

export default connect(mapStateToProps, null)(RouterContainer);
