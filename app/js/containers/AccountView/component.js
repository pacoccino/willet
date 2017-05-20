import React, { PropTypes } from 'react';

import Separator from 'js/components/ui/Separator';
import OperationButton from 'js/components/ui/OperationButton';
import ClipboardBtn from "js/components/ui/Clipboard";
import Loader from 'js/components/ui/Loader';

import config from 'js/config';

import ChangePassword from '../ChangePassword';
import ChangeName from '../ChangeName';
import styles from './style.scss';

class AccountView extends React.Component {
  constructor() {
    super();
    this.state = {
      showSeed: false,
    };
  }

  switchSeed() {
    this.setState(state => ({
      ...state,
      showSeed: !state.showSeed,
    }));
  }

  renderSeed() {
    const pk = this.props.keypair.publicKey();
    const seed = this.props.keypair.secret();
    const portalUrl = `https://portal.willet.io/?accountId=${pk}&network=${config.STELLAR_NETWORK}`;
    if (this.state.showSeed) {
      return (
        <div>
          <OperationButton onClick={::this.switchSeed} active label="Hide credentials" fluid />
          <p className={styles.credentialTitle}>Account ID</p>
          <div className={styles.credCont}>
            <a href={portalUrl} target="_blank" className={styles.credentialPub}>
              {pk}
            </a>
            <ClipboardBtn data={pk} />
          </div>
          <p className={styles.credentialTitle}>Seed</p>
          <div className={styles.credCont}>
            <span className={styles.credentialPriv}>
              {seed}
            </span>
            <ClipboardBtn data={seed} />
          </div>
        </div>
      );
    }
    return (
      <OperationButton onClick={::this.switchSeed} label="Show credentials" fluid />
    );
  }

  renderAccountSettings() {
    return (
      <div>
        <Separator label="Username" />
        <div className={styles.categoryContent}>
          <ChangeName />
        </div>

        <Separator label="Password" />
        <div className={styles.categoryContent}>
          <ChangePassword />
        </div>
      </div>
    );
  }
  renderUnregistered() {
    return (
      <div>
        <div className={styles.categoryContent}>
          <span className={styles.informations}>
            Your account was not created by Willet, so you cannot configure it.
            <br />
             If you want to use full Willet features, please disconnect and register with your private seed.
          </span>
        </div>
      </div>
    );
  }

  render() {
    const { account, unsetAccount, username } = this.props;
    if (!account) {
      return <Loader />;
    }
    return (
      <div className={styles.container}>
        <OperationButton onClick={unsetAccount} label="Disconnect" active />
        {
          username ?
            this.renderAccountSettings()
            :
            this.renderUnregistered()
        }
        <Separator label="Account details" />
        {this.renderSeed()}
      </div>
    );
  }
}

AccountView.propTypes = {
  unsetAccount: PropTypes.func.isRequired,
  account: PropTypes.object,
  keypair: PropTypes.object,
  username: PropTypes.string,
};

export default AccountView;
