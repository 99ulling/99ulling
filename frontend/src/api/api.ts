import axios from 'axios';

import { Search, SignUp } from '@/interface';
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_URL;

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const signUp = (data: SignUp) => {
  return instance({
    url: `/api/v1/auth/signup`,
    data,
    method: 'POST',
  });
};

export const signIn = (nickname: string) => {
  return instance({
    url: '/api/v1/auth/signIn',
    data: {
      nickname,
    },
    method: 'POST',
  });
};

export const search = (data: Search) => {
  return instance({
    url: '/api/v2/farm/search',
    data,
    method: 'GET',
  });
};
