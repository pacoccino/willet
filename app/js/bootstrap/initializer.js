import React from 'react';
import { connect } from 'react-redux';
import { Keypair } from 'stellar-sdk'; // TODO REMOVE

import { setKeypair } from 'js/business/account/actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = { setKeypair };

class InitializerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
    };
  }
  componentWillMount() {
    this.setState(state => ({ ready: true }));
    this.props.setKeypair(Keypair.fromSecret('SCKTE6Y4VMRVUS6E4WYTWPAPBBYIUBPTBG6HRNEPWMHP5Z2KSRJ3DE5Q'));
  }

  render() {
    return this.state.ready ? this.props.children : <div>Loading</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitializerComponent);
