import React, { PropTypes } from 'react';

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
    </div>
  );
}

AccountView.propTypes = {
  account: PropTypes.object,
  username: PropTypes.object,
};

export default AccountView;
