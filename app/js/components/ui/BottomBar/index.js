import React from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import styles from './style.scss';

export default function BottomBar() {
  return (
    <div className={styles.container}>
      <a href="https://stellar.org" target="_blank">stellar.org</a>
      <a href="https://api.willet.io/doc" target="_blank">API</a>
      <Link to={routes.About}>About us</Link>
    </div>
  );
}
