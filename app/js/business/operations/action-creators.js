// import * as StellarToolkit from 'stellar-toolkit';

import {
  ASYNC_OPERATION,
} from 'js/constants/asyncActions';
import { AsyncActions } from 'js/helpers/asyncActions';
import { setActionMode } from 'js/business/ui/actions';

// const { StellarOperations, StellarServer, StellarTools } = StellarToolkit;
export const OPERATIONS = {
  SEND: 'send',
  RECEIVE: 'receive',
  EXCHANGE: 'exchange',
};

export const sendOperation = (formData) => (dispatch) => {
  dispatch(AsyncActions.startFetch(ASYNC_OPERATION));
  setTimeout(() => {
    dispatch(AsyncActions.successFetch(ASYNC_OPERATION, 'Send success'));
    dispatch(delayResetOperation());
  }, 2000);
};


export const exchangeOperation = (formData) => (dispatch) => {
  dispatch(AsyncActions.startFetch(ASYNC_OPERATION));
  setTimeout(() => {
    dispatch(AsyncActions.errorFetch(ASYNC_OPERATION, 'Exchange error'));
    dispatch(delayResetOperation());
  }, 2000);
};

export const delayResetOperation = () => dispatch => {
  setTimeout(() => {
    dispatch(resetOperation());
  }, 5000);
};

export const resetOperation = () => dispatch => {
  dispatch(AsyncActions.reset(ASYNC_OPERATION));
  dispatch(setActionMode(null));
};