import React from 'react';

const ACHPayout = ({ data }) => {
  const { amount, memo } = data;
  return (
    <div>
      <h3>ACH Instructions</h3>
      <p>This is where your ACH payout metadata would go.</p>
      <ul>
        <li><strong>Amount:</strong> ${amount}</li>
        <li><strong>Memo:</strong> ${memo}</li>
      </ul>
    </div>
  );
};

export default ACHPayout;
