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

function ActionsMenu({ goToOperation, mode }) {
  return (
    <div style={styles.container}>
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.EXCHANGE)}
        activated={mode === OPERATIONS.EXCHANGE}
        disabled={mode === OPERATIONS.EXCHANGE}
        label="Exchange"
      />
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.SEND)}
        activated={mode === OPERATIONS.SEND}
        disabled={mode === OPERATIONS.SEND}
        label="Send"
      />
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.RECEIVE)}
        activated={mode === OPERATIONS.RECEIVE}
        disabled={mode === OPERATIONS.RECEIVE}
        label="Receive"
      />
    </div>
  );
}

ActionsMenu.propTypes = {
  mode: PropTypes.string,
  goToOperation: PropTypes.func.isRequired,
};

export default ActionsMenu;
