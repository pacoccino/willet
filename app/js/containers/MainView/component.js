import React, { PropTypes } from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import BalancesViewer from '../BalancesViewer';
import ActionsMenu from '../ActionsMenu';

const styles = {
  container: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function MainView({ loggedPrivate, loggedPublic }) {
  const offlineView = (
    <div>
      <Link to={routes.Register}>Register</Link>
    </div>
  );
  const publicView = (
    <div>
      <BalancesViewer />
    </div>
  );
  const privateView = (
    <div>
      <BalancesViewer />
      <ActionsMenu />
    </div>
  );
  const loggedView = loggedPrivate ? privateView : publicView;

  return (loggedPublic ? loggedView : offlineView);
}

MainView.propTypes = {
  loggedPublic: PropTypes.bool,
  loggedPrivate: PropTypes.bool,
};

export default MainView;
