import { StellarStreamers } from 'stellar-toolkit';

import { newStream, killStreams } from 'js/helpers/monoStreamer';
import { selKeypair } from 'js/business/account/selectors';
import * as actions from './actions';
import { findAsset } from '../wilson/services';
import { selKnownAnchors } from '../wilson/selectors';

function traceError(e) {
  console.error(e);
}

const stellarStreamerMiddleware = store => next => (action) => {
  switch (action.type) {
    case actions.RESET_ACCOUNT: {
      killStreams();
      break;
    }
    case actions.SET_ACCOUNT: {
      if (!action.account) return;
      const state = store.getState();
      const knownAnchors = selKnownAnchors(state);
      // Add wilson info to balance and remove unknown assets
      action.account.balances = action.account.balances.map(b => // eslint-disable no-param-reassign
        Object.assign({}, b, {
          wilsonAsset: findAsset(b, knownAnchors),
        }))
        .filter(b => !!b.wilsonAsset || b.asset.isNative());
      break;
    }
    case actions.SET_KEYPAIR: {
      const { keypair } = action;
      const state = store.getState();
      const currentKeypair = selKeypair(state);

      if (!keypair || (currentKeypair && keypair.publicKey() === currentKeypair.publicKey())) {
        break;
      }

      try {
        newStream('account',
          StellarStreamers.AccountStream(keypair.publicKey(),
            (streamAccount) => {
              store.dispatch(actions.setAccount(streamAccount));
            }));

      } catch (e) {
        traceError(e);
      }
      break;
    }
  }

  next(action);
};

export default stellarStreamerMiddleware;
