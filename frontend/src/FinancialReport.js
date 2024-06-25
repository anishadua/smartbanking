// frontend/src/FinancialReport.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FinancialReport = () => {
  const [customerId, setCustomerId] = useState('');
  const [report, setReport] = useState(null);

  useEffect(() => {
    // Fetch report logic goes here
  }, [customerId]);

  const fetchReport = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/report/${customerId}`);
      setReport(response.data);
    } catch (error) {
      console.error('Error fetching financial report:', error);
    }
  };

  return (
    <div>
      <h2>Personalized Financial Report</h2>
      <input
        type="text"
        placeholder="Enter Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
      <button onClick={fetchReport}>Get Report</button>
      {report && (
        <div>
          <h3>Report Summary</h3>
          <p>{report.summary}</p>
          <h3>Report Details</h3>
          <pre>{JSON.stringify(report.details, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FinancialReport;
