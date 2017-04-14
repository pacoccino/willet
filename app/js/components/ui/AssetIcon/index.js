import React, { PropTypes } from 'react';

import { findAsset } from 'js/business/wilson/services';
import styles from './style.scss';

function BalanceCurrency({ knownAsset }) {
  const { symbol, code } = knownAsset;
  return (
    <span className={styles.symbol + ' ' + styles['symbol-'+code]}>{symbol}</span>
  );
}

BalanceCurrency.propTypes = {
  knownAsset: PropTypes.object.isRequired,
};

export default BalanceCurrency;
