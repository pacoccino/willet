import { connect } from 'react-redux';

import Component from './component';
import { selAccount, selLoggedPublic, selBalances } from 'js/business/account/selectors';

const mapStateToProps = state => ({
  accountLoaded: !!selAccount(state),
  loggedPublic: selLoggedPublic(state),
  balances: selBalances(state),
});

export default connect(mapStateToProps, null)(Component);
