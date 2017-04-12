import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';

import { selLoggedPublic, selLoggedPrivate } from 'js/business/account/selectors';

import { history } from './store';

import Layout from '../components/views/Layout';
import MainView from '../containers/MainView';
import RegisterView from '../containers/RegisterView';
import * as routes from '../constants/routes';

const RouterContainer = ({ loggedPublic }) =>
  <ConnectedRouter history={history}>
    <Layout>
      {
        loggedPublic ?
          <Route
            component={MainView}
            path={routes.Root}
          />
          :
          <Switch>
            <Route exact
              component={MainView}
              path={routes.Root}
            />
            <Route
              component={RegisterView}
              path={routes.Register}
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
