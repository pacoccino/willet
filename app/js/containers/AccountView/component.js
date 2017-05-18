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
          <OperationButton onClick={::this.switchSeed} active label="Hide credentials" />
          <p>Account ID:</p>
          <span className={styles.credentialPub}>
            {this.props.keypair.publicKey()}
          </span>
          <p>Seed:</p>
          <span className={styles.credentialPriv}>
            {this.props.keypair.secret()}
          </span>
        </div>
      );
    }
    return (
      <OperationButton onClick={::this.switchSeed} label="Show credentials" />
    );
  }
  render() {
    const { account, unsetAccount } = this.props;
    if (!account) {
      return <Loader />;
    }
    return (
      <div className={styles.container}>
        <OperationButton onClick={unsetAccount} label="Disconnect" />
        <Separator label="Username" />
        <div className={styles.categoryContent}>
          <ChangeName />
        </div>

        <Separator label="Password" />
        <div className={styles.categoryContent}>
          <ChangePassword />
        </div>

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
