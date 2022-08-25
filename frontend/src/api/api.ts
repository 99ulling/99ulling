import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_URL;

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL,
});

const signUp = (nickname: string) => {
  return instance({
    url: `/api/v1/auth/signup`,
  });
};

const login = () => {
  return instance({
    url: '/api/v1/auth/signin',
    // data: nickname,
  });
};
