import React, { useState } from 'react';
import VaultPanel from './components/VaultPanel';
import QRScanner from './components/QRScanner';
import CheckGenerator from './components/CheckGenerator';
import SignaturePad from './components/SignaturePad';
import AdminPanel from './components/AdminPanel';
import P2PBridgePanel from './components/P2PBridgePanel';
import ZellePayout from './components/ZellePayout';
import CheckReceiptPDF from './components/CheckReceiptPDF'; // Add this line

const App = () => {
  const [tab, setTab] = useState('vault');
  const [checkData, setCheckData] = useState(null); // Add this line

  const renderTab = () => {
    switch (tab) {
      case 'vault': return <VaultPanel />;
      case 'qr': return <QRScanner />;
      case 'check': 
        return (
          <div>
            <ChCheckGenerator onGenerate={setCheckData} />
            {checkData && <CheckReceiptPDF data={checkData} />} 
          </div>
        );
      case 'sign': return <SignaturePad />;
      case 'admin': return <AdminPanel />;
      case 'bridge': return <P2PBridgePanel />;
      case 'zelle': return <ZellePayout />;
      default: return <p>Select a tab to begin.</p>;
    }
  };

  return (
    <div className="container">
      <h1>SOVR Wallet Phase II: Full Power</h1>
      <nav>
        <button onClick={() => setTab('vault')}>Vault</button>
        <button onClick={() => setTab('qr')}>QR Scanner</button>
        <button onClick={() => setTab('check')}>Check Generator</button>
        <button onClick={() => setTab('sign')}>Signature</button>
        <button onClick={() => setTab('admin')}>Admin</button>
        <button onClick={() => setTab('bridge')}>P2P Bridge</button>
        <button onClick={() => setTab('zelle')}>Zelle</button>
      </nav>
      <div className="tab-content">{renderTab()}</div>
    </div>
  );
};

export default App;