import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import Input from 'js/components/ui/Input';
import OperationButton from 'js/components/ui/OperationButton';
import Loader from 'js/components/ui/Loader';

import styles from './style.scss';

class LoginCredentials extends React.Component {
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      submitSucceeded,
      submitFailed,
      invalid,
    } = this.props;

    if (submitting) {
      return (
        <div>
          <Loader />
          <p className={styles.loading}>
            Logging in ...
          </p>
        </div>
      );
    }
    return (
      <div className={styles.container}>
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
          <OperationButton
            disabled={pristine || submitting || invalid}
            onClick={handleSubmit}
            label="Sign in"
            primary fluid
          />
          <input type="submit" style={{ visibility: 'hidden' }} />
        </form>
        {submitFailed &&
        <p className={styles.error}>
          Invalid credentials
        </p>
        }
        {submitSucceeded &&
        <p className={styles.success}>
          Login success !
        </p>
        }
      </div>
    );
  }
}

LoginCredentials.propTypes = {
  ...propTypes,
  alternateLogin: PropTypes.bool,
};

export default LoginCredentials;
