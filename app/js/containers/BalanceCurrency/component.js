import React, { PropTypes } from 'react';

const styles = {
  container: {
    padding: '2em',
  },
};

function Component({ balance }) {
  return (
    <div style={styles.container}>
      <p><b>{balance.balance}</b> {balance.asset_shortname}</p>
    </div>
  );
}

Component.propTypes = {
  balance: PropTypes.object.isRequired,
};

export default Component;
