import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import Input from 'js/components/ui/Input';
import Button from 'js/components/ui/Button';
import Loader from 'js/components/ui/Loader';

import styles from './style.scss';

class LoginView extends React.Component {
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      submitSucceeded,
      submitFailed,
    } = this.props;

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

          {submitting ?
            <p className={styles.loading}>
              <Loader/>
              Logging in ...
            </p>
            :
            <Button
              onClick={handleSubmit}
              disabled={pristine || submitting}
              className={styles.btn}
            />
          }
        </form>
        {(!submitting && submitFailed) &&
        <p className={styles.error}>
          Invalid credentials
        </p>
        }
        {(!submitting && submitSucceeded) &&
        <p className={styles.success}>
          Login success !
        </p>
        }
      </div>
    );
  }
}

LoginView.propTypes = {
  ...propTypes,
};

export default LoginView;
