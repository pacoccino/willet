import { push } from 'react-router-redux';

export const goToOperation = mode => dispatch => {
  const route = `/operation/${mode}`;
  dispatch(push(route));
};