import React, { PropTypes } from 'react';

import { OPERATIONS } from 'js/business/operations/action-creators';
import OperationButton from 'js/components/ui/OperationButton';

import styles from './style.scss';

function ActionsMenu({ goToOperation, mode }) {
  return (
    <div className={styles.container}>
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.EXCHANGE)}
        active={mode === OPERATIONS.EXCHANGE}
        disabled={mode === OPERATIONS.EXCHANGE}
        label="Exchange"
        className={styles.nomargin}
      />
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.SEND)}
        active={mode === OPERATIONS.SEND}
        disabled={mode === OPERATIONS.SEND}
        label="Send"
      />
      <OperationButton
        onClick={() => goToOperation(OPERATIONS.RECEIVE)}
        active={mode === OPERATIONS.RECEIVE}
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
