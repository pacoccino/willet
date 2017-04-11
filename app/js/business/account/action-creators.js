import { StellarTools, StellarAccountManager } from 'stellar-toolkit';
import { Keypair } from 'stellar-sdk';
import { FEDERATION_DOMAIN } from 'js/config';

import { AsyncActions } from 'js/helpers/asyncActions';
import { ASYNC_FETCH_ACCOUNT } from 'js/constants/asyncActions';
import { selKeypair, selAccount } from 'js/business/account/selectors';
import * as AccountActions from './actions';

export const setUsername = username => (dispatch) => {
  dispatch(AsyncActions.startLoading(ASYNC_FETCH_ACCOUNT));
  const stellar_address = `${username}*${FEDERATION_DOMAIN}`;

  return StellarTools.resolveAddress(stellar_address)
    .then((resolved) => {
      const keypair = Keypair.fromPublicKey(resolved.account_id);
      dispatch(AccountActions.setFederationName(address));
      dispatch(AccountActions.setKeypair(keypair));
      dispatch(AsyncActions.stopLoading(ASYNC_FETCH_ACCOUNT));
      return keypair;
    })
    .catch((e) => {
      console.error(e);
      dispatch(AsyncActions.stopLoading(ASYNC_FETCH_ACCOUNT));
      throw e;
    });
};

export const setPublicAddressOmni = addressToResolve => (dispatch) => {
  dispatch(AsyncActions.startLoading(ASYNC_FETCH_ACCOUNT));

  return Promise.resolve(addressToResolve).then((address) => {
    const isSeed = StellarTools.validSeed(address);
    if (isSeed) {
      return Keypair.fromSecret(address);
    }
    const isPublicKey = StellarTools.validPk(address);
    if (isPublicKey) {
      return Keypair.fromPublicKey(address);
    }
    return StellarTools.resolveAddress(address)
      .then((resolved) => {
        dispatch(AccountActions.setFederationName(address));
        return Keypair.fromPublicKey(resolved.account_id);
      });
  }).then((keypair) => {
    dispatch(AccountActions.setKeypair(keypair));
    dispatch(AsyncActions.stopLoading(ASYNC_FETCH_ACCOUNT));
  }).catch((e) => {
    console.error(e);
    dispatch(AsyncActions.stopLoading(ASYNC_FETCH_ACCOUNT));
    throw e;
  });
};

export const setPrivateSecret = secret => (dispatch, getState) => {
  const state = getState();
  const account = selAccount(state);
  const currentKeypair = selKeypair(state);
  try {
    const isSeed = StellarTools.validSeed(secret);
    if (isSeed) {
      const newKeypair = Keypair.fromSecret(secret);
      if (currentKeypair && newKeypair.publicKey() !== currentKeypair.publicKey()) {
        throw new Error('Keypair from secret is different from current account');
      }
      return dispatch(AccountActions.setKeypair(newKeypair));
    }

    const seed = StellarAccountManager.extractSeed(account, secret);
    const newKeypair = Keypair.fromSecret(seed);
    return dispatch(AccountActions.setKeypair(newKeypair));
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const unsetPrivateSecret = () => (dispatch, getState) => {
  const state = getState();
  const currentKeypair = selKeypair(state);
  const newKeypair = Keypair.fromPublicKey(currentKeypair.publicKey());
  dispatch(AccountActions.setKeypair(newKeypair));
};

export const unsetAccount = () => (dispatch) => {
  dispatch(AccountActions.resetAccount());
};
