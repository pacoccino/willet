import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { selLoggedPublic, setAccountLoading, selKeypair, selFederationName } from 'js/business/account/selectors';
import { setPublicAddress, unsetAccount } from 'js/business/account/action-creators';
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
    props.reset();
    return dispatch(setPublicAddress(values.publicAddress));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
})(Component));
