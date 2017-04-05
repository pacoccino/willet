import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class InitializerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
    };
  }
  componentWillMount() {
    this.setState(state => ({ ready: true }));
  }

  render() {
    return this.state.ready ? this.props.children : <div>Loading</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitializerComponent);
