import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import AssetSelector from 'js/components/ui/AssetSelector';
import Input from 'js/components/ui/Input';

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
          <Field
            name="amount"
            component={Input}
            type="number"
            label="Amount"
          />
          <label htmlFor="currency">Currency</label>
          <Field
            name="currency"
            component={AssetSelector}
            assets={this.getSendableAssets()}
          />
          <Field
            name="destination"
            component={Input}
            type="text"
            label="Destination"
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
