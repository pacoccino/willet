import React, { PropTypes } from 'react';

function ReceiveDeposit({}) {
  function getQRCode() {
    return (
      <img src="http://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=stellar:GDG4LKMTODR227EQQXKHAWIOYBLNGXRJEW6TJTNQ766UUGVMFWDGAVT6" />
    );
  }
  return (
    <div>
      <p>Send a payment to :</p>
      <p>GDG4LKMTODR227EQQXKHAWIOYBLNGXRJEW6TJTNQ766UUGVMFWDGAVT6</p>
      {getQRCode()}
    </div>
  );
}

ReceiveDeposit.propTypes = {
};

export default ReceiveDeposit;
