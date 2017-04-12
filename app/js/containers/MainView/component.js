import React, { PropTypes } from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import AccountLoggerPublic from '../AccountLoggerPublic';
import AccountLoggerPrivate from '../AccountLoggerPrivate';
import BalancesViewer from '../BalancesViewer';
import ActionsMenu from '../ActionsMenu';
import ActionComponent from '../OperationView';
import LaunchedOperation from '../LaunchedOperation';

const styles = {
  container: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function MainView({ account, loggedPrivate, loggedPublic, operationLaunched }) {
  const offlineView = (
    <div>
      <AccountLoggerPublic />
      <Link to={routes.Register}>Register</Link>
    </div>
  );
  const publicView = (
    <div>
      <AccountLoggerPublic />
      <BalancesViewer />
      <AccountLoggerPrivate />
    </div>
  );
  const privateView = (
    <div>
      <AccountLoggerPublic />
      <BalancesViewer />
      <AccountLoggerPrivate />
      {
        account &&
        (
          operationLaunched ?
            <LaunchedOperation />
            :
            <div>
              <ActionsMenu />
              <OperationView />
            </div>
        )
      }
    </div>
  );
  const loggedView = loggedPrivate ? privateView : publicView;

  return (
    <div style={styles.container}>
      {
        loggedPublic ?
          loggedView : offlineView
      }
    </div>
  );
}

MainView.propTypes = {
  account: PropTypes.object,
  loggedPublic: PropTypes.bool,
  loggedPrivate: PropTypes.bool,
  operationLaunched: PropTypes.bool,
};

export default MainView;
