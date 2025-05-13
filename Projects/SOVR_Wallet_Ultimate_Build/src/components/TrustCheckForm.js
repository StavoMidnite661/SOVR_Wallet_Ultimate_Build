import React, { useState } from 'react';

const TrustCheckForm = ({ onGenerate }) => {
  const [form, setForm] = useState({ payee: '', amount: '', memo: '', cashtag: '' });

  const handleSubmit = () => {
    const payload = {
      ...form,
      timestamp: new Date().toISOString(),
      from: '0xSOVR_USER',
      type: 'P2P_TRUST_TX'
    };
    onGenerate(payload);
  };

  return (
    <div>
      <input placeholder="Payee Name" onChange={e => setForm({ ...form, payee: e.target.value })} />
      <input placeholder="Amount" onChange={e => setForm({ ...form, amount: e.target.value })} />
      <input placeholder="Memo" onChange={e => setForm({ ...form, memo: e.target.value })} />
      <input placeholder="$Cashtag or Wallet" onChange={e => setForm({ ...form, cashtag: e.target.value })} />
      <button onClick={handleSubmit}>Generate Trust Check</button>
    </div>
  );
};

export default TrustCheckForm;