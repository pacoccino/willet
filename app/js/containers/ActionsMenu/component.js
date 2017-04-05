import React, { PropTypes } from 'react';

import { ACTION_MODES } from 'js/constants/misc';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function Component({ setActionMode }) {
  return (
    <div style={styles.container}>
      <button onClick={() => setActionMode(ACTION_MODES.EXCHANGE)}>Exchange</button>
      <button onClick={() => setActionMode(ACTION_MODES.SEND)}>Send</button>
      <button onClick={() => setActionMode(ACTION_MODES.RECEIVE)}>Receive</button>
    </div>
  );
}

Component.propTypes = {
  setActionMode: PropTypes.func.isRequired,
};

export default Component;
