import React, { PropTypes } from 'react';

class LaunchedOperation extends React.Component {
  render() {
    const {
      operation,
      close,
    } = this.props;

    let operationInfo = null;
    if(operation.isLoading) {
      operationInfo = <p>Sending ...</p>;
    } else if(operation.data) {
      operationInfo = <p>{operation.data}</p>;
    } else if(operation.error) {
      operationInfo = <p>{operation.error}</p>;
    }

    return (
      <div>
        {operationInfo}
        {
          !operation.isLoading &&
          <button onClick={close}>Close</button>
        }
      </div>
    );
  }
}

LaunchedOperation.propTypes = {
  operation: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default LaunchedOperation;
