import React, { PropTypes } from 'react';

import Separator from 'js/components/ui/Separator';
import BalanceCurrency from '../BalanceCurrency';
import styles from './style.scss';

import ActionsMenu from '../ActionsMenu';

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
      <div className={styles.content}>
        <Separator label="Your wallets" />
        <div className={styles.balances}>
          {
            balances.map(
              (balance, i) =>
                <BalanceCurrency key={i} balance={balance} />,
            )
          }
        </div>
      </div>
      <div className={styles.actionsContainer}>
        <ActionsMenu />
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
