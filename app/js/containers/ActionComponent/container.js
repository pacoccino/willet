import { connect } from 'react-redux';

import Component from './component';
import { selActionMode } from 'js/business/ui/selectors';

const mapStateToProps = state => ({
  actionMode: selActionMode(state),
});

export default connect(mapStateToProps, null)(Component);
