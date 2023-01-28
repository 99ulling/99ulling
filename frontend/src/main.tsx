import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App';
import { globalStyles } from './globalStyles.js';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {globalStyles}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
