import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/fonts/global.css'; // Import global CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'; // Import Bootstrap Datepicker CSS
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);