import {
  ASYNC_OPERATION,
  ASYNC_GET_DEPOSIT,
} from 'js/constants/asyncActions';
import { AsyncActions } from 'js/helpers/asyncActions';
import { setActionMode } from 'js/business/ui/actions';
import { selAccount, selKeypair } from 'js/business/account/selectors';

import { get, send, exchange } from './services';

export const OPERATIONS = {
  SEND: 'send',
  RECEIVE: 'receive',
  EXCHANGE: 'exchange',
};

export const resetOperation = () => (dispatch) => {
  dispatch(AsyncActions.reset(ASYNC_OPERATION));
  dispatch(setActionMode(null));
};

export const delayResetOperation = () => (dispatch) => {
  setTimeout(() => {
    dispatch(resetOperation());
  }, 5000);
};

export const sendOperation = formData => (dispatch, getState) => {
  dispatch(AsyncActions.startFetch(ASYNC_OPERATION));
  const state = getState();
  const keypair = selKeypair(state);
  // TODO Manage native

  return send({ formData, keypair })
    .then((data) => {
      dispatch(AsyncActions.successFetch(ASYNC_OPERATION, data));
      // dispatch(delayResetOperation());
    })
    .catch((error) => {
      console.error(error);
      dispatch(AsyncActions.errorFetch(ASYNC_OPERATION, error));
      throw error;
    });
};


export const exchangeOperation = formData => (dispatch, getState) => {
  dispatch(AsyncActions.startFetch(ASYNC_OPERATION));
  const state = getState();
  const keypair = selKeypair(state);

  return exchange({ formData, keypair })
    .then((data) => {
      dispatch(AsyncActions.successFetch(ASYNC_OPERATION, data));
      // dispatch(delayResetOperation());
    })
    .catch((error) => {
      console.error(error);
      dispatch(AsyncActions.errorFetch(ASYNC_OPERATION, error));
      throw error;
    });
};

export const resetDepositAddress = () => (dispatch) => {
  dispatch(AsyncActions.reset(ASYNC_GET_DEPOSIT));
  dispatch(setActionMode(null));
};

export const getDepositAddress = asset => (dispatch, getState) => {
  dispatch(AsyncActions.startFetch(ASYNC_GET_DEPOSIT));
  const state = getState();
  const keypair = selKeypair(state);
  // TODO Manage native

  return get({ asset, keypair })
    .then((depositAddress) => {
      dispatch(AsyncActions.successFetch(ASYNC_GET_DEPOSIT, depositAddress));
    })
    .catch((error) => {
      console.error(error);
      dispatch(AsyncActions.errorFetch(ASYNC_GET_DEPOSIT, error));
      throw error;
    });
};
