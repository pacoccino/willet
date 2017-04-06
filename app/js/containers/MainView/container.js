import { connect } from 'react-redux';

import { selAccount, selLoggedPublic, selLoggedPrivate } from 'js/business/account/selectors';
import { selOperationLaunched } from 'js/business/operations/selectors';
import Component from './component';

const mapStateToProps = state => ({
  account: selAccount(state),
  loggedPublic: selLoggedPublic(state),
  loggedPrivate: selLoggedPrivate(state),
  operationLaunched: selOperationLaunched(state),
});

export default connect(mapStateToProps, null)(Component);
