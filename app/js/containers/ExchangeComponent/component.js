import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import { StellarStats } from 'stellar-toolkit';
import { AssetSelector } from 'js/components/ui/AssetSelector';

class ExchangeComponent extends React.Component {

  getExchangeableAssets() {
    return this.props.balances.map(b => b.asset);
  }

  onChangeToAmount(e, newValue) {
    const {
      sourceAssetUuid,
      destinationAssetUuid,
    } = this.props.formValues;
    const account_id = this.props.account.id;

    const sourceAsset = this.getExchangeableAssets()
      .find(a => a.uuid === sourceAssetUuid);
    const destinationAsset = this.getExchangeableAssets()
      .find(a => a.uuid === destinationAssetUuid);

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
    } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="sendMax">From Amount</label>
          <Field
            name="sendMax"
            component="input"
            type="number"
          />
          <label htmlFor="sourceAsset">From Currency</label>
          <Field
            name="sourceAssetUuid"
            component={AssetSelector}
            assets={this.getExchangeableAssets()}
          />
          <label htmlFor="destinationAmount">To Amount</label>
          <Field
            name="destinationAmount"
            component="input"
            type="number"
            onChange={::this.onChangeToAmount}
          />
          <label htmlFor="destinationAsset">To Currency</label>
          <Field
            name="destinationAssetUuid"
            component={AssetSelector}
            assets={this.getExchangeableAssets()}
          />
          <button type="submit" disabled={pristine || submitting}>
            Exchange
          </button>
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
