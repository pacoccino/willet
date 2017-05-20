import React, { PropTypes } from 'react';
import { StellarTools } from 'stellar-toolkit';

import AssetIcon from 'js/containers/AssetIcon';
import styles from './style.scss';

function TrustableAsset({ wilsonAsset, trustAsset }) {
  const { code } = wilsonAsset;

  // TODO: do it better
  const balance = {
    balance: 0,
    wilsonAsset,
    asset: StellarTools.AssetInstance({
      asset_code: wilsonAsset.code,
      asset_issuer: wilsonAsset.issuer,
    }),
  };
  return (
    <div className={styles.container}>
      <a className={styles.add} onClick={trustAsset}>+ Add to your wallets</a>
      <AssetIcon balance={balance} />
      <span className={styles.code + ' ' + styles['code-'+code]}>{code}</span>
    </div>
  );
}

TrustableAsset.propTypes = {
  trustAsset: PropTypes.func.isRequired,
  wilsonAsset: PropTypes.object.isRequired,
};

export default TrustableAsset;
