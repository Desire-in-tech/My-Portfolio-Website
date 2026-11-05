import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element #root was not found');
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production route files contain server-rendered markup. Keep Vite's empty
// development shell working by falling back to createRoot when there is no HTML.
if (root.hasChildNodes()) {
  hydrateRoot(root, app, { identifierPrefix: 'desire-portfolio-' });
} else {
  createRoot(root).render(app);
}
