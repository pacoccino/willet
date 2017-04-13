import { connect } from 'react-redux';

import { selAccount, selLoggedPublic, selBalances } from 'js/business/account/selectors';
import Component from './component';

const mapStateToProps = state => ({
  accountLoaded: !!selAccount(state),
  loggedPublic: selLoggedPublic(state),
  balances: selBalances(state),
});

export default connect(mapStateToProps, null)(Component);
