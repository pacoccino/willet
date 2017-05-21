import React from 'react';
import styles from './style.scss';

const Input = ({ input, label, placeholder, type, meta: { touched, error, warning } = {} }) => (
  <div className={styles.container}>
    <div className={styles.topC}>
      <span className={styles.label}>
        {label}
      </span>
      <span className={styles.error}>
        {touched && (error || warning)}
      </span>
    </div>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={styles.input}
    />
  </div>
);
//      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}

Input.propTypes = {
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  input: React.PropTypes.object.isRequired,
  white: React.PropTypes.bool,
};

export default Input;
