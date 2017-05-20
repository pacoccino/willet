import React, { PropTypes } from 'react';

import { OPERATIONS } from 'js/business/operations/action-creators';

import styles from './style.scss';

function Button({ op, label, sw, mode }) {
  return (
    <div
      onClick={() => sw(op)}
      className={`${styles.btn} ${mode === op ? styles.active : ''}`}
    >
      {label}
    </div>
  );
}

function ActionsMenu({ goToOperation, mode }) {
  function sw(m) {
    if(mode !== m) {
      goToOperation(m);
    }
  }
  return (
    <div className={styles.container}>
      <Button sw={sw} mode={mode} op={OPERATIONS.SEND} label="Send"/>
      <Button sw={sw} mode={mode} op={OPERATIONS.RECEIVE} label="Receive"/>
      <Button sw={sw} mode={mode} op={OPERATIONS.EXCHANGE} label="Exchange"/>
    </div>
  );
}

ActionsMenu.propTypes = {
  mode: PropTypes.string,
  goToOperation: PropTypes.func.isRequired,
};

export default ActionsMenu;
