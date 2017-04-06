import { createSelector } from 'reselect';
import { asyncSelector } from 'js/helpers/asyncActions/selectors';

import {
  ASYNC_OPERATION,
} from 'js/constants/asyncActions';

export const selOperation = asyncSelector(ASYNC_OPERATION);
export const selOperationLaunched = createSelector(
  selOperation,
  operation => !!(operation.isLoading || operation.data || operation.error)
);
