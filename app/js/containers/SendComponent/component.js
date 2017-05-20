import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import Instascan from 'instascan';

import Input from 'js/components/ui/Input';

import OperationButton from 'js/components/ui/OperationButton';
import CurrencyAmount from 'js/components/ui/CurrencyAmount';

import styles from './style.scss';

import { decode } from 'js/helpers/addressURI';

class SendComponent extends React.Component {
  constructor() {
    super();

    this.cameras = [];
    this.state = {
      scanning: false,
      camera: null,
    };
  }

  componentWillMount() {
    Instascan.Camera.getCameras().then((cameras) => {
      if (cameras.length > 0) {
        this.cameras = cameras;
        const defaultCamera = cameras[0];
        console.log(`Using camera ${defaultCamera.name}`);
        this.setState({
          camera: defaultCamera,
        });
      } else {
        console.error('No cameras found.');
      }
    }).catch((e) => {
      console.error(e);
    });
  }

  startQrScan() {
    if (!this.state.camera) return;

    this.setState({
      scanning: true,
    }, () => {
      this.scanner = new Instascan.Scanner({ video: this.videoContainer });
      this.scanner.addListener('scan', ::this.fetchContent);
      this.scanner.start(this.state.camera);
    });
  }

  fetchContent(content) {
    const decoded = decode(content);
    console.log(decoded);
    this.props.change('destination', decoded.address);
    if (decoded.options.amount) {
      this.props.change('amount', decoded.options.amount);
    }
    // TODO select currency
    this.stopScan();
  }

  stopScan() {
    this.scanner.stop();

    this.setState({
      scanning: false,
    });
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
            <span>Please scan your QR code</span>
            <video ref={(video) => { this.videoContainer = video; }} className={styles.videoContainer} />
          </div>
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
          <i className="fa fa-camera-vintage" /> Scan QR code
        </div>
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
