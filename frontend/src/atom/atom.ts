import { atom } from 'recoil';

export const loginNickNameState = atom({
  key: 'loginNickNameState',
  default: '사용자',
});

export const loginFamerNameState = atom({
  key: 'loginFamerNameState',
  default: '농부',
});

export const loginFamerAddressState = atom({
  key: 'loginFamerAddressState',
  default: '주소',
});
