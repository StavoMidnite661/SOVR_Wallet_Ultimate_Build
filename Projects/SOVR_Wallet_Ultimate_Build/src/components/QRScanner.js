import React from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = () => {
  const handleScan = data => {
    if (data) {
      alert("QR Code Scanned: " + data);
    }
  };

  const handleError = err => {
    console.error(err);
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onResult={(result, error) => {
          if (!!result) {
            alert("Scanned: " + result?.text);
          }
        }}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default QRScanner;