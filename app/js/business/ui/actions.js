export const SET_ACTION_MODE = 'ui:set-action-mode';

export function setActionMode(actionMode) {
  return {
    type: SET_ACTION_MODE,
    actionMode,
  };
}