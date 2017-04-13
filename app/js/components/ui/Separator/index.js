import React, { PropTypes } from 'react';

import styles from './style.scss';

export default function Separator({ label }) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{label}</span>
    </div>
  );
}

Separator.propTypes = {
  label: PropTypes.string.isRequired,
};