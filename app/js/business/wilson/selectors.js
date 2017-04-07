import { asyncDataSelector } from 'js/helpers/asyncActions/selectors';

import {
  ASYNC_KNOWN_ANCHORS,
} from 'js/constants/asyncActions';

export const selKnownAnchors = asyncDataSelector(ASYNC_KNOWN_ANCHORS);