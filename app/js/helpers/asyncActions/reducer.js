import * as actions from './actions';
import { createReducer } from '../redux';

const initialState = {
  "actions":{
    "known-anchors":{
      "isLoading":false,
      "data":[
        {
          "issuer":"GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH",
          "code":"EUR",
          "label":"NaoBTC",
          "domain":"naobtc.com",
          "symbol":"฿",
          "name":"Bitcoin"
        },
        {
          "issuer":"GDIR44J6EE3SVP4OAOAF7FAJGBXIHELRKHGC3RFAYXDE4I73S6ZNNW2F",
          "code":"GNO",
          "label":"Stellereum",
          "domain":"stellereum.com",
          "symbol":"Ξ",
          "name":"Ether"
        },
        {
          "issuer":"GDIR44J6EE3SVP4OAOAF7FAJGBXIHELRKHGC3RFAYXDE4I73S6ZNNW2F",
          "code":"HNQ",
          "label":"Stellereum",
          "domain":"stellereum.com",
          "symbol":"Ξ",
          "name":"Ether"
        }
      ],
      "error":null
    },
  }
};

function editActionState(state, actionName, data) {
  const stateActions = state.actions || {};
  return {
    ...state,
    actions: {
      ...stateActions,
      [actionName]: {
        ...stateActions[actionName],
        ...data,
      },
    },
  };
}

function setIsLoading(isLoading, state, { actionName }) {
  return editActionState(state, actionName,
    {
      isLoading,
    },
  );
}

function fetchStart(state, { actionName }) {
  return editActionState(state, actionName,
    {
      isLoading: true,
    },
  );
}

function fetchSuccess(state, { actionName, data }) {
  return editActionState(state, actionName,
    {
      isLoading: false,
      data,
      error: null,
    },
  );
}

function fetchError(state, { actionName, error }) {
  return editActionState(state, actionName,
    {
      isLoading: false,
      data: null,
      error,
    },
  );
}

function reset(state, { actionName }) {
  const newState = { ...state };
  if (newState.actions) {
    delete newState.actions[actionName];
  }
  return newState;
}

export default createReducer(initialState, {
  [actions.ASYNC_START_LOADING]: setIsLoading.bind(null, true),
  [actions.ASYNC_STOP_LOADING]: setIsLoading.bind(null, false),
  [actions.ASYNC_FETCH_START]: fetchStart,
  [actions.ASYNC_FETCH_SUCCESS]: fetchSuccess,
  [actions.ASYNC_FETCH_ERROR]: fetchError,
  [actions.ASYNC_RESET_ACTION]: reset,
});
