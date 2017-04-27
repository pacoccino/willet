import React, { PropTypes } from 'react';
import { propTypes } from 'redux-form';
import { StellarStats } from 'stellar-toolkit';
import CurrencyAmount from 'js/components/ui/CurrencyAmount';
import OperationButton from 'js/components/ui/OperationButton';

import exchangeIcon from 'styles/icons/exchange.svg';

import styles from './style.scss';

const RATE = 4;
class ExchangeComponent extends React.Component {

  getExchangeableAssets() {
    return this.props.balances.map(b => b.asset);
  }

  onChangeFromAmount(e, newValue) {
    this.props.change('destination.amount', newValue * RATE);

  }

  onChangeToAmount(e, newValue) {
    this.props.change('source.amount', newValue / RATE);
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      selectedBalances,
    } = this.props;
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <CurrencyAmount
            assets={this.getExchangeableAssets()}
            balance={selectedBalances.sourceBalance}
            formPrefix="source"
            onChange={::this.onChangeFromAmount}
          />
          <div className={styles.separator}>
            <div className={styles.line}/>
            <div className={styles.circle}>
              <img src={exchangeIcon} className={styles.exchangeIcon} />
            </div>
          </div>
          <CurrencyAmount
            assets={this.getExchangeableAssets()}
            balance={selectedBalances.destinationBalance}
            formPrefix="destination"
            onChange={::this.onChangeToAmount}
          />
          <OperationButton
            onClick={handleSubmit}
            label="Invest"
            disabled={pristine || submitting}
            primary active
          />
        </form>
      </div>
    );
  }
}

ExchangeComponent.propTypes = {
  balances: PropTypes.array.isRequired,
  formValues: PropTypes.object,
  selectedBalances: PropTypes.object,
  ...propTypes,
};

export default ExchangeComponent;
