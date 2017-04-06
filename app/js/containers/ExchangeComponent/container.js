import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Component from './component';
import { selBalances } from 'js/business/account/selectors';
import { exchangeOperation } from 'js/business/operations/action-creators';

const FORM_NAME = 'exchange-form';

const mapStateToProps = state => ({
  balances: selBalances(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    dispatch(exchangeOperation(values));
    props.reset();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
})(Component));
