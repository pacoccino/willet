import { connect } from 'react-redux';

import Component from './component';
import { selDepositAddress } from 'js/business/operations/selectors';
import { resetDepositAddress } from 'js/business/operations/action-creators';

const mapStateToProps = state => ({
  depositData: selDepositAddress(state),
});

const mapDispatchToProps = {
  close: resetDepositAddress
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
