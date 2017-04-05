export const RESET_ACCOUNT = 'account:reset';
export const SET_KEYPAIR = 'account:set-keypair';
export const SET_ACCOUNT = 'account:set-account';

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
