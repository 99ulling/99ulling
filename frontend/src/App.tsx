import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '@/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
