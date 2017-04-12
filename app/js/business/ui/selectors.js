import { selectProperty } from 'js/helpers/redux';
import { UI_STATE_KEY } from 'js/constants/reducerKeys';

export const selActionMode = selectProperty([UI_STATE_KEY, 'actionMode'], null);
