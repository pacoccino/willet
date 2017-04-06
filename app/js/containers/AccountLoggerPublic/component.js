import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import { debounce } from 'lodash';

import { validateAddress } from './services';

class AccountLoggerPublic extends React.Component {
  constructor() {
    super();
    this.state = {
      addressStatus: null,
      addressResolving: null,
    };

    this.debouncedValidate = debounce(this.validateAddress, 300);
  }

  validateAddress(address) {
    return validateAddress(address).then(type => {
      this.setState({
        addressStatus: type,
        addressResolving: false,
      });
    });
  }
  onChange(e, value) {
    this.setState({ addressResolving: true, addressStatus: null });
    this.debouncedValidate(value);
  }

  render() {
    const {
      isAccountLoading,
      loggedPublic,
      unsetAccount,
      keypair,
      handleSubmit,
      dirty,
      submitting,
    } = this.props;

    if (loggedPublic) {
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
            onChange={::this.onChange}
          />
          <button type="submit" disabled={submitting}>
            Login
          </button>
          {this.state.addressResolving && <p>Resolving ...</p>}
          {dirty && this.state.addressStatus && <p>{this.state.addressStatus}</p>}
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
