import React, { useState, useEffect } from 'react';

const AdminLogP2P = ({ newEntry }) => {
  const [log, setLog] = useState([]);

  useEffect(() => {
    if (newEntry) {
      setLog(prev => [...prev, newEntry]);
    }
  }, [newEntry]);

  return (
    <div>
      <h3>Admin Log</h3>
      <ul>
        {log.map((entry, idx) => (
          <li key={idx}>{entry.payee} - ${entry.amount} - {entry.memo}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminLogP2P;