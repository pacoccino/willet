import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';

class Component extends React.Component {
  render() {
    const {
      loggedPrivate,
      handleSubmit,
      unsetPrivateSecret,
      pristine,
      submitting,
    } = this.props;

    if(loggedPrivate) {
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
          <p>Password</p>
          <Field
            name="secret"
            component="input"
            type="text"
          />
          <button type="submit" disabled={pristine || submitting}>
            Set
          </button>
        </form>
      </div>
    );
  }
}

Component.propTypes = {
  loggedPrivate: PropTypes.bool,
  isAccountLoading: PropTypes.bool,
  ...propTypes,
};

export default Component;
