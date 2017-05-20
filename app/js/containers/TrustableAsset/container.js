import { connect } from 'react-redux';

import { trustWilsonAsset } from 'js/business/operations/action-creators';

import Component from './component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  trustAsset() {
    dispatch(trustWilsonAsset(ownProps.wilsonAsset));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
