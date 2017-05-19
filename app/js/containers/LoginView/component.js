import React, { PropTypes } from 'react';

import OperationButton from 'js/components/ui/OperationButton';
import LoginSeed from '../LoginSeed';
import LoginCredentials from '../LoginCredentials';

import styles from './style.scss';

class LoginView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  switchHelp(index) {
    this.setState(state => ({
      ...state,
      [`helps_${index}`]: !state[`helps_${index}`],
    }));
  }

  render() {
    const {
      goToRegister,
    } = this.props;

    return (
      <div className={styles.container}>
        <p className={styles.title}>
          Sign in
        </p>
        <p className={styles.subtitle}>
          Login with credentials
          <span className={styles.what} onClick={() => this.switchHelp(0)}>?</span>
        </p>
        {this.state['helps_0'] && <p className={styles.description}>
          Login with willet username/password method.
          <br/>
          Your username will be resolved by our federation server, and the seed will be decoded with your password from your account data on the Stellar blockchain.
        </p>}
        <LoginCredentials />
        <p className={styles.separator}>
          Or
        </p>
        <p className={styles.subtitle}>
          Login with stellar secret key
          <span className={styles.what} onClick={() => this.switchHelp(1)}>?</span>
        </p>
        {this.state['helps_1'] && <p className={styles.description}>
          You will be logged in to willet with any valid Stellar account seed.
          <br/>
          The seed will only be used to open your account and will not be sent to our servers.
        </p>}
        <LoginSeed />
        <p className={styles.register}>
          Don't have an account yet ?
        </p>
        <OperationButton
          onClick={goToRegister}
          label="Sign up"
          primary active
        />
      </div>
    );
  }
}

LoginView.propTypes = {
  goToRegister: PropTypes.func.isRequired,
};

export default LoginView;
