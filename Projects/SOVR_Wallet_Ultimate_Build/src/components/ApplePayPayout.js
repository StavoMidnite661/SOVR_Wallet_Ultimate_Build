import React from 'react';

const ApplePayPayout = ({ data }) => {
  const { amount, memo } = data;
  return (
    <div>
      <h3>Apple Pay Instructions</h3>
      <p>This is where your Apple Pay payout metadata would go.</p>
      <ul>
        <li><strong>Amount:</strong> ${amount}</li>
        <li><strong>Memo:</strong> ${memo}</li>
      </ul>
    </div>
  );
};

export default ApplePayPayout;
