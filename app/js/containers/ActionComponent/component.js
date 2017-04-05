import React, { PropTypes } from 'react';

import ExchangeComponent from '../ExchangeComponent';
import SendComponent from '../SendComponent';
import ReceiveComponent from '../ReceiveComponent';

function Component({}) {
  return (
    <div>
      <ExchangeComponent/>
      <SendComponent/>
      <ReceiveComponent/>
    </div>
  );
}

Component.propTypes = {
};

export default Component;
