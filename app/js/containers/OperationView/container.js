import { connect } from 'react-redux';

import { selActionMode } from 'js/business/ui/selectors';
import { selOperationLaunched } from 'js/business/operations/selectors';

import Component from './component';

const mapStateToProps = state => ({
  operationLaunched: selOperationLaunched(state),
  actionMode: selActionMode(state),
});

export default connect(mapStateToProps, null)(Component);
