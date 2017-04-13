import React, { PropTypes } from 'react';
import Loader from 'js/components/ui/Loader';

class LaunchedOperation extends React.Component {
  render() {
    const {
      operation,
      close,
    } = this.props;

    let operationInfo = null;
    if (operation.isLoading) {
      operationInfo = <div>
        <p>Processing ...</p>
        <Loader/>
      </div>;
    } else if (operation.data) {
      operationInfo = <p>Success !</p>;
    } else if (operation.error) {
      operationInfo = <p>Error...</p>;
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
