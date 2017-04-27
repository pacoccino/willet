import React, { PropTypes } from 'react';

import { findAsset } from 'js/business/wilson/services';
import styles from './style.scss';

function AssetIcon({ knownAsset }) {
  const { symbol, code } = knownAsset;
  return (
    <span className={styles.symbol + ' ' + styles['symbol-'+code]}>{symbol}</span>
  );
}

AssetIcon.propTypes = {
  knownAsset: PropTypes.object.isRequired,
};

export default AssetIcon;
