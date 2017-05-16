import React, { PropTypes } from 'react';

import AssetIcon from 'js/components/ui/AssetIcon';
import styles from './style.scss';

function TrustableAsset({ wilsonAsset, trustAsset }) {
  const { code } = wilsonAsset;
  return (
    <div className={styles.container}>
      <a className={styles.add} onClick={trustAsset}>+ Add to your wallets</a>
      <AssetIcon knownAsset={wilsonAsset} />
      <span className={styles.code + ' ' + styles['code-'+code]}>{code}</span>
    </div>
  );
}

TrustableAsset.propTypes = {
  trustAsset: PropTypes.func.isRequired,
  wilsonAsset: PropTypes.object.isRequired,
};

export default TrustableAsset;
