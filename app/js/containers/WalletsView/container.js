import { connect } from 'react-redux';

import { selAccount, selLoggedPublic, selBalances } from 'js/business/account/selectors';
import { selUntrustedAssets } from 'js/business/wilson/selectors';
import Component from './component';

const mapStateToProps = state => ({
  accountLoaded: !!selAccount(state),
  loggedPublic: selLoggedPublic(state),
  balances: selBalances(state),
  untrustedAssets: selUntrustedAssets(state),
});

export default connect(mapStateToProps, null)(Component);
