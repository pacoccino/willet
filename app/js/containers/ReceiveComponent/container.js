import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { selBalances } from 'js/business/account/selectors';
import { selDepositAddressLaunched } from 'js/business/operations/selectors';
import { getDepositAddress } from 'js/business/operations/action-creators';
import Component from './component';

const FORM_NAME = 'receive-form';

const mapStateToProps = state => ({
  balances: selBalances(state),
  getDepositLaunched: selDepositAddressLaunched(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    dispatch(getDepositAddress(values.currency));
    props.reset();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
})(Component));
