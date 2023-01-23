import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {
  AppCompleted,
  FarmAppCompleted,
  FarmerNameSetting,
  FarmerUpload,
  LocationLevel,
  Login,
  MyPage,
  NotFound,
  Sharing,
  SharingRequest,
  TypeChoice,
  UserConfirm,
} from '@/pages';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F57D14',
        light: '#F57D14',
        dark: '#F57D14',
      },
    },
  });

  useEffect(() => {
    const img = new Image();
    img.src = '/sharing99.png';

    fetch('/check.json').then((response) => response.json);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sharing />} />
          <Route path="/type-choice" element={<TypeChoice />} />
          <Route path="/location-level" element={<LocationLevel />} />
          <Route path="/user-confirm" element={<UserConfirm />} />
          <Route path="/farmer-name-setting" element={<FarmerNameSetting />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sharing-request" element={<SharingRequest />} />
          <Route path="/app-completed" element={<AppCompleted />} />
          <Route path="/farmer-upload" element={<FarmerUpload />} />
          <Route path="/farm-app-completed" element={<FarmAppCompleted />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
