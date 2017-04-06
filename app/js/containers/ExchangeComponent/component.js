import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

class ExchangeComponent extends React.Component {

  getExchangeableAssets() {
    return this.props.balances.map(
      balance =>
        <option
          key={balance.asset_uuid}
          value={balance.asset_uuid}
        >
          {balance.asset_shortname}
        </option>
    );
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
          <label htmlFor="fromAmount">From Amount</label>
          <Field
            name="fromAmount"
            component="input"
            type="number"
          />
          <label htmlFor="fromCurrency">From Currency</label>
          <Field
            name="fromCurrency"
            component="select"
          >
            {this.getExchangeableAssets()}
          </Field>
          <label htmlFor="toAmount">To Amount</label>
          <Field
            name="toAmount"
            component="input"
            type="number"
          />
          <label htmlFor="toCurrency">To Currency</label>
          <Field
            name="toCurrency"
            component="select"
          >
            {this.getExchangeableAssets()}
          </Field>
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
  ...propTypes,
};

export default ExchangeComponent;
