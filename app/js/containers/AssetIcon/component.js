import React, { PropTypes } from 'react';

import { findAsset } from 'js/business/wilson/services';
import styles from './style.scss';

function AssetIcon({ balance }) {
  const { wilsonAsset } = balance;

  let symbol, code;
  if(wilsonAsset) {
    symbol = wilsonAsset.symbol;
    code = wilsonAsset.code;
  } else {
    if(balance.asset.isNative()) {
      symbol = 'L';
      code = 'XLM'
    } else {
      symbol = balance.asset.getCode()[0];
      code = balance.asset.getCode();
    }
  }
  return (
    <span className={styles.symbol + ' ' + styles['symbol-'+code]}>{symbol}</span>
  );
}

AssetIcon.propTypes = {
  balance: PropTypes.object.isRequired,
};

export default AssetIcon;
