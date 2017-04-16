import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as routes from 'js/constants/routes';
import { reduxForm } from 'redux-form';

import { createAccount } from 'js/business/account/action-creators';
import Component from './component';

const FORM_NAME = 'register-form';

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    return dispatch(createAccount(values))
      .then(() => {
        props.reset();
      });
  },
  goToLogin() {
    dispatch(push(routes.Login));
  }
});

const USERNAME_MIN_LENGTH = 3;
const PASSWORD_MIN_LENGTH = 6;

function validate(values) {
  const errors = {};
  if(!values.username) {
    errors.username = 'You must enter a username';
  }
  if(values.username && values.username.length < USERNAME_MIN_LENGTH) {
    errors.username = `Username must be at least ${USERNAME_MIN_LENGTH} characters`;
  }
  if(!values.password) {
    errors.password = 'You must enter a password';
  }
  if(values.password !== values.password_bis) {
    errors.password_bis = 'Password mismatch';
  }
  if(values.password && values.password.length < PASSWORD_MIN_LENGTH) {
    errors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters`;
  }
  return errors;
}

export default connect(null, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
  validate,
})(Component));