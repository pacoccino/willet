import { push } from 'react-router-redux';
import * as routes from 'js/constants/routes';

export const goToOperation = mode => dispatch => {
  const route = routes.Operation_G(mode);
  dispatch(push(route));
};