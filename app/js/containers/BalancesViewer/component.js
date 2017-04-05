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

function Component({ balances }) {
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
};

export default Component;
