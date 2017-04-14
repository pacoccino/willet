import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import Input from 'js/components/ui/Input';
import OperationButton from 'js/components/ui/OperationButton';
import Loader from 'js/components/ui/Loader';

import styles from './style.scss';

class LoginView extends React.Component {
  render() {
    const {
      goToRegister,
      handleSubmit,
      pristine,
      submitting,
      submitSucceeded,
      submitFailed,
    } = this.props;

    if(submitting) {
      return (
        <p className={styles.loading}>
          <Loader/>
          Logging in ...
        </p>
      );
    }
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <Field
            name="username"
            component={Input}
            type="text"
            label="Login"
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
            disabled={pristine || submitting}
            onClick={handleSubmit}
            label="Sign in"
            primary active
          />
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
        <p className={styles.register}>
          Don't have an account ?
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
  ...propTypes,
  goToRegister: PropTypes.func.isRequired,
};

export default LoginView;
