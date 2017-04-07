import React, { PropTypes } from 'react';

import { findAsset } from 'js/business/wilson/services';

const styles = {
  container: {
    padding: '2em',
  },
};

function BalanceCurrency({ balance, knownAnchors }) {
  let assetSymbol = balance.asset_shortname;
  const knownAsset = findAsset(balance, knownAnchors);
  if(knownAsset) {
    assetSymbol = knownAsset.symbol;
  }
  return (
    <div style={styles.container}>
      <p><b>{balance.balance}</b> {assetSymbol}</p>
    </div>
  );
}

BalanceCurrency.propTypes = {
  balance: PropTypes.object.isRequired,
  knownAnchors: PropTypes.array.isRequired,
};

export default BalanceCurrency;
