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

export const searchState = atom({
  key: 'searchState',
  default: {
    address: '제주시 첨단로 242',
    availableTime: '09:00 : 13:00',
    farmImage: '/sharing99.png',
    id: 3,
    name: '알찬귤 농장',
    remainCount: 70,
    totalCount: 100,
  },
});

export const shareState = atom({
  key: 'shareState',
  default: 100,
});
