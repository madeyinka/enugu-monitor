import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalProvider } from './context/Provider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <GlobalProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      </GlobalProvider>
    </BrowserRouter>
  </React.Fragment>
);

reportWebVitals();
