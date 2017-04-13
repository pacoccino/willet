import React, { PropTypes } from 'react';

import BalanceCurrency from '../BalanceCurrency';
import styles from './style.scss';

function BalancesViewer({ loggedPublic, accountLoaded, balances }) {
  if (loggedPublic && !accountLoaded) {
    return (
      <div>
        <p>Loading balances...</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <span className={styles.text}>Your wallets</span>
      </div>
      <div className={styles.balances}>
        {
          balances.map(
            (balance, i) =>
              <BalanceCurrency key={i} balance={balance} />,
          )
        }
      </div>
    </div>
  );
}

BalancesViewer.propTypes = {
  balances: PropTypes.array.isRequired,
  accountLoaded: PropTypes.bool.isRequired,
  loggedPublic: PropTypes.bool.isRequired,
};

export default BalancesViewer;
