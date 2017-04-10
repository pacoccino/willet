import * as types from './actions';
import { createReducer } from '../../helpers/redux';

const initialState = {
  error: null,
  account: null,
  keypair: null,
  stellar_address: null,
};

function resetAccount(state) {
  return {
    ...state,
    account: null,
    keypair: null,
    stellar_address: null,
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
function setFederationName(state, action) {
  return {
    ...state,
    stellar_address: action.stellar_address,
  };
}

export default createReducer(initialState, {
  [types.RESET_ACCOUNT]: resetAccount,
  [types.SET_KEYPAIR]: setKeypair,
  [types.SET_ACCOUNT]: setAccount,
  [types.SET_FEDERATION_ADDRESS]: setFederationName,
});
