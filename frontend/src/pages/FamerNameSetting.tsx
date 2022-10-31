import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { loginFamerAddressState, loginFamerNameState } from '@/atom/atom';
import { Back } from '@/components';

const FamerNameSetting = () => {
  const [famerName, setFamerName] = useState('');
  const [famerAddress, setFamerAddress] = useState('');
  const navigate = useNavigate();
  const setAtomFamerName = useSetRecoilState(loginFamerNameState);
  const setAtomAddressName = useSetRecoilState(loginFamerAddressState);

  const onChangeFamerName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const famerNameCurrent = e.target.value;

      setFamerName(famerNameCurrent);
    },
    [setFamerName]
  );

  const onChangeFamerAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const famerAddressCurrent = e.target.value;

      setFamerAddress(famerAddressCurrent);
    },
    [setFamerAddress]
  );

  const handleSubmit = () => {
    if (famerName && famerAddress) {
      setAtomFamerName(famerName);
      setAtomAddressName(famerAddress);
      navigate('/famer-sharing');
    }
  };

  return (
    <Wrapper>
      <Back />
      <Text>
        <span style={{ fontWeight: 'bold' }}>농장 정보</span>를 알려주세요
      </Text>
      <div style={{ width: '80%', padding: '2rem 0', paddingBottom: '0px' }}>
        <InputSetting
          onChange={onChangeFamerName}
          style={{ textAlign: 'center' }}
          placeholder="농장 이름 입력하기"
        />
      </div>
      <div style={{ width: '80%' }}>
        <InputSetting
          onChange={onChangeFamerAddress}
          style={{ textAlign: 'center' }}
          placeholder="농장 주소 입력"
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

export default FamerNameSetting;

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

const InputSetting = styled.input`
  padding: 1.6rem 0;
  border-color: none;
`;
