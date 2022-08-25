import { Input } from '@goorm-dev/gds-goormthon';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

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
      navigate('/locationlevel');
    } else {
      setDanger(true);
    }
  };

  return (
    <Wrapper>
      <Back />
      {danger}
      <Text>
        <span style={{ fontWeight: 'bold' }}>이용할 닉네임</span>을 알려주세요
      </Text>
      <div style={{ width: '80%', padding: '2rem 0' }}>
        <InputSetting
          onChange={onChangeNickName}
          style={{ textAlign: 'center' }}
          placeholder="닉네임 입력하기"
        />
      </div>
      <div style={{ width: '80%' }}>
        <InputSetting
          style={{
            position: 'relative',
            top: '40px',
            left: '20px',
            width: '26px',
            height: '26px',
          }}
        />
        <InputSetting
          onChange={onChangeUserAddress}
          style={{ textAlign: 'center' }}
          placeholder="현재 위치 입력"
        />
      </div>
      <button
        onClick={() => handleSubmit()}
        style={{ position: 'absolute', bottom: '60px', right: '42px' }}
      >
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
      </button>
    </Wrapper>
  );
};

export default UserNameSetting;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 1.4rem;
  padding-bottom: 1rem;
`;

const InputSetting = styled(Input)`
  padding: 1.6rem 0;
  padding-left: 20px;
  border-color: none;
  text-align: 'center';
`;
