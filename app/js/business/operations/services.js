import { StellarOperations, Wilson } from 'stellar-toolkit';

// TODO get source account at sending

export const get = ({ asset, keypair }) =>
  Wilson.anchorDeposit({
    code: asset.getCode(),
    issuer: asset.getIssuer(),
    address: keypair.publicKey(),
  });

// TODO allow to send to stellar account
export const send = ({ formData, keypair }) =>
  Wilson.anchorWithdraw({
    code: formData.asset.getCode(),
    issuer: formData.asset.getIssuer(),
    address: formData.destination,
  }).then(withdrawAddress =>
    StellarOperations.sendPayment({
      asset: formData.asset,
      destination: withdrawAddress.account_id,
      amount: formData.amount,
      memo: {
        type: withdrawAddress.memo_type,
        value: withdrawAddress.memo,
      },
    })(keypair));

export const exchange = ({ formData, keypair }) =>
  StellarOperations.sendPathPayment({
    asset_source: formData.asset_source,
    asset_destination: formData.asset_destination,
    destination: keypair.publicKey(),
    amount_destination: formData.amount_destination,
    max_amount: formData.max_amount,
  })(keypair);
