import React from 'react';
import { connect } from 'react-redux';
import { Keypair } from 'stellar-sdk'; // TODO REMOVE

import { setKeypair } from 'js/business/account/actions';
import { getKnownAnchors } from 'js/business/wilson/action-creators';

const mapDispatchToProps = {
  setKeypair,
  getKnownAnchors,
};

class InitializerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      error: null,
    };
  }
  componentWillMount() {
    Promise.all([
      this.props.getKnownAnchors(),
    ])
      .then(() => {
        // this.props.setKeypair(Keypair.fromSecret('SAQHSZFSQIIVWH4DL2D5PRF6BARWUVDELSM5RZMRGYFDQA2P2QMNGPF7'));
        this.setState(() => ({ ready: true }));
      })
      .catch(error => {
        this.setState(() => ({ error }));
      })
  }

  render() {
    if(this.state.error) {
      return <div>There was an error while loading the application.</div>;
    }
    return this.state.ready ? this.props.children : <div>Loading</div>;
  }
}

InitializerComponent.propTypes = {
  getKnownAnchors: React.PropTypes.func.isRequired,
  setKeypair: React.PropTypes.func.isRequired,
  children: React.PropTypes.node,
};

export default connect(null, mapDispatchToProps)(InitializerComponent);
