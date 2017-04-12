import React, { Component } from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import styles from './style.scss';

class WelcomeScreen extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Willet</span>
          <span className={styles.subtitle}>The Intergalactic Wallet</span>
        </div>

        <div className={styles.gotoContainer}>
          <span className={styles.text}>Launch the experience</span>
          <span className={styles.arrow}>\/</span>
        </div>
        <div className={styles.aboutContainer}>
          <Link to={routes.About}>
            <span className={styles.text}>About us</span>
          </Link>
        </div>
        <div className={styles.loginContainer}>
          <Link to={routes.Login}>
            <span className={styles.text}>Sign up / Sign In</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default WelcomeScreen;
