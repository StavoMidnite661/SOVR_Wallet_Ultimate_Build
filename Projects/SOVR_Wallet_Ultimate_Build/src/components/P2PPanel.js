import React, { useState } from 'react';
import TrustCheckForm from './TrustCheckForm';
import QRDisplay from './QRDisplay';
import SignaturePad from './SignaturePad';
import TriggerPayout from './TriggerPayout';
import AdminLogP2P from './AdminLogP2P';

const P2PPanel = () => {
  const [checkData, setCheckData] = useState(null);
  const [signature, setSignature] = useState(null);

  return (
    <div>
      <h2>SOVR P2P Engine</h2>
      <TrustCheckForm onGenerate={setCheckData} />
      {checkData && <SignaturePad onSign={setSignature} />}
      {checkData && signature && <QRDisplay payload={{ ...checkData, signature }} />}
      {checkData && <TriggerPayout data={checkData} />}
      <AdminLogP2P newEntry={checkData} />
    </div>
  );
};

export default P2PPanel;