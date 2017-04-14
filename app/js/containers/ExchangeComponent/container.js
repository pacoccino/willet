import { connect } from 'react-redux';
import { getFormValues, reduxForm } from 'redux-form';

import { selAccount, selBalances } from 'js/business/account/selectors';
import { exchangeOperation } from 'js/business/operations/action-creators';
import Component from './component';

const FORM_NAME = 'exchange-form';

const mapStateToProps = state => {
  const formValues = getFormValues(FORM_NAME)(state);
  const balances = selBalances(state);

  const selectedBalances = {
    sourceBalance: formValues && formValues.source && balances
      .find(a => a.asset.uuid === formValues.source.assetUuid),
    destinationBalance: formValues && formValues.destination && balances
      .find(a => a.asset.uuid === formValues.destination.assetUuid),
  };

  return {
    account: selAccount(state),
    balances,
    formValues,
    selectedBalances,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    const asset_source = props.balances
      .find(b => b.asset.uuid === values.source.assetUuid).asset;
    const asset_destination = props.balances
      .find(b => b.asset.uuid === values.destination.assetUuid).asset;
    const formData = {
      asset_source,
      asset_destination,
      max_amount: values.source.amount,
      amount_destination: values.destination.amount,
    };
    return dispatch(exchangeOperation(formData))
      .then(() => {
        props.reset();
      });
  },
});

function validate(values) {
  const errors = {};
  if(!values.max_amount) {
    errors.max_amount = 'You must enter a source amount';
  }
  if(!values.amount_destination) {
    errors.amount_destination = 'You must enter a destination amount';
  }
  return errors;
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {
    source: {},
    destination: {},
  },
  validate,
})(Component));
