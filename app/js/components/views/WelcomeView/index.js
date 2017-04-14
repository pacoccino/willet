import React, { Component } from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import config from 'js/config';

import styles from './style.scss';

class WelcomeScreen extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Willet</span>
          <span className={styles.subtitle}>The Intergalactic Wallet</span>
          {
            config.DEMO ?
              <div>
                <p className={styles.bottomText}>Coming soon...</p>
              </div>
                :
              <div>
                <p className={styles.bottomText}>Launch the experience</p>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default WelcomeScreen;
