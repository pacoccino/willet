import { connect } from 'react-redux';

import { goToOperation } from 'js/business/ui/action-creators';
import { selActionMode } from 'js/business/ui/selectors';

import Component from './component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  goToOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
