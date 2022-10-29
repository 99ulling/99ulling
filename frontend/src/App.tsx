import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {
  AppCompleted,
  FamerAppCompleted,
  FamerNameSetting,
  FamerSharing,
  FamerUpload,
  LocationLevel,
  Login,
  NotFound,
  SharingRequest,
  UserNameSetting,
  UserTypeChoice,
} from '@/pages';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
          <Route path="/usertypechoice" element={<UserTypeChoice />} />
          <Route path="/locationlevel" element={<LocationLevel />} />
          <Route path="/usernamesetting" element={<UserNameSetting />} />
          <Route path="/famernamesetting" element={<FamerNameSetting />} />
          <Route path="/famersharing" element={<FamerSharing />} />
          <Route path="/sharingrequest" element={<SharingRequest />} />
          <Route path="/appcompleted" element={<AppCompleted />} />
          <Route path="/famerupload" element={<FamerUpload />} />
          <Route path="/famerappcompleted" element={<FamerAppCompleted />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
