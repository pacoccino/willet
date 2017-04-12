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

export default connect(null, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
})(Component));