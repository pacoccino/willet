import { connect } from 'react-redux';
import { getFormValues, reduxForm } from 'redux-form';
const WAValidator = require('wallet-address-validator');
const Web3 = require('web3');

import { selBalances } from 'js/business/account/selectors';
import { sendOperation } from 'js/business/operations/action-creators';

import Component from './component';

const FORM_NAME = 'send-form';
const web3 = new Web3();

const mapStateToProps = state => {
  const formValues = getFormValues(FORM_NAME)(state);
  const balances = selBalances(state);

  const balance = formValues && balances
      .find(a => a.asset.uuid === formValues.assetUuid);

  return {
    balances,
    balance,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    const asset = props.balances.find(b => b.asset.uuid === values.assetUuid).asset;
    const formData = {
      asset,
      amount: values.amount,
      destination: values.destination,
    };
    return dispatch(sendOperation(formData))
      .then(() => {
        props.reset();
      }).catch(() => 0);
  },
});

function validate(values, props) {
  const errors = {};
  if(props.balance && props.balance.asset_code === 'ETH') {
    if(!web3.isAddress(values.destination)) {
      errors.destination = 'Invalid ethereum address';
    }
  }
  if(props.balance && props.balance.asset_code === 'BTC') {
    if(!WAValidator.validate(values.destination)) {
      errors.destination = 'Invalid bitcoin address';
    }
  }
  if(!values.amount) {
    errors.amount = 'You must enter an amount';
  }
  return errors;
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
  validate,
})(Component));
