import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import Input from 'js/components/ui/Input';
import Loader from 'js/components/ui/Loader';
import OperationButton from 'js/components/ui/OperationButton';

import styles from './style.scss';


class RegisterView extends React.Component {
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
      handleSubmit,
      pristine,
      submitting,
      submitSucceeded,
      submitFailed,
      goToLogin,
      invalid,
    } = this.props;

    if (submitting) {
      return (
        <div className={styles.container}>
          <Loader />
          <p className={styles.message}>Creating account ...</p>
          <p className={styles.message}>This may take some time, please leave this tab open.</p>
        </div>
      );
    }
    if (submitSucceeded) {
      return (
        <div className={styles.container}>
          <p className={styles.message}>Account successfully created !</p>
          <p className={styles.message}>Please take care of your Username and Password, as there is no way to recover them for the moment.</p>
          <OperationButton
            onClick={goToLogin}
            label="Sign in"
            primary
          />
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <p className={styles.title}>
          Sign up
        </p>
        <p className={styles.subtitle}>
          Register new account
          <span className={styles.what} onClick={() => this.switchHelp(0)}>?</span>
        </p>
        {this.state['helps_0'] && <p className={styles.description}>
          Fill this form to register an account on Willet.
          <br/>
          You will then be able to connect to Willet with easy to memorize username and password instead of your account seed.
          <br/>
          Due to financial reasons, you must already own an existing Stellar account.
          <br/>
          Your account must hold at least 150 Lumens to be usable on Willet.
        </p>}
        <form onSubmit={handleSubmit}>
          <Field
            name="username"
            component={Input}
            type="text"
            label="Username"
            placeholder="wilson"
          />
          <Field
            name="password"
            component={Input}
            type="password"
            label="Password"
            placeholder="****"
          />
          <Field
            name="password_bis"
            component={Input}
            type="password"
            label="Password (again)"
            placeholder="****"
          />
          <span className={styles.whatSeed} onClick={() => this.switchHelp(1)}>Why ?</span>
          {this.state['helps_1'] && <p className={styles.description}>
            We need your Stellar account seed to be able to set some data fields on your account.
            <br/>
            This will allow you to login easily with only your username and password, which are easier to remember.
            <br/>
            Don't worry, your seed is not sent to our server. It is only used in-browser to send transactions.
            <br/>
            You can also login with your seed without creating an account.
          </p>}
          <Field
            name="seed"
            component={Input}
            type="text"
            label="Account seed"
            placeholder="SDB..."
          />
          <div
            className="g-recaptcha"
            data-sitekey="6LcvJB0UAAAAAJ36r_A7FqHIi64jzBpKCM-i688b"
            data-theme="dark"
          />
          <OperationButton
            onClick={handleSubmit}
            disabled={pristine || submitting || invalid}
            label="Create account"
            primary fluid
          />
        </form>
        {
          submitFailed &&
          <div>
            <p className={styles.messageError}>
              There was and error while creating your account.
            </p>
            <p className={styles.messageError}>
              Please try again later...
            </p>
          </div>
        }
        <p className={styles.register}>
          Already have an account ?
        </p>
        <OperationButton
          onClick={goToLogin}
          label="Sign in"
          primary active
        />
      </div>
    );
  }
}

RegisterView.propTypes = {
  ...propTypes,
  goToLogin: PropTypes.func.isRequired,
};

export default RegisterView;
