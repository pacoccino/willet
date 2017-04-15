import React, { PropTypes } from 'react';

import Loader from 'js/components/ui/Loader';
import OperationButton from 'js/components/ui/OperationButton';

import styles from './style.scss';

class LaunchedOperation extends React.Component {
  render() {
    const {
      operation,
      close,
    } = this.props;

    let operationInfo = null;
    if (operation.isLoading) {
      operationInfo = [
          <Loader key="loader"/>,
          <p className={styles.p} key="message">Processing ...</p>,
      ];
    } else if (operation.data) {
      operationInfo = [
        <p className={styles.success} key="success">Success !</p>,
        <OperationButton onClick={close} active label="Close" key="close" />,
      ];
    } else if (operation.error) {
      operationInfo = [
        <p className={styles.error} key="error">
          There was an error while processing the operation. <br/>
          Please try again later...
        </p>,
        <OperationButton onClick={close} active label="Retry" key="retry" />,
      ];
    }

    return (
      <div className={styles.container}>
        {operationInfo}
      </div>
    );
  }
}

LaunchedOperation.propTypes = {
  operation: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default LaunchedOperation;
