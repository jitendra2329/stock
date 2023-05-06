import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Form from './App';
// import StockData from './StockData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
    {/* <StockData/> */}
  </React.StrictMode>
);

