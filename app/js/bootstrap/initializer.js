import React from 'react';
import { connect } from 'react-redux';

import { setKeypair, setFederationName } from 'js/business/account/actions';
import { getKnownAnchors } from 'js/business/wilson/action-creators';
import Loader from 'js/components/ui/Loader';
import config from 'js/config';

const mapDispatchToProps = {
  setKeypair,
  setFederationName,
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
      config.DEMO ? null : this.props.getKnownAnchors(),
    ])
      .then(() => {
        this.setState(() => ({ ready: true }));
      })
      .catch((error) => {
        this.setState(() => ({ error }));
      });
  }

  render() {
    if (this.state.error) {
      return (
        <p style={{ textAlign: 'center' }}>
          There was an error while loading the application.
        </p>
      );
    }
    return this.state.ready ? this.props.children : <Loader />;
  }
}

InitializerComponent.propTypes = {
  getKnownAnchors: React.PropTypes.func.isRequired,
  setKeypair: React.PropTypes.func.isRequired,
  children: React.PropTypes.node,
};

export default connect(null, mapDispatchToProps)(InitializerComponent);
