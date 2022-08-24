import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {
  LocationLevel,
  Login,
  MyPage,
  NotFound,
  UserNameSetting,
  UserTypeChoice,
} from '@/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usertypechoice" element={<UserTypeChoice />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/locationlevel" element={<LocationLevel />} />
        <Route path="/usernamesetting" element={<UserNameSetting />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
