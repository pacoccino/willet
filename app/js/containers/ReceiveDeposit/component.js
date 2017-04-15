import React, { PropTypes } from 'react';

import Loader from 'js/components/ui/Loader';
import OperationButton from 'js/components/ui/OperationButton';
import styles from './style.scss';

class ReceiveDeposit extends React.Component {

  getQRCode(depositAddress) {
    const qrData = depositAddress.qr_code || `${depositAddress.deposit_address}`;
    return (
      <img
        key="qrcode"
        src={`http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(qrData)}`}
        alt={qrData}
      />
    );
  }

  render() {
    const {
      depositData,
      close,
    } = this.props;

    let operationInfo = null;
    if (depositData.isLoading) {
      operationInfo = [
        <Loader key="loader"/>,
        <p className={styles.p} key="message">Retrieving deposit address ...</p>
      ];
    } else if (depositData.error) {
      operationInfo = [
        <p className={styles.error} key="error">There was an error while retreiving deposit address. Please try again later.</p>,
        <OperationButton onClick={close} active label="Close" key="retry" />
      ];
    } else if (depositData.data) {
      const depositAddress = depositData.data;
      operationInfo = [
        <p className={styles.p} key="a">Send a payment to :</p>,
        <p className={styles.address} key="b">{depositAddress.deposit_address}</p>,
        this.getQRCode(depositAddress),
        <OperationButton onClick={close} active label="Close" key="close" />
      ];
    }

    return (
      <div className={styles.container}>
        {operationInfo}
      </div>
    );
  }
}

ReceiveDeposit.propTypes = {
  depositData: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default ReceiveDeposit;
