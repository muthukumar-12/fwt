import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Optional: for global styles
import App from './App.jsx'; // Import your main application component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);