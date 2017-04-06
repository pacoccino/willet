import React, { PropTypes } from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { connect } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';

import Layout from '../components/views/Layout';
import MainView from '../containers/MainView';
import * as routes from '../constants/routes';

const RouterContainer = () =>
  <ConnectedRouter history={history}>
    <Layout>
      <Route
        component={MainView}
        path={routes.Root}
      />
      <Redirect from="*" to={routes.Root} />
    </Layout>
  </ConnectedRouter>;

RouterContainer.propTypes = {
};

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(RouterContainer);
