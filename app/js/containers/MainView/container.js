import { connect } from 'react-redux';

import Component from './component';
import { selLoggedPublic, selLoggedPrivate } from 'js/business/account/selectors';

const mapStateToProps = state => ({
  loggedPublic: selLoggedPublic(state),
  loggedPrivate: selLoggedPrivate(state),
});

export default connect(mapStateToProps, null)(Component);
