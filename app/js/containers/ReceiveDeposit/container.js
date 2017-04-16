import { connect } from 'react-redux';
import { getFormValues, reduxForm } from 'redux-form';

import { selDepositAddress } from 'js/business/operations/selectors';
import { resetDepositAddress } from 'js/business/operations/action-creators';
import Component from './component';

const FORM_NAME = 'deposit-form';

const mapStateToProps = state => ({
  depositData: selDepositAddress(state),
  amount: getFormValues(state).amount,
});

const mapDispatchToProps = {
  close: resetDepositAddress,
};

function validate(values) {
  const errors = {};
  if(!values.amount) {
    errors.amount = 'You must enter an amount';
  }
  return errors;
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
  validate,
})(Component));

