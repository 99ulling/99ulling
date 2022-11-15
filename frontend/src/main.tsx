import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App';
import { globalStyles } from './globalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {globalStyles}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
