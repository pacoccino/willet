import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { selLoggedPublic, setAccountLoading, selKeypair, selFederationName } from 'js/business/account/selectors';
import { setUsername, unsetAccount } from 'js/business/account/action-creators';
import Component from './component';

const FORM_NAME = 'login-public';

const mapStateToProps = state => ({
  loggedPublic: selLoggedPublic(state),
  isAccountLoading: setAccountLoading(state),
  keypair: selKeypair(state),
  federationName: selFederationName(state),
});

const mapDispatchToProps = dispatch => ({
  unsetAccount() {
    dispatch(unsetAccount());
  },
  onSubmit(values, d, props) {
    return dispatch(setUsername(values.username)).then(() => {
      props.reset();
    });
  },
});

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'This field could not be empty';
  }
  return errors;
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
  validate,
})(Component));
