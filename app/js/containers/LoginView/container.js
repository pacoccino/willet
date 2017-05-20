import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Component from './component';
import * as routes from 'js/constants/routes';


const mapDispatchToProps = dispatch => ({
  goToRegister() {
    dispatch(push(routes.Register));
  },
});

export default connect(null, mapDispatchToProps)(Component);
