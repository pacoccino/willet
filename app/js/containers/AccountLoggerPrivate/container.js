import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { selAccount, selLoggedPrivate } from 'js/business/account/selectors';
import { setPrivateSecret, unsetPrivateSecret } from 'js/business/account/action-creators';
import Component from './component';

const FORM_NAME = 'login-private';

const mapStateToProps = state => ({
  account: selAccount(state),
  loggedPrivate: selLoggedPrivate(state),
});

const mapDispatchToProps = dispatch => ({
  unsetPrivateSecret() {
    dispatch(unsetPrivateSecret());
  },
  onSubmit(values, d, props) {
    return dispatch(setPrivateSecret(values.secret)).then(() => {
      props.reset();
    });
  },
});

function validate(values) {
  const errors = {};
  if (!values.secret) {
    errors.secret = 'This field could not be empty';
  }
  return errors;
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
  validate,
})(Component));
