import React, { Component } from 'react';

import styles from './style.scss';

class WelcomeScreen extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Willet</h1>
        <h2 className={styles.subtitle}>The intergalactic wallet</h2>

        <div className={styles.goto}>
          <p className={styles.launch}>Launch the experience</p>
          <div className={styles.arrow}>\i/</div>
        </div>
      </div>
    );
  }
}

export default WelcomeScreen;
