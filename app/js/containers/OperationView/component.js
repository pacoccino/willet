import React, { PropTypes } from 'react';

import { OPERATIONS } from 'js/business/operations/action-creators';

import ExchangeComponent from '../ExchangeComponent';
import SendComponent from '../SendComponent';
import ReceiveComponent from '../ReceiveComponent';
import LaunchedOperation from '../LaunchedOperation';

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
    <div>
      {actionComponent}
    </div>
  );
}

OperationView.propTypes = {
  mode: PropTypes.string,
};

export default OperationView;
