import * as types from './actions';
import { createReducer } from '../../helpers/redux';

const initialState = {
  error: null,
  account: null,
  keypair: null,
};

function resetAccount(state) {
  return {
    ...state,
    account: null,
    keypair: null,
  };
}
function setKeypair(state, action) {
  return {
    ...state,
    keypair: action.keypair,
  };
}
function setAccount(state, action) {
  return {
    ...state,
    account: action.account,
  };
}
export default createReducer(initialState, {
  [types.RESET_ACCOUNT]: resetAccount,
  [types.SET_KEYPAIR]: setKeypair,
  [types.SET_ACCOUNT]: setAccount,
});
