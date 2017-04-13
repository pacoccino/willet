import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.scss';

const cx = classnames.bind(styles);
const Button = ({ onClick, disabled, className }) => (
  <div
    className={cx({
      [className]: className,
      container: !disabled,
      disabledC: disabled,
    })}
    onClick={onClick}>
    o
  </div>
);

Button.propTypes = {
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
};

export default Button;