import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { loginFarmerAddressState, loginFarmerNameState } from '@/atom/atom';
import { Back } from '@/components';

const FarmerNameSetting = () => {
  const [farmerName, setFarmerName] = useState('');
  const [farmerAddress, setFarmerAddress] = useState('');
  const navigate = useNavigate();
  const setAtomFarmerName = useSetRecoilState(loginFarmerNameState);
  const setAtomAddressName = useSetRecoilState(loginFarmerAddressState);

  const onChangeFarmerName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const farmerNameCurrent = e.target.value;

      setFarmerName(farmerNameCurrent);
    },
    [setFarmerName]
  );

  const onChangeFarmerAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const farmerAddressCurrent = e.target.value;

      setFarmerAddress(farmerAddressCurrent);
    },
    [setFarmerAddress]
  );

  const handleSubmit = () => {
    if (farmerName && farmerAddress) {
      setAtomFarmerName(farmerName);
      setAtomAddressName(farmerAddress);
      navigate('/farmer-sharing');
    }
  };

  return (
    <Wrapper>
      <Back />
      <Text>귤 농장 정보를 알려주세요</Text>
      <Input onChange={onChangeFarmerName} label="농장 이름" />
      <Input onChange={onChangeFarmerAddress} label="농장 주소" />
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

export default FarmerNameSetting;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 1.4rem;
  padding-bottom: 1rem;
  font-weight: bold;
`;

const Input = styled(TextField)`
  margin: 0.4rem 0;
`;
