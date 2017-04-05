import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { ASYNC_STATE_KEY, asyncReducer } from '../helpers/asyncActions';
import { ACCOUNT_STATE_KEY, STELLAR_STATE_KEY, UI_STATE_KEY } from '../constants/reducerKeys';
import account from '../business/account/reducer';
// import stellar from '../business/stellar/reducers';
import ui from '../business/ui/reducers';

const reducers = combineReducers({
  [ASYNC_STATE_KEY]: asyncReducer,
  [ACCOUNT_STATE_KEY]: account,
  // [STELLAR_STATE_KEY]: stellar,
  [UI_STATE_KEY]: ui,
  routing: routerReducer,
  form: formReducer,
});

export default reducers;
