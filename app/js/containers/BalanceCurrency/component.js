import React, { PropTypes } from 'react';
import DecJS from 'decimal.js';

import AssetIcon from 'js/containers/AssetIcon';
import { findAsset } from 'js/business/wilson/services';
import styles from './style.scss';

const toDP = b => (new DecJS(b)).toDP().toString();

function BalanceCurrency({ balance }) {
  const amount = toDP(balance.balance);
  const code = balance.asset.shortName;
  return (
    <div className={styles.container}>
      <span className={styles.amount}>{amount}</span>
      <AssetIcon balance={balance} />
      <span className={styles.code + ' ' + styles['code-'+code]}>{code}</span>
    </div>
  );
}

BalanceCurrency.propTypes = {
  balance: PropTypes.object.isRequired,
};

export default BalanceCurrency;
