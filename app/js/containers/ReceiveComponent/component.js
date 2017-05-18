import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import AssetSelector from 'js/components/ui/AssetSelector';
import OperationButton from 'js/components/ui/OperationButton';
import AssetIcon from 'js/containers/AssetIcon';

import ReceiveDeposit from '../ReceiveDeposit';
import styles from './style.scss';

class ReceiveComponent extends React.Component {
  getReceivableAssets() {
    return this.props.balances.map(b => b.asset);
  }

  render() {
    const {
      handleSubmit,
      submitting,
      pristine,
      getDepositLaunched,
      balance,
    } = this.props;

    if (getDepositLaunched) {
      return <ReceiveDeposit />;
    }

    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <p className={styles.choose}>Choose the currency that you want to receive :</p>
          <div className={styles.asset}>
            <Field
              name="assetUuid"
              component={AssetSelector}
              assets={this.getReceivableAssets()}
            />
            {balance &&
            <AssetIcon balance={balance}/>
            }
          </div>
          <OperationButton
            onClick={handleSubmit}
            label="Generate address"
            disabled={pristine || submitting}
            primary active
          />
        </form>
      </div>
    );
  }
}

ReceiveComponent.propTypes = {
  balance: PropTypes.object,
  balances: PropTypes.array.isRequired,
  getDepositLaunched: PropTypes.bool.isRequired,
  ...propTypes,
};

export default ReceiveComponent;
