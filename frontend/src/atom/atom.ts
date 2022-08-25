import { atom } from 'recoil';

export const loginNickNameState = atom({
  key: 'loginNickNameState',
  default: '뀰줍',
});

export const loginUserAddressState = atom({
  key: 'loginUserAddressState',
  default: '제주시 첨단로 242',
});

export const loginFamerNameState = atom({
  key: 'loginFamerNameState',
  default: '농부',
});

export const loginFamerAddressState = atom({
  key: 'loginFamerAddressState',
  default: '제주시 첨단로 242',
});
