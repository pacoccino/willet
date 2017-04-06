import React, { PropTypes } from 'react';

import BalanceCurrency from '../BalanceCurrency';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function Component({ loggedPublic, accountLoaded, balances }) {
  if(loggedPublic && !accountLoaded) {
    return (
      <div>
        <p>Loading balances...</p>
      </div>
    );
  }
  return (
    <div style={styles.container}>
      {
        balances.map(
          (balance, i) =>
            <BalanceCurrency key={i} balance={balance} />
        )
      }
    </div>
  );
}

Component.propTypes = {
  balances: PropTypes.array.isRequired,
  accountLoaded: PropTypes.bool.isRequired,
  loggedPublic: PropTypes.bool.isRequired,
};

export default Component;
