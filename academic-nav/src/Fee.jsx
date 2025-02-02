import React from 'react';
import './Fee.css';
const FeeDetails = () => {
  const feeData = {
    fixedFees: [
      { label: 'Admission Fee', amount: '0' },
      { label: 'Insurance Fee', amount: '100' },
      { label: 'Exam Fee', amount: '4000' },
      { label: 'Opening Excess Fee', amount: '0' },
      { label: 'CDA Fee', amount: '5000' },
      { label: 'Opening Balance', amount: '0' },
      { label: 'Tution Fee', amount: '260000' },
      { label: 'Consession Amount', amount: '65000' },
    ],
    feeReceivable: '204100',
    payments: [
      { receiptNo: '549712', amount: '130000', paymentMode: 'bytransfer', date: '2024-09-04' },
      { receiptNo: '550799', amount: '7100', paymentMode: 'byUPI', date: '2024-09-14' },
      { receiptNo: '561087', amount: '132000', paymentMode: 'bytransfer', date: '2025-01-02' }, 
    ],
    balanceFee: '0',
    refundFee: '65000',
  };

  return (
    <div class="main" style={{ fontFamily: 'sans-serif', margin: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Fee Details</h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '350px' }}> 
          <h3 style={{ marginBottom: '10px' }}>Fixed Fee's</h3>
          {feeData.fixedFees.map((fee, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>{fee.label}</span>
              <span>₹{fee.amount}</span>
            </div>
          ))}

          <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}> 
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span><strong>Fee Receivable</strong></span>
              <span><strong>₹{feeData.feeReceivable}</strong></span>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h3>Payment Details</h3>
            {feeData.payments.map((payment, index) => (
              <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}> 
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Receipt No-{payment.receiptNo}</span>
                  <span>₹{payment.amount}</span>
                </div>
                {payment.paymentMode && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                    <span>Payment Mode: {payment.paymentMode}</span>
                    <span>{payment.date}</span> 
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <span>Balance Fee: ₹{feeData.balanceFee}</span>
            <span>Refund Fee: ₹{feeData.refundFee}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeDetails;