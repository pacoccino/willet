import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';

import { selLoggedPublic, selLoggedPrivate } from 'js/business/account/selectors';

import { history } from './store';

import Layout from '../components/views/Layout';
import MainView from '../containers/MainView';
import RegisterView from '../containers/RegisterView';
import AccountView from '../containers/AccountView';
import * as routes from '../constants/routes';
import TopMenu from 'js/components/ui/TopMenu';

const RouterContainer = ({ loggedPublic }) =>
  <ConnectedRouter history={history}>
    <Layout>
      {
        loggedPublic ?
          <div>
            <TopMenu />
            <Switch>
              <Route exact
                     component={MainView}
                     path={routes.Root}
              />
              <Route
                component={AccountView}
                path={routes.Account}
              />
            </Switch>
          </div>
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
