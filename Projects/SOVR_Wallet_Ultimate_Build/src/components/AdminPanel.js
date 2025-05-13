import React, { useState } from 'react';

const AdminPanel = () => {
  const [logs] = useState([
    { id: 1, type: 'Check', value: 'Payee: Alice - Valid' },
    { id: 2, type: 'QR', value: 'Invalid Token Format' },
  ]);

  return (
    <div>
      <h2>Admin Log</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>{log.type}: {log.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;