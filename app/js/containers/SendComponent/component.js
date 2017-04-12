import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import { AssetSelector } from 'js/components/ui/AssetSelector';

class SendComponent extends React.Component {
  getSendableAssets() {
    return this.props.balances.map(b => b.asset);
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
          <label htmlFor="amount">Amount</label>
          <Field
            name="amount"
            component="input"
            type="number"
          />
          <label htmlFor="currency">Currency</label>
          <Field
            name="currency"
            component={AssetSelector}
            assets={this.getSendableAssets()}
          />
          <label htmlFor="destination">Destination</label>
          <Field
            name="destination"
            component="input"
            type="text"
          />
          <button type="submit" disabled={pristine || submitting}>
            Send
          </button>
        </form>
      </div>
    );
  }
}

SendComponent.propTypes = {
  balances: PropTypes.array.isRequired,
  ...propTypes,
};

export default SendComponent;
