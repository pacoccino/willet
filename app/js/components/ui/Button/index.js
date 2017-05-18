import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.scss';
import OkButton from 'styles/icons/button-ok.svg';

const cx = classnames.bind(styles);
const Button = ({ onClick, disabled, className }) => (
  <div
    className={cx({
      [className]: className,
      container: !disabled,
      disabledC: disabled,
    })}
    onClick={!disabled && onClick}
  >
    <img src={OkButton} className={styles.icon} />
  </div>
);

Button.propTypes = {
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
};

export default Button;
