import { connect } from 'react-redux';

import Component from './component';
import { setActionMode } from 'js/business/ui/actions';
import { selActionMode } from 'js/business/ui/selectors';

const mapStateToProps = state => ({
  actionMode: selActionMode(state),
});

const mapDispatchToProps = {
  setActionMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
