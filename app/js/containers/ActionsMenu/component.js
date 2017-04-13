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

function ActionsMenu({ goToOperation, actionMode }) {
  return (
    <div style={styles.container}>
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.EXCHANGE)}
        disabled={actionMode === OPERATIONS.EXCHANGE}
        label="Exchange"
      />
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.SEND)}
        disabled={actionMode === OPERATIONS.SEND}
        label="Send"
      />
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.RECEIVE)}
        disabled={actionMode === OPERATIONS.RECEIVE}
        label="Receive"
      />
    </div>
  );
}

ActionsMenu.propTypes = {
  actionMode: PropTypes.string,
  goToOperation: PropTypes.func.isRequired,
};

export default ActionsMenu;
