import React, { PropTypes } from 'react';

import { OPERATIONS } from 'js/business/operations/action-creators';

import ExchangeComponent from '../ExchangeComponent';
import SendComponent from '../SendComponent';
import ReceiveComponent from '../ReceiveComponent';

function ActionComponent({ actionMode }) {
  let actionComponent = null;
  switch (actionMode) {
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

ActionComponent.propTypes = {
  actionMode: PropTypes.string,
};

export default ActionComponent;
