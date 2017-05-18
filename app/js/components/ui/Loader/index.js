import React from 'react';

import styles from './style.scss';

export default function Loader() {
  return (
    <div className={styles.spinner}>
      <div className={styles.rect1} />
      <div className={styles.rect2} />
      <div className={styles.rect3} />
      <div className={styles.rect4} />
      <div className={styles.rect5} />
    </div>
  );
}
