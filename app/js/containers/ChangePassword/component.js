import React from 'react';
import { Field, propTypes } from 'redux-form';

import Input from 'js/components/ui/Input';
import Button from 'js/components/ui/OperationButton';
import Loader from 'js/components/ui/Loader';

import styles from './style.scss';

function ChangePassword({ handleSubmit, pristine, submitting, submitSucceeded, submitFailed }) {
  if(submitting) {
    return (
      <div className={styles.container}>
        <Loader />
        <p className={styles.message}>Changing password ...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>Change password</span>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <Field
            name="password"
            component={Input}
            type="password"
            label="Password"
          />
          <Field
            name="password_bis"
            component={Input}
            type="password"
            label="Password (again)"
          />
          {!(pristine || submitting) &&
          <Button
            onClick={handleSubmit}
            label="Change password"
            disabled={pristine || submitting}
            primary active
            />
          }
        </div>
      </form>
      {submitSucceeded && <span className={styles.messageSuccess}>
        Password successfully changed !</span>
      }
      {submitFailed && <span className={styles.messageError}>
        There was an error while changing your password...</span>
      }
    </div>
  );
}

ChangePassword.propTypes = {
  ...propTypes,
};

export default ChangePassword;
