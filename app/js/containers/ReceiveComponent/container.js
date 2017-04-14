import { connect } from 'react-redux';
import { getFormValues, reduxForm } from 'redux-form';

import { selBalances } from 'js/business/account/selectors';
import { selDepositAddressLaunched } from 'js/business/operations/selectors';
import { getDepositAddress } from 'js/business/operations/action-creators';
import Component from './component';

const FORM_NAME = 'receive-form';

const mapStateToProps = state => {
  const formValues = getFormValues(FORM_NAME)(state);
  const balances = selBalances(state);

  const balance = formValues && balances
      .find(a => a.asset.uuid === formValues.assetUuid);

  return {
    getDepositLaunched: selDepositAddressLaunched(state),
    balances,
    balance,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    const asset = props.balances.find(b => b.asset.uuid === values.assetUuid).asset;
    return dispatch(getDepositAddress(asset))
      .then(() => {
        props.reset();
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
})(Component));
