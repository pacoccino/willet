import React, { PropTypes } from 'react';

class ReceiveDeposit extends React.Component {

  getQRCode(depositAddress) {
    return (
      <img
        src={`http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${depositAddress.type}:${depositAddress.address}`}
        alt={`${depositAddress.type}:${depositAddress.deposit_address}`}
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
      operationInfo = <p>Retrieving deposit address ...</p>;
    } else if (depositData.error) {
      operationInfo = <p>{depositData.error}</p>;
    } else if (depositData.data) {
      const depositAddress = depositData.data;
      operationInfo = (
        <div>
          <p>Send a payment to :</p>
          <p>{depositAddress.deposit_address}</p>
          {this.getQRCode(depositAddress)}
        </div>
      );
    }

    return (
      <div>
        {operationInfo}
        {
          !depositData.isLoading &&
          <button onClick={close}>Close</button>
        }
      </div>
    );
  }
}

ReceiveDeposit.propTypes = {
  depositData: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default ReceiveDeposit;
