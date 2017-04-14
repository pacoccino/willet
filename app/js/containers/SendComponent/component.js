import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import Input from 'js/components/ui/Input';

import OperationButton from 'js/components/ui/OperationButton';
import CurrencyAmount from 'js/components/ui/CurrencyAmount';

import styles from './style.scss';

class SendComponent extends React.Component {
  getSendableAssets() {
    return this.props.balances.map(b => b.asset);
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      balance,
    } = this.props;

    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <CurrencyAmount
            assets={this.getSendableAssets()}
            balance={balance}
          />
          <Field
            name="destination"
            component={Input}
            type="text"
            label="Destination"
            white
          />
          <OperationButton
            onClick={handleSubmit}
            label="Send"
            disabled={pristine || submitting}
            primary active
          />
        </form>
      </div>
    );
  }
}

SendComponent.propTypes = {
  balances: PropTypes.array.isRequired,
  balance: PropTypes.object,
  ...propTypes,
};

export default SendComponent;
