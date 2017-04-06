import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import ReceiveDeposit from '../ReceiveDeposit';

class ReceiveComponent extends React.Component {
  getReceivableAssets() {
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
      submitting,
    } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="currency">Currency</label>
          <Field
            name="currency"
            component="select"
          >
            {this.getReceivableAssets()}
          </Field>
          <button type="submit" disabled={submitting}>
            Generate address
          </button>
        </form>
        <ReceiveDeposit />
      </div>
    );
  }
}

ReceiveComponent.propTypes = {
  balances: PropTypes.array.isRequired,
  ...propTypes,
};

export default ReceiveComponent;
