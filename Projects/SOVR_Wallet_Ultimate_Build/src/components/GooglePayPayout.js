import React from 'react';

const GooglePayPayout = ({ data }) => {
  const { amount, memo } = data;
  return (
    <div>
      <h3>Google Pay Instructions</h3>
      <p>This is where your Google Pay payout metadata would go.</p>
      <ul>
        <li><strong>Amount:</strong> ${amount}</li>
        <li><strong>Memo:</strong> ${memo}</li>
      </ul>
    </div>
  );
};

export default GooglePayPayout;
