import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

class AccountLoggerPublic extends React.Component {
  render() {
    const {
      isAccountLoading,
      loggedPublic,
      unsetAccount,
      keypair,
      handleSubmit,
      pristine,
      submitting,
    } = this.props;

    if(loggedPublic) {
      return (
        <div>
          <p>{keypair.publicKey()}</p>
          <button onClick={unsetAccount}>
            Disconnect
          </button>
        </div>
      );
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <Field
            name="publicAddress"
            component="input"
            type="text"
          />
          <button type="submit" disabled={pristine || submitting}>
            Login
          </button>
          {isAccountLoading && <p>Loading ...</p>}
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
  ...propTypes,
};

export default AccountLoggerPublic;
