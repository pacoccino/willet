import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Component from './component';
import { selBalances } from 'js/business/account/selectors';
// import { setPublicAddress, unsetAccount } from 'js/business/account/action-creators';

const FORM_NAME = 'receive-form';

const mapStateToProps = state => ({
  balances: selBalances(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    props.reset();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
})(Component));
