import { StellarTools } from 'stellar-toolkit';
import { Keypair } from 'stellar-sdk';

import { AsyncActions } from 'js/helpers/asyncActions';
import { ASYNC_FETCH_ACCOUNT } from 'js/constants/asyncActions';
import { selKeypair } from 'js/business/account/selectors';
import * as AccountActions from './actions';

export const setPublicAddress = address => (dispatch) => {
  dispatch(AsyncActions.startLoading(ASYNC_FETCH_ACCOUNT));

  StellarTools.resolveAddress(address)
    .then((resolved) => {
      const keypair = StellarTools.KeypairInstance({ publicKey: resolved.account_id });
      dispatch(AccountActions.setKeypair(keypair));
      dispatch(AsyncActions.stopLoading(ASYNC_FETCH_ACCOUNT));
    })
    .catch((e) => {
      console.error(e);
      dispatch(AsyncActions.stopLoading(ASYNC_FETCH_ACCOUNT));
    });
};

export const setPrivateSecret = secret => (dispatch, getState) => {
  const state = getState();
  const currentKeypair = selKeypair(state);
  try {
    const newKeypair = Keypair.fromSecret(secret);
    if (newKeypair.publicKey() !== currentKeypair.publicKey()) {
      throw new Error('Keypair from secret is different from current account');
    }
    dispatch(AccountActions.setKeypair(newKeypair));
  } catch (e) {
    console.error(e);
  }
};

export const unsetPrivateSecret = () => (dispatch, getState) => {
  const state = getState();
  const currentKeypair = selKeypair(state);
  const newKeypair = Keypair.fromPublicKey(currentKeypair.publicKey());
  dispatch(AccountActions.setKeypair(newKeypair));
};

export const unsetAccount = () => (dispatch) => {
  dispatch(AccountActions.setKeypair(null));
};
