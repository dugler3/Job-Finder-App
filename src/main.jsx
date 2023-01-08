import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { JobOffersApi } from './services/apiSlice';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApiProvider api={JobOffersApi}>
      <App />
    </ApiProvider>
  </BrowserRouter>
);
