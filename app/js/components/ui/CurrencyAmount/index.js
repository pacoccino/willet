import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import { StellarTools } from 'stellar-toolkit';

import AssetSelector from 'js/components/ui/AssetSelector';
import AssetIcon from 'js/containers/AssetIcon';

import styles from './style.scss';

export default function CurrencyAmount({ assets, balance, formPrefix, da = false, onChange }) {
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
          disabled={da}
          onChange={onChange}
          className={da && styles.inputDisabled}
        />
      </div>
      }
      {balance &&
      <div className={styles.assetIcon}>
        <AssetIcon balance={balance} />
      </div>
      }
    </div>
  );
}

CurrencyAmount.propTypes = {
  assets: PropTypes.array.isRequired,
  balance: PropTypes.object,
  formPrefix: PropTypes.string,
  da: PropTypes.bool,
  onChange: PropTypes.func,
};

