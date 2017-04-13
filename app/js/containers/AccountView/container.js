import { connect } from 'react-redux';

import { selAccount, selKeypair, selFederationName, selLoggedPrivate } from 'js/business/account/selectors';
import { unsetAccount } from 'js/business/account/action-creators';
import Component from './component';

const mapStateToProps = state => ({
  account: selAccount(state),
  loggedPrivate: selLoggedPrivate(state),
  keypair: selKeypair(state),
  username: selFederationName(state),
});

const mapDispatchToProps = {
  unsetAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
