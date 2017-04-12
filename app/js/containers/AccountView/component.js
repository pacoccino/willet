import React, { PropTypes } from 'react';

import ChangePassword from '../ChangePassword';
import ChangeName from '../ChangeName';

const styles = {
  container: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

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
          {this.props.keypair.secret()}
          <button onClick={::this.switchSeed}>
            Hide seed
          </button>
        </div>
      );
    }
    return (
      <div>
        <button onClick={::this.switchSeed}>
          Show seed
        </button>
      </div>
    );
  }
  render() {
    const { account, username, loggedPrivate } = this.props;
    if (!account) {
      return <div>Loading</div>;
    }
    return (
      <div style={styles.container}>
        <p>{username}</p>
        <p>{account.id}</p>
        {loggedPrivate &&
        <div>
          {this.renderSeed()}
          <ChangeName />
          <ChangePassword />
        </div>
        }
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
