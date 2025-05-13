import React from 'react';
import QRCode from 'qrcode.react';

const QRDisplay = ({ payload }) => {
  const json = JSON.stringify(payload);
  return (
    <div>
      <h3>Trust Check QR</h3>
      <QRCode value={json} size={256} />
    </div>
  );
};

export default QRDisplay;