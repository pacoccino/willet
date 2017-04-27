import React, { PropTypes } from 'react';
import DecJS from 'decimal.js';

import AssetIcon from 'js/components/ui/AssetIcon';
import { findAsset } from 'js/business/wilson/services';
import styles from './style.scss';

const toDP = b => (new DecJS(b)).toDP().toString();

function BalanceCurrency({ balance, knownAnchors }) {
  const knownAsset = balance.knownAsset;
  const amount = toDP(balance.balance);
  const code = knownAsset.code;
  return (
    <div className={styles.container}>
      <span className={styles.amount}>{amount}</span>
      <AssetIcon knownAsset={knownAsset} />
      <span className={styles.code + ' ' + styles['code-'+code]}>{code}</span>
    </div>
  );
}

BalanceCurrency.propTypes = {
  balance: PropTypes.object.isRequired,
  knownAnchors: PropTypes.array.isRequired,
};

export default BalanceCurrency;
