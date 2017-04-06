import { connect } from 'react-redux';

import Component from './component';
import { selOperation } from 'js/business/operations/selectors';
import { resetOperation } from 'js/business/operations/action-creators';

const mapStateToProps = state => ({
  operation: selOperation(state),
});

const mapDispatchToProps = {
  close: resetOperation
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);