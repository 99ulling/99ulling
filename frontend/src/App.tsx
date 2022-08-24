import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { LocationLevel, Login, MyPage, NotFound } from '@/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/locationlevel" element={<LocationLevel />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
