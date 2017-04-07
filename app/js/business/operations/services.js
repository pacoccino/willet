import { StellarOperations, Wilson } from 'stellar-toolkit';

// TODO get source account at sending

export const get = ({ asset, keypair }) =>
  Wilson.anchorDeposit({
    code: asset.getCode(),
    issuer: asset.getIssuer(),
    address: keypair.publicKey(),
  });

export const send = ({ formData, keypair, sourceAccount }) =>
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
    })({
      keypair,
      sourceAccount,
    }));

export const exchange = () => Promise.resolve();
