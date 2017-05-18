import { StellarServer, StellarTools, StellarAccountManager, Federation } from 'stellar-toolkit';
import { Keypair } from 'stellar-sdk';
import * as routes from 'js/constants/routes';
import { push } from 'react-router-redux';

import { AsyncActions } from 'js/helpers/asyncActions';
import { ASYNC_FETCH_ACCOUNT, ASYNC_CHANGE_PASSWORD } from 'js/constants/asyncActions';
import { selKeypair, selAccount } from 'js/business/account/selectors';
import * as AccountActions from './actions';
import { setTrustedAsset, getStellarAddress } from './services';

export const login = ({ username, password }) => (dispatch) => {
  dispatch(AsyncActions.startLoading(ASYNC_FETCH_ACCOUNT));
  const stellar_address = getStellarAddress(username);

  return StellarTools.resolveAddress(stellar_address)
    .then(resolved => resolved.account_id)
    .then(publicKey => StellarServer.getAccount(publicKey))
    .then((account) => {
      const isSeed = StellarTools.validSeed(password);
      let keypair;
      if (isSeed) {
        keypair = Keypair.fromSecret(secret);
      } else {
        const seed = StellarAccountManager.extractSeed(account, password);
        keypair = Keypair.fromSecret(seed);
      }

      dispatch(AccountActions.setAccount(account));
      dispatch(AccountActions.setFederationName(username));
      dispatch(AccountActions.setKeypair(keypair));

      dispatch(push(routes.Root));
      dispatch(AsyncActions.stopLoading(ASYNC_FETCH_ACCOUNT));
      return keypair;
    })
    .catch((e) => {
      console.error(e);
      dispatch(AsyncActions.stopLoading(ASYNC_FETCH_ACCOUNT));
      throw e;
    });
};

export const loginWithSeed = seed => (dispatch) => {
  dispatch(AsyncActions.startLoading(ASYNC_FETCH_ACCOUNT));
  const keypair = Keypair.fromSecret(seed);

  return Promise.resolve(keypair.publicKey())
    .then(publicKey => StellarServer.getAccount(publicKey))
    .then((account) => {
      dispatch(AccountActions.setAccount(account));
      dispatch(AccountActions.setFederationName('Anonymous'));
      dispatch(AccountActions.setKeypair(keypair));

      dispatch(push(routes.Root));
      dispatch(AsyncActions.stopLoading(ASYNC_FETCH_ACCOUNT));
      return keypair;
    })
    .catch((e) => {
      console.error(e);
      dispatch(AsyncActions.stopLoading(ASYNC_FETCH_ACCOUNT));
      throw e;
    });
};

export const setUsername = username => (dispatch) => {
  dispatch(AsyncActions.startLoading(ASYNC_FETCH_ACCOUNT));
  const stellar_address = getStellarAddress(username);

  return StellarTools.resolveAddress(stellar_address)
    .then((resolved) => {
      const keypair = Keypair.fromPublicKey(resolved.account_id);
      dispatch(AccountActions.setFederationName(username));
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

export const setPrivateSecret = secret => async (dispatch, getState) => {
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

export const createAccount = ({ username, password }) => dispatch =>
  Federation.federationCreate(getStellarAddress(username))
    .then((keypair) => {
      StellarAccountManager
        .setAccountSeed(keypair, password)
        .then(() => setTrustedAsset(keypair))
        .then(() => keypair);
    });

export const changePassword = ({ password }) => (dispatch, getState) => {
  dispatch(AsyncActions.startLoading(ASYNC_CHANGE_PASSWORD));
  const state = getState();
  const keypair = selKeypair(state);

  return StellarAccountManager.setAccountSeed(keypair, password)
    .then(() => {
      dispatch(AsyncActions.stopLoading(ASYNC_CHANGE_PASSWORD));
    }).catch((e) => {
      console.error(e);
      dispatch(AsyncActions.stopLoading(ASYNC_CHANGE_PASSWORD));
      throw e;
    });
};
export const changeUsername = username => (dispatch, getState) => {
  dispatch(AsyncActions.startLoading(ASYNC_CHANGE_PASSWORD));
  const state = getState();
  const keypair = selKeypair(state);
  const stellar_address = getStellarAddress(username);

  return Federation.federationRegister({
    stellar_address,
    keypair,
  }).then(() => {
    dispatch(AccountActions.setFederationName(username));
    dispatch(AsyncActions.stopLoading(ASYNC_CHANGE_PASSWORD));
  }).catch((e) => {
    console.error(e);
    dispatch(AsyncActions.stopLoading(ASYNC_CHANGE_PASSWORD));
    throw e;
  });
};
