import React from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import styles from './style.scss';

export default function BottomBar() {
  return (
    <div className={styles.container}>
      <Link to={routes.About}>About us</Link>
    </div>
  );
}
