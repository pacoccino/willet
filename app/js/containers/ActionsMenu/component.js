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

function ActionsMenu({ setActionMode, actionMode }) {
  return (
    <div style={styles.container}>
      <button
        onClick={() => setActionMode(ACTION_MODES.EXCHANGE)}
        disabled={actionMode === ACTION_MODES.EXCHANGE}
      >
        Exchange
      </button>
      <button
        onClick={() => setActionMode(ACTION_MODES.SEND)}
        disabled={actionMode === ACTION_MODES.SEND}
      >
        Send
      </button>
      <button
        onClick={() => setActionMode(ACTION_MODES.RECEIVE)}
        disabled={actionMode === ACTION_MODES.RECEIVE}
      >
        Receive
      </button>
    </div>
  );
}

ActionsMenu.propTypes = {
  actionMode: PropTypes.string,
  setActionMode: PropTypes.func.isRequired,
};

export default ActionsMenu;
