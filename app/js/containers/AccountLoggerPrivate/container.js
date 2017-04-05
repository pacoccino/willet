import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Component from './component';
import { selLoggedPrivate } from 'js/business/account/selectors';
import { setPrivateSecret, unsetPrivateSecret } from 'js/business/account/action-creators';

const FORM_NAME = 'login-private';

const mapStateToProps = state => ({
  loggedPrivate: selLoggedPrivate(state),
});

const mapDispatchToProps = dispatch => ({
  unsetPrivateSecret() {
    dispatch(unsetPrivateSecret());
  },
  onSubmit(values, d, props) {
    dispatch(setPrivateSecret(values.secret));
    props.reset();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
})(Component));
