import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import Input from 'js/components/ui/Input';

import OperationButton from 'js/components/ui/OperationButton';
import CurrencyAmount from 'js/components/ui/CurrencyAmount';

import styles from './style.scss';

import { decode } from 'js/helpers/addressURI';
import { getCamera, nextCamera, getNumberOfCameras } from 'js/helpers/camera';

class SendComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      scanning: false,
      camera: null,
      nbCamera: 0,
    };
  }

  componentWillMount() {
    getCamera().then((camera) => {
      if (camera) {
        const nbCamera = getNumberOfCameras();
        this.setState({ camera, nbCamera });
      }
    });
  }

  startQrScan() {
    if (!this.state.camera) return;

    this.setState({
      scanning: true,
      scanError: false,
    }, () => {
      this.scanner = new Instascan.Scanner({ video: this.videoContainer });
      this.scanner.addListener('scan', ::this.fetchContent);
      this.scanner.start(this.state.camera);
    });
  }

  stopScan() {
    this.scanner.stop();
    this.scanner = null;

    this.setState({
      scanning: false,
    });
  }

  changeCamera() {
    this.stopScan();
    nextCamera().then(camera => {
      this.setState({ camera },
        () => this.startQrScan()
      );
    });
  }

  fetchContent(content) {
    try {
      const decoded = decode(content);
      this.props.change('destination', decoded.address);
      if (decoded.options.amount) {
        this.props.change('amount', decoded.options.amount);
      }
      const balance = decoded.type === 'stellar' ?
        this.props.balances.find(b => b.asset.isNative())
        :
        this.props.balances.find(b =>
          (b.wilsonAsset.type === decoded.type)
        );
      if(balance) {
        this.props.change('assetUuid', balance.asset.uuid);
      }
      this.stopScan();
    } catch(e) {
      this.stopScan();
      this.setState({
        scanError: true,
      });
    }
  }

  getSendableAssets() {
    return this.props.balances.map(b => b.asset);
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      invalid,
      balance,
    } = this.props;

    if (this.state.scanning) {
      return (
        <div className={styles.container}>
          <div className={styles.qrContainer}>
            <span className={styles.pleaseScan}>Please scan your QR code</span>
            <video ref={(video) => { this.videoContainer = video; }} className={styles.videoContainer} />
          </div>
          {this.state.nbCamera > 1 && <OperationButton
            onClick={::this.changeCamera}
            label="Change camera"
            primary active
          />}
          <OperationButton
            onClick={::this.stopScan}
            label="Cancel"
            primary active
          />
        </div>
      );
    }

    return (
      <div className={styles.container}>
        {this.state.camera &&
        <div className={styles.scanIntent} onClick={::this.startQrScan}>
          <i className={`fa fa-qrcode ${styles.qrIcon}`} /> Scan QR code
        </div>
        }
        {this.state.scanError &&
        <span className={styles.scanError}>
            <i className="fa fa-exclamation-triangle"/>
            Invalid QR code
          </span>
        }
        <form onSubmit={handleSubmit}>
          <CurrencyAmount
            assets={this.getSendableAssets()}
            balance={balance}
          />
          <Field
            name="destination"
            component={Input}
            type="text"
            label="Destination"
            white
          />
          <OperationButton
            onClick={handleSubmit}
            label="Send"
            disabled={pristine || submitting || invalid}
            primary fluid
          />
        </form>
      </div>
    );
  }
}

SendComponent.propTypes = {
  balances: PropTypes.array.isRequired,
  balance: PropTypes.object,
  ...propTypes,
};

export default SendComponent;
