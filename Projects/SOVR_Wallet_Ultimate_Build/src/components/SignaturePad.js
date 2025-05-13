import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = ({ onSign }) => {
  const ref = useRef();

  const handleSave = () => {
    const sig = ref.current.getTrimmedCanvas().toDataURL('image/png');
    onSign(sig);
  };

  return (
    <div>
      <h3>Signature</h3>
      <SignatureCanvas ref={ref} canvasProps={{ width: 500, height: 200 }} />
      <button onClick={handleSave}>Attach Signature</button>
    </div>
  );
};

export default SignaturePad;