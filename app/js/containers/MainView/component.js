import React, { PropTypes } from 'react';

import AccountLoggerPublic from '../AccountLoggerPublic';
import AccountLoggerPrivate from '../AccountLoggerPrivate';
import BalancesViewer from '../BalancesViewer';
import ActionsMenu from '../ActionsMenu';
import ActionComponent from '../ActionComponent';

const styles = {
  container: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function Component({ loggedPrivate, loggedPublic }) {
  const offlineView = (
    <div>
      <AccountLoggerPublic/>
    </div>
  );
  const publicView = (
    <div>
      <AccountLoggerPublic/>
      <BalancesViewer/>
      <AccountLoggerPrivate/>
    </div>
  );
  const privateView = (
    <div>
      <AccountLoggerPublic/>
      <BalancesViewer/>
      <AccountLoggerPrivate/>
      <ActionsMenu/>
      <ActionComponent/>
    </div>
  );

  return (
    <div style={styles.container}>
      {
        loggedPublic ?
          (
            loggedPrivate ? privateView : publicView
          )
          : offlineView
      }
    </div>
  );
}

Component.propTypes = {
  loggedPublic: PropTypes.bool,
  loggedPrivate: PropTypes.bool,
};

export default Component;
