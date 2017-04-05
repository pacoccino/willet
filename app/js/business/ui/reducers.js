/* eslint new-cap: 0 */

import * as types from './actions';
import { createReducer } from 'js/helpers/redux';

const initialState = {
  actionMode: null,
};

function setActionMode(state, action) {
  return {
    ...state,
    actionMode: action.actionMode,
  };
}

export default createReducer(initialState, {
  [types.SET_ACTION_MODE]: setActionMode,
});
