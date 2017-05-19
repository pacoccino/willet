import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import Input from 'js/components/ui/Input';
import OperationButton from 'js/components/ui/OperationButton';
import Loader from 'js/components/ui/Loader';

import arrowDown from 'images/arrow-down.png';
import styles from './style.scss';


class LoginSeed extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
    };
  }
  open() {
    this.setState({
      open: true,
    });
  }
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
            name="seed"
            component={Input}
            type="text"
            label="Secret seed"
            placeholder="SDB..."
          />
          <OperationButton
            disabled={pristine || submitting || invalid}
            onClick={handleSubmit}
            label="Sign in"
            primary fluid
          />
          <input type="submit" style={{ visibility: 'hidden' }} />
        </form>
        {submitFailed &&
        <p className={styles.error}>
          Invalid account
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

LoginSeed.propTypes = {
  ...propTypes,
};

export default LoginSeed;
