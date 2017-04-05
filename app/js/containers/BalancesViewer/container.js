import { connect } from 'react-redux';

import Component from './component';
import { selBalances } from 'js/business/account/selectors';

const mapStateToProps = state => ({
  balances: selBalances(state),
});

export default connect(mapStateToProps, null)(Component);
