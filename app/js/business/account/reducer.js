import * as types from './actions';
import { createReducer } from '../../helpers/redux';

import { Keypair } from 'stellar-sdk';

const initialState = {
  error: null,
  account: {
    "balances":[
      {
        "balance":"1493.43",
        "asset_code":"EUR",
        "asset_issuer":"GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
        "knownAsset":{
          "issuer":"GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
          "code":"EUR",
          "label":"NaoBTC",
          "domain":"naobtc.com",
          "symbol":"€",
          "name":"Bitcoin"
        },
        asset: {
          uuid: '1',
          shortName: 'Euro',
          "code":"EUR",
          "issuer":"GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
        }
      },
      {
        "balance":"45",
        "asset_code":"GNO",
        "asset_issuer":"GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
        "knownAsset":{
          "issuer":"GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
          "code":"GNO",
          "label":"NaoBTC",
          "domain":"naobtc.com",
          "symbol":"G",
          "name":"Bitcoin"
        },
        asset: {
          uuid: '2',
          "code":"GNO",
          "issuer":"GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
          shortName: 'Gnosis',
        }
      },
      {
        "balance":"352",
        "asset_code":"HNQ",
        "asset_issuer":"GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
        "knownAsset":{
          "issuer":"GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
          "code":"HNQ",
          "label":"NaoBTC",
          "domain":"naobtc.com",
          "symbol": "Q",
          "name":"Bitcoin"
        },
        asset: {
          uuid: '3',
          shortName: 'humaniq',
          "code":"HNQ",
          "issuer":"GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
        }
      },
    ],
  },
  keypair: Keypair.random(),
  stellar_address: 'Martin Lopez',
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
