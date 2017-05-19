import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import Input from 'js/components/ui/Input';
import Loader from 'js/components/ui/Loader';
import OperationButton from 'js/components/ui/OperationButton';

import styles from './style.scss';

function RegisterView({
                        registrationDisabled,
                        handleSubmit,
                        pristine,
                        submitting,
                        submitSucceeded,
                        submitFailed,
                        goToLogin,
                        invalid,
                      }) {
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

  if(registrationDisabled) {
    return (
      <div className={styles.containerDisabled}>
        <p className={styles.disabled}>
          Account registration is currently disabled.
          <br />
          Please come back later.
        </p>
        <OperationButton
          onClick={goToLogin}
          label="Sign in"
          primary active
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Sign up
      </p>
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
        <p className={styles.seedWarning}>
          For the moment you can only register with an existing Stellar account.
          <br/>
          Your account must hold at least 150 Lumens to be usable on Willet.
          <br/>
          Your seed is not sent to our server, it is only used in your browser to set some data fields needed by Willet.
        </p>
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
      <p className={styles.login}>
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

RegisterView.propTypes = {
  ...propTypes,
  goToLogin: PropTypes.func.isRequired,
  registrationDisabled: PropTypes.bool,
};

export default RegisterView;
