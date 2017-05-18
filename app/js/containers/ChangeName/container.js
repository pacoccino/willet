import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { selFederationName } from 'js/business/account/selectors';
import { changeUsername } from 'js/business/account/action-creators';
import Component from './component';

const FORM_NAME = 'change-username-form';

const mapStateToProps = state => ({
  initialValues: {
    username: selFederationName(state),
  },
});

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    return dispatch(changeUsername(values.username))
      .then(() => {
        props.reset();
      });
  },
});

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'You must enter a username';
  }
  return errors;
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  validate,
})(Component));
