import { connect } from 'react-redux';

import { selLoggedPublic, selFederationName } from 'js/business/account/selectors';
import { selRoute } from 'js/business/ui/selectors';
import { unsetAccount } from 'js/business/account/action-creators';
import Component from './component';

const mapStateToProps = state => ({
  loggedPublic: selLoggedPublic(state),
  federationName: selFederationName(state),
  pathname: selRoute(state),
});

const mapDispatchToProps = dispatch => ({
  unsetAccount() {
    dispatch(unsetAccount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
