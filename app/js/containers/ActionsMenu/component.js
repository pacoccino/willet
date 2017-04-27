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
        active={mode === OPERATIONS.EXCHANGE}
        disabled={mode === OPERATIONS.EXCHANGE}
        label="Invest"
      />
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.SEND)}
        active={mode === OPERATIONS.SEND}
        disabled={mode === OPERATIONS.SEND}
        label="Withdraw"
      />
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.RECEIVE)}
        active={mode === OPERATIONS.RECEIVE}
        disabled={mode === OPERATIONS.RECEIVE}
        label="Deposit"
      />
    </div>
  );
}

ActionsMenu.propTypes = {
  mode: PropTypes.string,
  goToOperation: PropTypes.func.isRequired,
};

export default ActionsMenu;
