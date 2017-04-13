import { connect } from 'react-redux';

import { selLoggedPublic, selLoggedPrivate } from 'js/business/account/selectors';
import Component from './component';

const mapStateToProps = state => ({
  loggedPublic: selLoggedPublic(state),
  loggedPrivate: selLoggedPrivate(state),
});

export default connect(mapStateToProps, null)(Component);
