import React, { PropTypes } from 'react';

import ExchangeComponent from '../ExchangeComponent';
import SendComponent from '../SendComponent';
import ReceiveComponent from '../ReceiveComponent';

import { ACTION_MODES } from 'js/constants/misc';

function ActionComponent({ actionMode }) {
  let actionComponent = null;
  switch(actionMode) {
    case ACTION_MODES.EXCHANGE: {
      actionComponent = <ExchangeComponent/>;
      break;
    }
    case ACTION_MODES.SEND: {
      actionComponent = <SendComponent/>;
      break;
    }
    case ACTION_MODES.RECEIVE: {
      actionComponent = <ReceiveComponent/>;
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
