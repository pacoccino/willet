import {
  ASYNC_OPERATION,
  ASYNC_GET_DEPOSIT,
} from 'js/constants/asyncActions';
import { AsyncActions } from 'js/helpers/asyncActions';
import { setActionMode } from 'js/business/ui/actions';
import { selKeypair } from 'js/business/account/selectors';

import { Wilson } from 'stellar-toolkit';

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

export const sendOperation = formData => (dispatch) => {
  dispatch(AsyncActions.startFetch(ASYNC_OPERATION));
  setTimeout(() => {
    dispatch(AsyncActions.successFetch(ASYNC_OPERATION, `Send success :${JSON.stringify(formData)}`));
    dispatch(delayResetOperation());
  }, 2000);
};


export const exchangeOperation = formData => (dispatch) => {
  dispatch(AsyncActions.startFetch(ASYNC_OPERATION));
  setTimeout(() => {
    dispatch(AsyncActions.errorFetch(ASYNC_OPERATION, `Exchange error :${JSON.stringify(formData)}`));
    dispatch(delayResetOperation());
  }, 2000);
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

  Wilson.anchorDeposit({
    code: asset.getCode(),
    issuer: asset.getIssuer(),
    address: keypair.publicKey(),
  }).then(depositAddress => {
    dispatch(AsyncActions.successFetch(ASYNC_GET_DEPOSIT, depositAddress));
  });
};
