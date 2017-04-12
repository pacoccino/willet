import React from 'react';

import styles from './style.scss';

const OperationButton = ({ onClick, label, disabled }) => (
  <div
    className={disabled ? styles.disabledContainer : styles.container}
    onClick={onClick}
  >
    {label}
  </div>
);

export default OperationButton;