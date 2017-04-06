import { asyncSelector, asyncStartedSelector } from 'js/helpers/asyncActions/selectors';

import {
  ASYNC_OPERATION,
  ASYNC_GET_DEPOSIT,
} from 'js/constants/asyncActions';

export const selOperation = asyncSelector(ASYNC_OPERATION);
export const selOperationLaunched = asyncStartedSelector(ASYNC_OPERATION);

export const selDepositAddress = asyncSelector(ASYNC_GET_DEPOSIT);
export const selDepositAddressLaunched = asyncStartedSelector(ASYNC_GET_DEPOSIT);
