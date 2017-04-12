import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

import Input from 'js/components/ui/Input';

class AccountLoggerPublic extends React.Component {
  render() {
    const {
      isAccountLoading,
      loggedPublic,
      unsetAccount,
      keypair,
      federationName,
      handleSubmit,
      dirty,
      submitting,
    } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="username"
            component={Input}
            type="text"
            label="username"
          />
          <Field
            name="password"
            component={Input}
            type="password"
            label="password"
          />
          <button type="submit" disabled={submitting}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

AccountLoggerPublic.propTypes = {
  unsetAccount: PropTypes.func.isRequired,
  loggedPublic: PropTypes.bool,
  isAccountLoading: PropTypes.bool,
  keypair: PropTypes.object,
  federationName: PropTypes.string,
  ...propTypes,
};

export default AccountLoggerPublic;
