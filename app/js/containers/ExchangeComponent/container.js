import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { selBalances } from 'js/business/account/selectors';
import { exchangeOperation } from 'js/business/operations/action-creators';
import Component from './component';

const FORM_NAME = 'exchange-form';

const mapStateToProps = state => ({
  balances: selBalances(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit(values, d, props) {
    const asset_source = props.balances.find(b => b.asset_uuid === values.fromCurrency).asset;
    const asset_destination = props.balances.find(b => b.asset_uuid === values.toCurrency).asset;
    const formData = {
      asset_source,
      asset_destination,
      amount_destination: values.fromAmount,
      max_amount: values.toAmount,
    };
    return dispatch(exchangeOperation(formData))
      .then(() => {
        props.reset();
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {},
})(Component));
