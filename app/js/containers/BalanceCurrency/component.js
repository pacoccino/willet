import React, { PropTypes } from 'react';

const styles = {
  container: {
    padding: '2em',
  },
};

function BalanceCurrency({ balance }) {
  return (
    <div style={styles.container}>
      <p><b>{balance.balance}</b> {balance.asset_shortname}</p>
    </div>
  );
}

BalanceCurrency.propTypes = {
  balance: PropTypes.object.isRequired,
};

export default BalanceCurrency;
