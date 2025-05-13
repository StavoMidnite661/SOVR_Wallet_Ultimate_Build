import React from 'react';
import QRCode from 'qrcode.react';

const CashAppPayout = ({ cashtag = 'YourCashtag', amount = '', memo = '' }) => {
  const qrValue = `https://cash.app/$${cashtag}?amount=${amount}&note=${encodeURIComponent(memo)}`;
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>💸 Cash App Payout</h3>
      <p><strong>Cashtag:</strong> ${cashtag}</p>
      <p><strong>Amount:</strong> ${amount}</p>
      <p><strong>Memo:</strong> {memo}</p>
      <div style={{ margin: '20px auto', width: 'fit-content' }}>
        <QRCode value={qrValue} size={180} />
      </div>
      <a href={qrValue} target="_blank" rel="noopener noreferrer">
        <button style={{ marginTop: 10 }}>Open in Cash App</button>
      </a>
    </div>
  );
};

export default CashAppPayout;
