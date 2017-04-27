import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import Web3 from 'web3';
import { StellarTools } from 'stellar-toolkit';

import Loader from 'js/components/ui/Loader';
import Input from 'js/components/ui/Input';
import OperationButton from 'js/components/ui/OperationButton';
import styles from './style.scss';

let currentWeb3;
if (typeof window.web3 !== 'undefined') {
  currentWeb3 = new Web3(window.web3.currentProvider);
  currentWeb3.defaultAccount = web3.eth.accounts[0];
}

class ReceiveDeposit extends React.Component {

  getQRCode(depositData) {
    const qrData = depositData.qr_code || `${depositData.deposit_address}`;
    return (
      <img
        key="qrcode"
        src={`http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(qrData)}`}
        alt={qrData}
      />
    );
  }

  payEthereum(depositData, amount) {
    try {
      const contractAPI = JSON.parse(depositData.specific_data.contract_api);
      const StelereumContract = currentWeb3.eth.contract(contractAPI);
      const contract = StelereumContract.at(depositData.specific_data.contract_address);

      contract.Deposit.apply(contract,
        depositData.specific_data.params.concat(
          {
            from: currentWeb3.eth.accounts[0],
            value: currentWeb3.toWei(amount, 'ether'),
          }
        ).concat(
        error => {
          // todo handle
          if(error) {
            throw error;
          }
        }));
    } catch(e) {
      console.error(e);
    }
  }

  renderEthereumDeposit(depositData) {
    if(currentWeb3) {
      return [
        <Field name="amount" label="Amount to deposit" component={Input} type="number" step={StellarTools.STROOP} key="input" />,
        <OperationButton onClick={() => ::this.payEthereum(depositData, this.props.amount)} label="Pay with Ethereum" active secondary key="pay"/>,
      ];
    }
    return this.renderInstallMetamask();
  }

  renderEthereumUnavailable () {
    return [
      <div key="no eth">
        <p>Sorry Ethereum deposit is not available for the moment.</p>
      </div>
    ];
  }
  renderInstallMetamask () {
    return [
      <div key="install metamask">
        <p>No Ethereum provider found.</p>
        <p>Please install:</p>
        <p style={{textAlign: 'center'}}><a href="https://metamask.io/">MetaMask</a><br />or <br /><a href="https://github.com/ethereum/mist/releases">Mist</a></p>
      </div>
    ];
  }

  renderDepositInfo(depositData) {
    if(depositData.type === 'ethereum') {
      return this.renderEthereumDeposit(depositData);
    }
    return [
      <p className={styles.p} key="a">Send a payment to :</p>,
      <p className={styles.address} key="b">{depositData.deposit_address}</p>,
      this.getQRCode(depositData),
    ];
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
      operationInfo = this.renderDepositInfo(depositData.data)
        .concat(<OperationButton onClick={close} active label="Close" key="close" />);
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
  close: PropTypes.func.isRequired,  ...propTypes,
  amount: PropTypes.string,
};

export default ReceiveDeposit;
