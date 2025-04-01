import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Ensure root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element. Please ensure an element with id="root" exists in your HTML.');
}

// Add basic styling to root for full height
rootElement.className = 'h-screen';

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Log environment setup (optional for debugging)
if (process.env.NODE_ENV === 'development') {
  console.log('Threads app running in development mode');
}