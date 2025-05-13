import React, { useState } from 'react';

const CheckGenerator = ({ onGenerate }) => {
  const [form, setForm] = useState({ payee: '', amount: '', memo: '' });

  const handleGenerate = () => {
    const payload = {
      ...form,
      timestamp: new Date().toISOString()
    };
    onGenerate(payload); // 🔥 Sends data to App.js
  };

  return (
    <div>
      <h2>Generate Trust Check</h2>
      <input
        placeholder="Payee"
        onChange={e => setForm({ ...form, payee: e.target.value })}
      />
      <input
        placeholder="Amount"
        onChange={e => setForm({ ...form, amount: e.target.value })}
      />
      <input
        placeholder="Memo"
        onChange={e => setForm({ ...form, memo: e.target.value })}
      />
      <button onClick={handleGenerate}>Generate Check</button>
    </div>
  );
};

export default CheckGenerator;
