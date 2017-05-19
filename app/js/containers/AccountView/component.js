import React, { PropTypes } from 'react';

import Separator from 'js/components/ui/Separator';
import OperationButton from 'js/components/ui/OperationButton';
import Loader from 'js/components/ui/Loader';

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
    if (this.state.showSeed) {
      return (
        <div>
          <OperationButton onClick={::this.switchSeed} active label="Hide credentials" fluid />
          <p className={styles.credentialTitle}>Account ID</p>
          <span className={styles.credentialPub}>
            {this.props.keypair.publicKey()}
          </span>
          <p className={styles.credentialTitle}>Seed</p>
          <span className={styles.credentialPriv}>
            {this.props.keypair.secret()}
          </span>
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
            Your account was not created by willet, so you cannot configure it.
            <br />
             If you want to use Willet full features, please disconnect and register with your private seed.
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
