import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {
  AppCompleted,
  FamerNameSetting,
  FamerSharing,
  FamerUpload,
  FarmAppCompleted,
  LocationLevel,
  Login,
  NotFound,
  SharingRequest,
  UserNameSetting,
  UserTypeChoice,
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
          <Route path="/" element={<Login />} />
          <Route path="/user-type-choice" element={<UserTypeChoice />} />
          <Route path="/location-level" element={<LocationLevel />} />
          <Route path="/username-setting" element={<UserNameSetting />} />
          <Route path="/famername-setting" element={<FamerNameSetting />} />
          <Route path="/famer-sharing" element={<FamerSharing />} />
          <Route path="/sharing-request" element={<SharingRequest />} />
          <Route path="/app-completed" element={<AppCompleted />} />
          <Route path="/famer-upload" element={<FamerUpload />} />
          <Route path="/farm-app-completed" element={<FarmAppCompleted />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
