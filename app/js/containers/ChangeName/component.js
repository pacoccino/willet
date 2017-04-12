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
      <p>Change username: </p>
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          component={Input}
          type="text"
          label="Username"
        />
        <button type="submit" disabled={pristine || submitting}>
          Change
        </button>
      </form>
      {submitSucceeded && <p>Username successfully changed !</p>}
      {submitFailed && <p>There was an error while changing your username...</p>}
    </div>
  );
}

ChangePassword.propTypes = {
  ...propTypes,
};

export default ChangePassword;
