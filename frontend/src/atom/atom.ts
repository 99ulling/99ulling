import { atom } from 'recoil';

export const loginNickNameState = atom({
  key: 'loginNickNameState',
  default: '뀰줍',
});

export const loginUserAddressState = atom({
  key: 'loginUserAddressState',
  default: '제주특별자치도 제주시 첨단로 242',
});

export const searchState = atom({
  key: 'searchState',
  default: {
    address: '제주도 서귀포시 농장로 342길 2',
    availableTime: '09:00 : 13:00',
    farmImage: '/sharing99.png',
    farmerData: '제주의 태양과 맑은 물을 먹고자라나 맛이 좋아요',
    id: 3,
    name: '알찬귤 농장',
    remainCount: 70,
    totalCount: 100,
  },
});
