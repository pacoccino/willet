import { createReducer } from 'js/helpers/redux';
import * as types from './actions';

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
