import { StellarOperations, Wilson } from 'stellar-toolkit';

export const get = ({ asset, keypair }) => {
  if (asset.isNative()) {
    const pk = keypair.publicKey();
    return Promise.resolve({
      type: 'stellar',
      qr_code: pk,
      deposit_address: pk,
    });
  }
  return Wilson.anchorDeposit({
    code: asset.getCode(),
    issuer: asset.getIssuer(),
    address: keypair.publicKey(),
  });
};

export const send = ({ formData, keypair }) => {
  const { amount, asset, destination } = formData;

  if (asset.isNative()) {
    return StellarOperations.sendPayment({
      asset,
      destination,
      amount,
    })(keypair);
  }

  return Wilson.anchorWithdraw({
    code: asset.getCode(),
    issuer: asset.getIssuer(),
    address: destination,
  }).then(withdrawAddress =>
    StellarOperations.sendPayment({
      asset,
      destination: withdrawAddress.account_id,
      amount,
      memo: {
        type: withdrawAddress.memo_type,
        value: withdrawAddress.memo,
      },
    })(keypair));
};

export const exchange = ({ formData, keypair }) =>
  StellarOperations.sendPathPayment({
    asset_source: formData.asset_source,
    asset_destination: formData.asset_destination,
    destination: keypair.publicKey(),
    amount_destination: formData.amount_destination,
    max_amount: formData.max_amount,
  })(keypair);
