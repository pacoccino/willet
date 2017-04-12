import React, { PropTypes } from 'react';

import { OPERATIONS } from 'js/business/operations/action-creators';

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
        onClick={() => setActionMode(OPERATIONS.EXCHANGE)}
        disabled={actionMode === OPERATIONS.EXCHANGE}
      >
        Exchange
      </button>
      <button
        onClick={() => setActionMode(OPERATIONS.SEND)}
        disabled={actionMode === OPERATIONS.SEND}
      >
        Send
      </button>
      <button
        onClick={() => setActionMode(OPERATIONS.RECEIVE)}
        disabled={actionMode === OPERATIONS.RECEIVE}
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
