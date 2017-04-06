import { connect } from 'react-redux';

import Component from './component';
import { selAccount, selLoggedPublic, selLoggedPrivate } from 'js/business/account/selectors';

const mapStateToProps = state => ({
  account: selAccount(state),
  loggedPublic: selLoggedPublic(state),
  loggedPrivate: selLoggedPrivate(state),
});

export default connect(mapStateToProps, null)(Component);
