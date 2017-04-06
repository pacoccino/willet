import { StellarTools } from 'stellar-toolkit';

export async function validateAddress(address) {
  const isSeed = StellarTools.validSeed(address);
  if (isSeed) {
    return 'seed';
  }
  const isPublicKey = StellarTools.validPk(address);
  if (isPublicKey) {
    return 'pk';
  }

  return StellarTools.resolveAddress(address)
    .then(() => {
      return 'federation';
    })
    .catch(() => {
      return 'error';
    });
}