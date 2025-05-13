import React from 'react';

const ZellePayout = ({ data }) => {
  const { amount, memo } = data;
  return (
    <div>
      <h3>Zelle Instructions</h3>
      <p>This is where your Zelle payout metadata would go.</p>
      <ul>
        <li><strong>Amount:</strong> ${amount}</li>
        <li><strong>Memo:</strong> ${memo}</li>
      </ul>
    </div>
  );
};

export default ZellePayout;
