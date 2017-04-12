import React from 'react';
import { Field, propTypes } from 'redux-form';
import Input from 'js/components/ui/Input';

const styles = {
  container: {
  },
};

function ChangePassword({ handleSubmit, pristine, submitting, submitSucceeded, submitFailed }) {
  return (
    <div style={styles.container}>
      <p>Change password: </p>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={pristine || submitting}>
          Change
        </button>
      </form>
      {submitSucceeded && <p>Password successfully changed !</p>}
      {submitFailed && <p>There was an error while changing your password...</p>}
    </div>
  );
}

ChangePassword.propTypes = {
  ...propTypes,
};

export default ChangePassword;
