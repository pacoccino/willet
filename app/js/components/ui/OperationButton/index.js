import React, { PropTypes } from 'react';

import styles from './style.scss';

const OperationButton = ({ activated, onClick, label, disabled }) => (
  <div
    className={
      styles.container + ' ' +
      (activated ? styles.activated : '') + ' '
    }
    onClick={!disabled && onClick}
  >
    {label}
  </div>
);


OperationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  activated: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default OperationButton;