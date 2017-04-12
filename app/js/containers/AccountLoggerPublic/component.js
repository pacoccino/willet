import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import { debounce } from 'lodash';

import Input from 'js/components/ui/Input';

import { validateAddress } from './services';

class AccountLoggerPublic extends React.Component {
  constructor() {
    super();
    this.state = {
      addressStatus: null,
      addressResolving: null,
    };
    // Validation disabled as requiring only our federation username
    this.debouncedValidate = debounce(this.validateAddress, 300);
  }

  validateAddress(address) {
    return validateAddress(address).then((type) => {
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
      federationName,
      handleSubmit,
      dirty,
      submitting,
    } = this.props;

    if (loggedPublic) {
      const displayedName = federationName || keypair.publicKey();
      return (
        <div>
          <p>{displayedName}</p>
          <button onClick={unsetAccount}>
            Disconnect
          </button>
        </div>
      );
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="username"
            component={Input}
            type="text"
            label="username"
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
  federationName: PropTypes.string,
  ...propTypes,
};

export default AccountLoggerPublic;
