import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { push } from 'react-router-redux';

import { selLoggedPublic, setAccountLoading, selKeypair, selFederationName } from 'js/business/account/selectors';
import { login } from 'js/business/account/action-creators';
import Component from './component';
import * as routes from 'js/constants/routes';

const FORM_NAME = 'login';

const mapStateToProps = state => ({
  alternateLogin: false,
});

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    return dispatch(login(values)).then(() => {
      props.reset();
    });
  },
  goToRegister() {
    dispatch(push(routes.Register));
  },
});

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'This field could not be empty';
  }
  if (!values.password) {
    errors.password = 'This field could not be empty';
  }
  return errors;
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
  validate,
})(Component));
