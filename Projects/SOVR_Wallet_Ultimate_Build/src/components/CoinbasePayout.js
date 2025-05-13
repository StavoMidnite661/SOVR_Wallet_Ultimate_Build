import React from 'react';

const CoinbasePayout = ({ data }) => {
  const { amount, memo } = data;
  return (
    <div>
      <h3>Coinbase Instructions</h3>
      <p>This is where your Coinbase payout metadata would go.</p>
      <ul>
        <li><strong>Amount:</strong> ${amount}</li>
        <li><strong>Memo:</strong> ${memo}</li>
      </ul>
    </div>
  );
};

export default CoinbasePayout;
