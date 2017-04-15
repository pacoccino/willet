import React, { PropTypes } from 'react';

import styles from './style.scss';

const OperationButton = ({ active, primary, onClick, label, disabled }) => (
  <div
    className={
      styles.container + ' ' +
      (active ? styles.activated : '') + ' ' +
      (disabled ? styles.disabled : '') + ' ' +
      (primary ? styles.primary : '') + ' '
    }
    onClick={!disabled && onClick}
  >
    {label}
  </div>
);


OperationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
};

export default OperationButton;