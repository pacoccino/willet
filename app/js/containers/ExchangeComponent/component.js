import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import { StellarStats } from 'stellar-toolkit';
import AssetSelector from 'js/components/ui/AssetSelector';
import AssetIcon from 'js/components/ui/AssetIcon';
import Button from 'js/components/ui/Button';

import exchangeIcon from 'styles/icons/exchange.svg';

import styles from './style.scss';

class ExchangeComponent extends React.Component {

  getExchangeableAssets() {
    return this.props.balances.map(b => b.asset);
  }

  onChangeToAmount(e, newValue) {
    const {
      sourceAsset,
      destinationAsset,
    } = this.props.selectedAssets;
    const account_id = this.props.account.id;

    StellarStats.getExchangeRateFromAutoPath({
      account_id,
      sourceAsset,
      destinationAsset,
      destinationAmount: newValue,
    }).then(r => this.props.change('sendMax', r.sendMax));
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      selectedAssets,
    } = this.props;
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.asset}>
              <Field
                name="sourceAssetUuid"
                component={AssetSelector}
                assets={this.getExchangeableAssets()}
              />
            </div>
            {selectedAssets.sourceAsset &&
            <div className={styles.amount}>
              <Field
                name="sendMax"
                component="input"
                type="number"
                placeholder="0"
              />
            </div>
            }
            {selectedAssets.sourceAsset &&
            <div className={styles.assetIcon}>
              <AssetIcon knownAsset={selectedAssets.sourceAsset.knownAsset}/>
            </div>
            }
          </div>
          <div className={styles.separator}>
            <div className={styles.line}/>
            <div className={styles.circle}>
              <img src={exchangeIcon} className={styles.exchangeIcon} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.asset}>
              <Field
                name="destinationAssetUuid"
                component={AssetSelector}
                assets={this.getExchangeableAssets()}
              />
            </div>
            {selectedAssets.destinationAsset &&
            <div className={styles.amount}>
              <Field
                name="destinationAmount"
                component="input"
                type="number"
                placeholder="0"
                onChange={::this.onChangeToAmount}
              />
            </div>
            }
            {selectedAssets.destinationAsset &&
            <div className={styles.assetIcon}>
              <AssetIcon knownAsset={selectedAssets.destinationAsset.knownAsset}/>
            </div>
            }
          </div>
          <div className={styles.submit}>
            <Button label="Exchange" disabled={pristine || submitting} />
          </div>
        </form>
      </div>
    );
  }
}

ExchangeComponent.propTypes = {
  balances: PropTypes.array.isRequired,
  formValues: PropTypes.object,
  ...propTypes,
};

export default ExchangeComponent;
