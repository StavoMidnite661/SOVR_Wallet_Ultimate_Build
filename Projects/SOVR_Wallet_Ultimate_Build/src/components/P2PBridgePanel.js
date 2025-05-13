import React, { useState } from 'react';
import TrustCheckForm from './TrustCheckForm';
import SignaturePad from './SignaturePad';
import QRDisplay from './QRDisplay';
import TriggerPayout from './TriggerPayout';
import ZellePayout from './ZellePayout';
import VenmoPayout from './VenmoPayout';
import CoinbasePayout from './CoinbasePayout';
import ACHPayout from './ACHPayout';
import GooglePayPayout from './GooglePayPayout';
import ApplePayPayout from './ApplePayPayout';
import AdminLogP2P from './AdminLogP2P';

const P2PBridgePanel = () => {
  const [checkData, setCheckData] = useState(null);
  const [signature, setSignature] = useState(null);

  return (
    <div>
      <h2>SOVR MULTI-RAIL BRIDGE</h2>
      <TrustCheckForm onGenerate={setCheckData} />
      {checkData && <SignaturePad onSign={setSignature} />}
      {checkData && signature && <QRDisplay payload={{ ...checkData, signature }} />}
      {checkData && <TriggerPayout data={checkData} />}
      {checkData && <ZellePayout data={checkData} />}
      {checkData && <VenmoPayout data={checkData} />}
      {checkData && <CoinbasePayout data={checkData} />}
      {checkData && <ACHPayout data={checkData} />}
      {checkData && <GooglePayPayout data={checkData} />}
      {checkData && <ApplePayPayout data={checkData} />}
      <AdminLogP2P newEntry={checkData} />
    </div>
  );
};

export default P2PBridgePanel;