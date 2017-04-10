import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import { AssetSelector } from 'js/components/ui/AssetSelector';

import ReceiveDeposit from '../ReceiveDeposit';

class ReceiveComponent extends React.Component {
  getReceivableAssets() {
    return this.props.balances.filter(b => !!b.knownAsset).map(b => b.asset);
  }

  render() {
    const {
      handleSubmit,
      submitting,
      getDepositLaunched,
    } = this.props;

    if (getDepositLaunched) {
      return <ReceiveDeposit />;
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="currency">Currency</label>
          <Field
            name="currency"
            component={AssetSelector}
            assets={this.getReceivableAssets()}
          />
          <button type="submit" disabled={submitting}>
            Generate address
          </button>
        </form>
      </div>
    );
  }
}

ReceiveComponent.propTypes = {
  balances: PropTypes.array.isRequired,
  getDepositLaunched: PropTypes.bool.isRequired,
  ...propTypes,
};

export default ReceiveComponent;
