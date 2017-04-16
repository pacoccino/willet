import React, { PropTypes } from 'react';

import styles from './style.scss';

const OperationButton = ({ active, primary, secondary, onClick, label, disabled }) => (
  <div
    className={
      styles.container + ' ' +
      (active ? styles.activated : '') + ' ' +
      (disabled ? styles.disabled : '') + ' ' +
      (primary ? styles.primary : (secondary ? styles.secondary : ''))
    }
    onClick={!disabled && onClick}
  >
    {label}
  </div>
);


OperationButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default OperationButton;