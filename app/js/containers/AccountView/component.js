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
    if(this.state.showSeed) {
      return (
        <div>
          <OperationButton onClick={::this.switchSeed} activated label="Hide credentials" />
          <span className={styles.credentialPub}>
          {this.props.keypair.publicKey()}
          </span>
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
    const { account, username, loggedPrivate } = this.props;
    if (!account) {
      return <Loader/>;
    }
    return (
      <div style={styles.container}>
        <Separator label="Username" />
        <div className={styles.categoryContent}>
          <ChangeName />
        </div>

        <Separator label="Password" />
        <div className={styles.categoryContent}>
          <ChangePassword />
        </div>

        <Separator label="Credentials" />
        {this.renderSeed()}
      </div>
    );
  }
}

AccountView.propTypes = {
  account: PropTypes.object,
  keypair: PropTypes.object,
  loggedPrivate: PropTypes.bool,
  username: PropTypes.string,
};

export default AccountView;
