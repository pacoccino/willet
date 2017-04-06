import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

class SendComponent extends React.Component {
  getSendableAssets() {
    return this.props.balances.map(
      balance =>
        <option
          key={balance.asset_uuid}
          value={balance.asset_uuid}
        >
          {balance.asset_shortname}
        </option>,
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
          <label htmlFor="amount">Amount</label>
          <Field
            name="amount"
            component="input"
            type="number"
          />
          <label htmlFor="currency">Currency</label>
          <Field
            name="currency"
            component="select"
          >
            {this.getSendableAssets()}
          </Field>
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
