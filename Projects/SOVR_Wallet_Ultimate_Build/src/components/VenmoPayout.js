import React from 'react';

const VenmoPayout = ({ data }) => {
  const { amount, memo } = data;
  return (
    <div>
      <h3>Venmo Instructions</h3>
      <p>This is where your Venmo payout metadata would go.</p>
      <ul>
        <li><strong>Amount:</strong> ${amount}</li>
        <li><strong>Memo:</strong> ${memo}</li>
      </ul>
    </div>
  );
};

export default VenmoPayout;
