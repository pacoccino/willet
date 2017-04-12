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
        dispatch(push(routes.Root));
        props.reset();
      });
  },
});

const PASSWORD_MIN_LENGTH = 2;

function validate(values) {
  const errors = {};
  if(!values.username) {
    errors.username = 'You must enter a username';
  }
  if(!values.password) {
    errors.password = 'You must enter a password';
  }
  if(values.password !== values.password_bis) {
    errors.password_bis = 'Password mismatch';
  }
  if(values.password && values.password.length < PASSWORD_MIN_LENGTH) {
    errors.password = 'Password too short';
  }
  return errors;
}

export default connect(null, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
  validate,
})(Component));