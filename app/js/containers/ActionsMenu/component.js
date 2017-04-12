import React, { PropTypes } from 'react';

import { OPERATIONS } from 'js/business/operations/action-creators';
import OperationButton from 'js/components/ui/OperationButton';

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
      <OperationButton
        onClick={() => setActionMode(OPERATIONS.EXCHANGE)}
        disabled={actionMode === OPERATIONS.EXCHANGE}
        label="Exchange"
      />
      <OperationButton
        onClick={() => setActionMode(OPERATIONS.SEND)}
        disabled={actionMode === OPERATIONS.SEND}
        label="Send"
      />
      <OperationButton
        onClick={() => setActionMode(OPERATIONS.RECEIVE)}
        disabled={actionMode === OPERATIONS.RECEIVE}
        label="Receive"
      />
    </div>
  );
}

ActionsMenu.propTypes = {
  actionMode: PropTypes.string,
  setActionMode: PropTypes.func.isRequired,
};

export default ActionsMenu;
