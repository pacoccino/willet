import { connect } from 'react-redux';

import { selDepositAddress } from 'js/business/operations/selectors';
import { resetDepositAddress } from 'js/business/operations/action-creators';
import Component from './component';

const mapStateToProps = state => ({
  depositData: selDepositAddress(state),
});

const mapDispatchToProps = {
  close: resetDepositAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
