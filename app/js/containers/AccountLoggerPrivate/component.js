import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import Input from 'js/components/ui/Input';

class AccountLoggerPrivate extends React.Component {
  render() {
    const {
      account,
      loggedPrivate,
      handleSubmit,
      unsetPrivateSecret,
      pristine,
      submitting,
    } = this.props;

    if(!account) {
      return <div>Loading...</div>
    }

    if (loggedPrivate) {
      return (
        <div>
          <button onClick={unsetPrivateSecret}>
            Remove private
          </button>
        </div>
      );
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="secret"
            component={Input}
            type="text"
            label="Password"
          />
          <button type="submit" disabled={pristine || submitting}>
            Set
          </button>
        </form>
      </div>
    );
  }
}

AccountLoggerPrivate.propTypes = {
  account: PropTypes.object,
  loggedPrivate: PropTypes.bool,
  isAccountLoading: PropTypes.bool,
  ...propTypes,
};

export default AccountLoggerPrivate;
