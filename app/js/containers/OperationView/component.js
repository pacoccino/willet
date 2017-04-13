import React, { PropTypes } from 'react';

import { OPERATIONS } from 'js/business/operations/action-creators';

import styles from './style.scss';

import ExchangeComponent from '../ExchangeComponent';
import SendComponent from '../SendComponent';
import ReceiveComponent from '../ReceiveComponent';
import LaunchedOperation from '../LaunchedOperation';
import ActionsMenu from '../ActionsMenu';

function OperationView({ mode, operationLaunched }) {
  if(operationLaunched) {
    return <LaunchedOperation />;
  }
  let actionComponent = null;
  switch (mode) {
    case OPERATIONS.EXCHANGE: {
      actionComponent = <ExchangeComponent />;
      break;
    }
    case OPERATIONS.SEND: {
      actionComponent = <SendComponent />;
      break;
    }
    case OPERATIONS.RECEIVE: {
      actionComponent = <ReceiveComponent />;
      break;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {actionComponent}
      </div>
      <div className={styles.actionsContainer}>
        <ActionsMenu mode={mode} />
      </div>
    </div>
  );
}

OperationView.propTypes = {
  mode: PropTypes.string,
};

export default OperationView;
