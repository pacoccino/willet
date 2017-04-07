import { connect } from 'react-redux';

import { selKnownAnchors } from 'js/business/wilson/selectors';
import Component from './component';

const mapStateToProps = state => ({
  knownAnchors: selKnownAnchors(state),
});

export default connect(mapStateToProps, null)(Component);
