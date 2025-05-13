import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CheckReceiptPDF = ({ data }) => {
  const generatePDF = () => {
    const input = document.getElementById('check-receipt');
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 10, 10);
      pdf.save(`SOVR_Check_${data.payee}_${Date.now()}.pdf`);
    });
  };

  return (
    <div>
      <div id="check-receipt" style={{ padding: 20, background: '#fff', color: '#000', width: '80%', margin: 'auto', border: '1px solid #ccc' }}>
        <h2>🏛️ SOVR Trust Check</h2>
        <p><strong>Pay to:</strong> {data.payee}</p>
        <p><strong>Amount:</strong> ${data.amount}</p>
        <p><strong>Memo:</strong> {data.memo}</p>
        <p><strong>Timestamp:</strong> {data.timestamp}</p>
        {data.signature && <img src={data.signature} alt="Signature" style={{ width: 200, border: '1px solid #000' }} />}
      </div>
      <button onClick={generatePDF} style={{ marginTop: 10 }}>Download Check PDF</button>
    </div>
  );
};

export default CheckReceiptPDF;
