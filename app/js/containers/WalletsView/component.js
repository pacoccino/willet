import React, { PropTypes } from 'react';

import Separator from 'js/components/ui/Separator';
import Loader from 'js/components/ui/Loader';
import BalanceCurrency from '../BalanceCurrency';
import TrustableAsset from '../TrustableAsset';
import styles from './style.scss';

import ActionsMenu from '../ActionsMenu';

function BalancesViewer({ loggedPublic, accountLoaded, balances, untrustedAssets }) {
  if (loggedPublic && !accountLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.alertC}>
          <p><b>Attention!</b> <i>Willet</i> is alpha software and is published for proof-of-concept purposes, it should be used with precaution.</p>
        </div>
        <Separator label="Your wallets" />
        <div className={styles.balances}>
          {
            balances.map(
              (balance, i) =>
                <BalanceCurrency key={i} balance={balance} />,
            )
          }
        </div>
        <Separator label="Available assets" />
        <div className={styles.balances}>
          {
            untrustedAssets.map(
              (wilsonAsset, i) =>
                <TrustableAsset key={i} wilsonAsset={wilsonAsset} />,
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
  untrustedAssets: PropTypes.array.isRequired,
  accountLoaded: PropTypes.bool.isRequired,
  loggedPublic: PropTypes.bool.isRequired,
};

export default BalancesViewer;
