import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { selBalances } from 'js/business/account/selectors';
import { sendOperation } from 'js/business/operations/action-creators';

import Component from './component';

const FORM_NAME = 'send-form';

const mapStateToProps = state => ({
  balances: selBalances(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    dispatch(sendOperation(values));
    props.reset();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
})(Component));
