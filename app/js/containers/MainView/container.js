import { connect } from 'react-redux';

import Component from './component';
import { selAccount, selLoggedPublic, selLoggedPrivate } from 'js/business/account/selectors';
import { selOperationLaunched } from 'js/business/operations/selectors';

const mapStateToProps = state => ({
  account: selAccount(state),
  loggedPublic: selLoggedPublic(state),
  loggedPrivate: selLoggedPrivate(state),
  operationLaunched: selOperationLaunched(state),
});

export default connect(mapStateToProps, null)(Component);
