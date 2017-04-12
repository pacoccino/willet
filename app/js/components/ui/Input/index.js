import React from 'react';
import styles from './style.scss';

const Input = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={styles.container}>
      <div className={styles.topC}>
    <span
      className={styles.label}
    >
      {label}
    </span>
    <span
      className={styles.error}
    >
      {touched && (error || warning)}
    </span>
      </div>
    <input
      {...input}
      placeholder={label}
      type={type}
      className={styles.input}
    />
  </div>
);
//      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}

export default Input;