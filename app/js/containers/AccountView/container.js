import { connect } from 'react-redux';

import { selAccount, selKeypair, selFederationName, selLoggedPrivate } from 'js/business/account/selectors';
import Component from './component';

const mapStateToProps = state => ({
  account: selAccount(state),
  loggedPrivate: selLoggedPrivate(state),
  keypair: selKeypair(state),
  username: selFederationName(state),
});

export default connect(mapStateToProps, null)(Component);
