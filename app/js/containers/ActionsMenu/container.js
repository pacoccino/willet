import { connect } from 'react-redux';

import { setActionMode } from 'js/business/ui/actions';
import { selActionMode } from 'js/business/ui/selectors';
import Component from './component';

const mapStateToProps = state => ({
  actionMode: selActionMode(state),
});

const mapDispatchToProps = {
  setActionMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
