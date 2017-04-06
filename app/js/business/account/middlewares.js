import { StellarServer, StellarStreamers } from 'stellar-toolkit';
import * as actions from './actions';

import { newStream, killStreams } from 'js/helpers/monoStreamer';
import { setAccount } from 'js/business/account/actions';
import { selKeypair } from 'js/business/account/selectors';

function traceError(e) {
  console.error(e);
}

const stellarStreamerMiddleware = store => next => (action) => {
  switch (action.type) {
    case actions.RESET_ACCOUNT: {
      killStreams();
      break;
    }
    case actions.SET_KEYPAIR: {
      const { keypair } = action;
      const state = store.getState();
      const currentKeypair = selKeypair(state);

      if(!keypair || (currentKeypair && keypair.publicKey() === currentKeypair.publicKey())) {
        break;
      }

      try {
        StellarServer.getAccount(keypair.publicKey())
          .then(a => store.dispatch(setAccount(a)));
        // Stream account
        /*
        newStream('account',
          StellarStreamers.AccountStream(keypair.publicKey(),
            (streamAccount) => {
              store.dispatch(setAccount(streamAccount));
            }));
            */
      } catch (e) {
        traceError(e);
      }
      break;
    }
  }

  next(action);
};

export default stellarStreamerMiddleware;
