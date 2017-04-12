import { Wilson } from 'stellar-toolkit';

import { AsyncActions } from 'js/helpers/asyncActions';
import { ASYNC_KNOWN_ANCHORS } from 'js/constants/asyncActions';

export const getKnownAnchors = () => (dispatch) => {
  dispatch(AsyncActions.startFetch(ASYNC_KNOWN_ANCHORS));
  return Wilson.anchorList().then((anchorList) => {
    dispatch(AsyncActions.successFetch(ASYNC_KNOWN_ANCHORS, anchorList));
  }).catch((e) => {
    dispatch(AsyncActions.errorFetch(ASYNC_KNOWN_ANCHORS, e));
    throw e;
  });
};
