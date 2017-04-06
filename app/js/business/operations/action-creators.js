// import * as StellarToolkit from 'stellar-toolkit';

import {
  ASYNC_OPERATION,
  ASYNC_GET_DEPOSIT,
} from 'js/constants/asyncActions';
import { AsyncActions } from 'js/helpers/asyncActions';
import { setActionMode } from 'js/business/ui/actions';

// const { StellarOperations, StellarServer, StellarTools } = StellarToolkit;
export const OPERATIONS = {
  SEND: 'send',
  RECEIVE: 'receive',
  EXCHANGE: 'exchange',
};

export const sendOperation = formData => (dispatch) => {
  dispatch(AsyncActions.startFetch(ASYNC_OPERATION));
  setTimeout(() => {
    dispatch(AsyncActions.successFetch(ASYNC_OPERATION, 'Send success'));
    dispatch(delayResetOperation());
  }, 2000);
};


export const exchangeOperation = formData => (dispatch) => {
  dispatch(AsyncActions.startFetch(ASYNC_OPERATION));
  setTimeout(() => {
    dispatch(AsyncActions.errorFetch(ASYNC_OPERATION, 'Exchange error'));
    dispatch(delayResetOperation());
  }, 2000);
};

export const delayResetOperation = () => (dispatch) => {
  setTimeout(() => {
    dispatch(resetOperation());
  }, 5000);
};

export const resetOperation = () => (dispatch) => {
  dispatch(AsyncActions.reset(ASYNC_OPERATION));
  dispatch(setActionMode(null));
};

export const getDepositAddress = asset => (dispatch) => {
  dispatch(AsyncActions.startFetch(ASYNC_GET_DEPOSIT));
  setTimeout(() => {
    const depositAddress = {
      type: 'stellar',
      address: 'GDG4LKMTODR227EQQXKHAWIOYBLNGXRJEW6TJTNQ766UUGVMFWDGAVT6',
    };
    dispatch(AsyncActions.successFetch(ASYNC_GET_DEPOSIT, depositAddress));
  }, 2000);
};

export const resetDepositAddress = () => (dispatch) => {
  dispatch(AsyncActions.reset(ASYNC_GET_DEPOSIT));
  dispatch(setActionMode(null));
};
