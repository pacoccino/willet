import React, { PropTypes } from 'react';

import ChangePassword from '../ChangePassword';

const styles = {
  container: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function AccountView({ account, username }) {
  if (!account) {
    return <div>Loading</div>;
  }
  return (
    <div style={styles.container}>
      <p>{username}</p>
      <p>{account.id}</p>
      <ChangePassword />
    </div>
  );
}

AccountView.propTypes = {
  account: PropTypes.object,
  username: PropTypes.object,
};

export default AccountView;
