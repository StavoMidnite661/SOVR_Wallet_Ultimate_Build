import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const ZellePayout = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');

  const encodedPayload = () => {
    const data = {
      to: emailOrPhone,
      amount,
      note: memo
    };
    return `https://enroll.zellepay.com/qr-codes?data=${btoa(JSON.stringify(data))}`;
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>🏦 Zelle Payout Generator</h3>
      <input
        placeholder="Email or Phone"
        value={emailOrPhone}
        onChange={(e) => setEmailOrPhone(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      />
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      />
      <input
        placeholder="Memo"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      />

      {emailOrPhone && amount && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <QRCode value={encodedPayload()} size={180} />
          <p style={{ marginTop: 10 }}>
            <a href={encodedPayload()} target="_blank" rel="noopener noreferrer">
              Open Zelle Link
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default ZellePayout;
