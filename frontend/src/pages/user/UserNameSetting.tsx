import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { signUp } from '@/api/api';
import { loginNickNameState, loginUserAddressState } from '@/atom/atom';
import { Back } from '@/components';

const UserNameSetting = () => {
  const [nickName, setNickName] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [danger, setDanger] = useState(false);
  const navigate = useNavigate();
  const setAtomNickName = useSetRecoilState(loginNickNameState);
  const setAtomAddressName = useSetRecoilState(loginUserAddressState);

  const onChangeNickName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nickNameCurrent = e.target.value;

      setNickName(nickNameCurrent);
    },
    []
  );

  const onChangeUserAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const userAddressCurrent = e.target.value;

      setUserAddress(userAddressCurrent);
    },
    [setUserAddress]
  );

  const handleSubmit = () => {
    if (nickName && userAddress) {
      setAtomNickName(nickName);
      setAtomAddressName(userAddress);
      signUp({
        address: userAddress,
        latitude: 126.616186,
        longitude: 33.273398,
        nickname: nickName,
        userType: 'USER',
      })
        .then(() => {
          alert('가입을 성공했어요.\n바로 나눔 도와드릴게요.');
          navigate('/location-level');
        })
        .catch(() => {
          alert('올바른 입력인지 확인해주세요.');
        });
    } else {
      setDanger(true);
    }
  };

  return (
    <Wrapper>
      <Back />
      {danger}
      <Text>
        <SearchTextTop>반가워요 귤줍님,</SearchTextTop>
        이용할 닉네임을 알려주세요
      </Text>
      <TextField fullWidth label="닉네임" onChange={onChangeNickName} />
      <TextField
        fullWidth
        label="현재 위치 입력"
        onChange={onChangeUserAddress}
      />
      <NextButton onClick={handleSubmit}>
        <RightArrow />
      </NextButton>
    </Wrapper>
  );
};

export default UserNameSetting;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

const Text = styled.div`
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
`;

const SearchTextTop = styled.div`
  padding-bottom: 10px;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 60px;
  right: 42px;
`;

const RightArrow = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="56" rx="8" fill="#F57D14" />
      <path
        d="M15 27.4118L24.1765 38L41 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
