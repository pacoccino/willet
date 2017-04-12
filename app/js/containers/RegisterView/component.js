import React from 'react';
import { Field, propTypes } from 'redux-form';

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
        <label htmlFor="username">Username</label>
        <Field
          name="username"
          component="input"
          type="text"
        />
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component="input"
          type="password"
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
