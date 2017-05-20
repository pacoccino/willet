import React, { PropTypes } from 'react';

import { OPERATIONS } from 'js/business/operations/action-creators';

import styles from './style.scss';

function ActionsMenu({ goToOperation, mode }) {
  function sw(m) {
    if(mode !== m) {
      goToOperation(m);
    }
  }
  return (
    <div className={styles.container}>
      <div
        onClick={() => sw(OPERATIONS.SEND)}
        className={`${styles.btn} ${mode === OPERATIONS.SEND ? styles.active : ''}`}
      >
        Send
      </div>
      <div
        onClick={() => sw(OPERATIONS.RECEIVE)}
        className={`${styles.btn} ${mode === OPERATIONS.RECEIVE ? styles.active : ''}`}
      >
        Receive
      </div>
      <div
        onClick={() => sw(OPERATIONS.EXCHANGE)}
        className={`${styles.btn} ${mode === OPERATIONS.EXCHANGE ? styles.active : ''}`}
      >
        Exchange
      </div>
    </div>
  );
}

ActionsMenu.propTypes = {
  mode: PropTypes.string,
  goToOperation: PropTypes.func.isRequired,
};

export default ActionsMenu;
