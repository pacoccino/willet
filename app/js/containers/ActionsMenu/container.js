import { connect } from 'react-redux';

import Component from './component';
import { setActionMode } from 'js/business/ui/actions';

const mapDispatchToProps = {
  setActionMode,
};

export default connect(null, mapDispatchToProps)(Component);
