import React, { Component } from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import config from 'js/config';

import styles from './style.scss';
import ArrowDown from 'images/arrow-down.png';

class WelcomeScreen extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Willet</span>
          <span className={styles.alpha}>Alpha</span>
        </div>
        <span className={styles.subtitle}>The Intergalactic Wallet</span>
        {
            config.DEMO ?
              <div>
                <p className={styles.bottomText}>Coming soon...</p>
              </div>
                :
              <Link to={routes.Login}>
                <p className={styles.bottomText}>
                  Launch the experience <br />
                  <img className={`${styles.arrowDown} ${styles.animationOut}`} src={ArrowDown} />
                </p>
              </Link>
          }
      </div>
    );
  }
}

export default WelcomeScreen;
