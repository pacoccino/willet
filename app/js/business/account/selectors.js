import { createSelector } from 'reselect';
import { selectProperty } from '../../helpers/redux';

import { ASYNC_FETCH_ACCOUNT } from '../../constants/asyncActions';
import { asyncIsLoadingSelector } from '../../helpers/asyncActions/selectors';
import { ACCOUNT_STATE_KEY } from '../../constants/reducerKeys';

export const selAccount = selectProperty([ACCOUNT_STATE_KEY, 'account'], null);
export const setAccountLoading = asyncIsLoadingSelector(ASYNC_FETCH_ACCOUNT);
export const selKeypair = selectProperty([ACCOUNT_STATE_KEY, 'keypair'], null);

export const selLoggedPublic = createSelector(
  selKeypair,
  keypair => (!!keypair)
);
export const selLoggedPrivate = createSelector(
  selKeypair,
  keypair => (!!keypair && keypair.canSign())
);

export const selBalances = createSelector(
  selAccount,
  account => account && account.balances || []
);