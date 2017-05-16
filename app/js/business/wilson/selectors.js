import { createSelector } from 'reselect';
import { asyncDataSelector } from 'js/helpers/asyncActions/selectors';

import { selBalances } from '../account/selectors';

import {
  ASYNC_KNOWN_ANCHORS,
} from 'js/constants/asyncActions';

export const selKnownAnchors = asyncDataSelector(ASYNC_KNOWN_ANCHORS, []);

export const selUntrustedAssets = createSelector(
  selKnownAnchors,
  selBalances,
  (knownAnchors, balances) =>
    knownAnchors.filter(knownAnchor =>
      !balances.find(b => (b.asset_code === knownAnchor.code))
    )
);