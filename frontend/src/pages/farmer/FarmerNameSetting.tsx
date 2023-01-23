import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { loginFarmerNameState } from '@/atom/atom';
import { Back } from '@/components';

const FarmerNameSetting = () => {
  const [farmerName, setFarmerName] = useState('');
  const navigate = useNavigate();
  const setAtomFarmerName = useSetRecoilState(loginFarmerNameState);

  const onChangeFarmerName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const farmerNameCurrent = e.target.value;

      setFarmerName(farmerNameCurrent);
    },
    [setFarmerName]
  );

  const handleSubmit = () => {
    if (farmerName) {
      setAtomFarmerName(farmerName);
      navigate('/farmer-sharing');
    }
  };

  return (
    <Wrapper>
      <Back />
      <Text>귤 농장 정보를 알려주세요</Text>
      <Input onChange={onChangeFarmerName} label="농장 이름" />
      <NextButton onClick={handleSubmit}>
        <RightArrow />
      </NextButton>
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
