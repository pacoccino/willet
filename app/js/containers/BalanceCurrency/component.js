import React, { PropTypes } from 'react';

const styles = {
  container: {
    padding: '2em',
  },
};

function Component({ balance }) {
  let symbol = '';
  if (balance.asset_type === 'native') {
    symbol = 'XLM';
  } else {
    symbol = balance.asset_code;
  }
  return (
    <div style={styles.container}>
      <p><b>{balance.balance}</b> {symbol}</p>
    </div>
  );
}

Component.propTypes = {
  balance: PropTypes.object.isRequired,
};

export default Component;
