import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {
  AppCompleted,
  FamerNameSetting,
  FamerSharing,
  FamerUpload,
  LocationLevel,
  Login,
  MyPage,
  NotFound,
  SharingRequest,
  UserNameSetting,
  UserTypeChoice,
} from '@/pages';

const App = () => {
  useEffect(() => {
    const img = new Image();
    img.src = '/sharing99.png';

    fetch('/check.json').then((response) => response.json);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usertypechoice" element={<UserTypeChoice />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/locationlevel" element={<LocationLevel />} />
        <Route path="/usernamesetting" element={<UserNameSetting />} />
        <Route path="/famernamesetting" element={<FamerNameSetting />} />
        <Route path="/famersharing" element={<FamerSharing />} />
        <Route path="/sharingrequest" element={<SharingRequest />} />
        <Route path="/appcompleted" element={<AppCompleted />} />
        <Route path="/famerupload" element={<FamerUpload />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
