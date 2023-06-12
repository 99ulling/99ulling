import axios from "axios";

import { Reservation, Search } from "@/interface";

const instance = axios.create({
  baseURL: import.meta!.env.VITE_REACT_APP_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "*/*",
  },
});

export const search = (params: Search) => {
  return instance({
    url: "/api/v2/farm/search",
    params,
    method: "GET",
  });
};

export const reservation = (data: Reservation) => {
  return instance({
    url: "/api/v2/sharing/reservation",
    data,
    method: "POST",
  });
};

export const getReservation = (nickname: string) => {
  return instance({
    url: "/api/v2/sharing/reservation",
    params: {
      nickname,
    },
    method: "GET",
  });
};
