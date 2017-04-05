import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Component from './component';
import { selLoggedPublic, setAccountLoading, selKeypair } from 'js/business/account/selectors';
import { setPublicAddress, unsetAccount } from 'js/business/account/action-creators';

const FORM_NAME = 'login-public';

const mapStateToProps = state => ({
  loggedPublic: selLoggedPublic(state),
  isAccountLoading: setAccountLoading(state),
  keypair: selKeypair(state),
});

const mapDispatchToProps = dispatch => ({
  unsetAccount() {
    dispatch(unsetAccount());
  },
  onSubmit(values, d, props) {
    dispatch(setPublicAddress(values.publicAddress));
    props.reset();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
})(Component));
