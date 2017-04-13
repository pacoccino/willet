import React, { PropTypes } from 'react';
import DecJS from 'decimal.js';

import { findAsset } from 'js/business/wilson/services';
import styles from './style.scss';

const toDP = b => (new DecJS(b)).toDP().toString();

function BalanceCurrency({ balance, knownAnchors }) {
  const knownAsset = findAsset(balance, knownAnchors);
  const amount = toDP(balance.balance);
  const symbol = knownAsset.symbol;
  const code = balance.asset_code;
  return (
    <div className={styles.container}>
      <span className={styles.amount}>{amount}</span>
      <span className={styles.symbol + ' ' + styles['symbol-'+code]}>{symbol}</span>
      <span className={styles.code + ' ' + styles['code-'+code]}>{code}</span>
    </div>
  );
}

BalanceCurrency.propTypes = {
  balance: PropTypes.object.isRequired,
  knownAnchors: PropTypes.array.isRequired,
};

export default BalanceCurrency;
