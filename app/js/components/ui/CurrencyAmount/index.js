import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import { StellarTools } from 'stellar-toolkit';

import AssetSelector from 'js/components/ui/AssetSelector';
import AssetIcon from 'js/components/ui/AssetIcon';

import styles from './style.scss';

export default function CurrencyAmount({ assets, balance, formPrefix }) {
  const formPrefixC = formPrefix ? `${formPrefix}.` : '';
  return (
    <div className={styles.container}>
      <div className={styles.asset}>
        <Field
          name={`${formPrefixC}assetUuid`}
          component={AssetSelector}
          assets={assets}
        />
      </div>
      {balance &&
      <div className={styles.amount}>
        <Field
          name={`${formPrefixC}amount`}
          component="input"
          type="number"
          placeholder="0"
          step={StellarTools.STROOP}
        />
      </div>
      }
      {balance &&
      <div className={styles.assetIcon}>
        <AssetIcon knownAsset={balance.knownAsset}/>
      </div>
      }
    </div>
  );
}

CurrencyAmount.propTypes = {
  assets: PropTypes.array.isRequired,
  balance: PropTypes.object,
  formPrefix: PropTypes.string,
};

