import React, { PropTypes } from 'react';

import styles from './style.scss';

const OperationButton = ({ active, primary, secondary, onClick, label, disabled, fluid }) => (
  <div
    className={
      `${styles.container} ${
      active ? styles.activated : ''} ${
      disabled ? styles.disabled : ''} ${
      fluid ? styles.fluid : ''} ${
      primary ? styles.primary : (secondary ? styles.secondary : '')}`
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
  fluid: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default OperationButton;
