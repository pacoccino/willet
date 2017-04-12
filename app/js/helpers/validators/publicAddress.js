import { StellarTools } from 'stellar-toolkit';

export default function validatePublicAddress(address) {
  return StellarTools.validDestination(address);
}
