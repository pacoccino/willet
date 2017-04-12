import React from 'react';
import { Field, propTypes } from 'redux-form';
import Input from 'js/components/ui/Input';

const styles = {
  container: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function RegisterView({ handleSubmit, pristine, submitting }) {
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          component={Input}
          type="text"
          label="Username"
        />
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
          Create
        </button>
      </form>
    </div>
  );
}

RegisterView.propTypes = {
  ...propTypes,
};

export default RegisterView;
