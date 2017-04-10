export const RESET_ACCOUNT = 'account:reset';
export const SET_KEYPAIR = 'account:set-keypair';
export const SET_ACCOUNT = 'account:set-account';
export const SET_FEDERATION_ADDRESS = 'account:set-federation-address';

export function resetAccount() {
  return {
    type: RESET_ACCOUNT,
  };
}

export function setKeypair(keypair) {
  return {
    type: SET_KEYPAIR,
    keypair,
  };
}

export function setAccount(account) {
  return {
    type: SET_ACCOUNT,
    account,
  };
}


export function setFederationName(stellar_address) {
  return {
    type: SET_FEDERATION_ADDRESS,
    stellar_address,
  };
}
