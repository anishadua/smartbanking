import React from 'react';
import './App.css';
import FinancialReport from './FinancialReport';

console.log(FinancialReport); // Check if the import is working

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SmartBanking</h1>
        <FinancialReport />
      </header>
    </div>
  );
}

export default App;

