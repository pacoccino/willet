import { connect } from 'react-redux';

import { selActionMode } from 'js/business/ui/selectors';
import Component from './component';

const mapStateToProps = state => ({
  actionMode: selActionMode(state),
});

export default connect(mapStateToProps, null)(Component);
