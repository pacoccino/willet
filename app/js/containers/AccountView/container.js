import { connect } from 'react-redux';

import { selAccount, selFederationName } from 'js/business/account/selectors';
import Component from './component';

const mapStateToProps = state => ({
  account: selAccount(state),
  username: selFederationName(state),
});

export default connect(mapStateToProps, null)(Component);
