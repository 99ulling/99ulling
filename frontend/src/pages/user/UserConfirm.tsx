import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Back } from '@/components';

const UserConfirm = () => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!nicknameRef.current?.value) {
      alert('닉네임을 입력해 주세요');
      return;
    }

    navigate('/app-completed');
  };

  return (
    <>
      <Back />
      <Middle>
        <div>
          <Text>
            <SearchTextTop>반가워요 귤줍님,</SearchTextTop>
            이용할 닉네임을 알려주세요
          </Text>
          <TextField fullWidth label="닉네임" inputRef={nicknameRef} />
        </div>
      </Middle>
      <Bottom>
        <NextButton onClick={handleSubmit}>
          <Check />
        </NextButton>
      </Bottom>
    </>
  );
};

export default UserConfirm;

const Middle = styled.div`
  width: 100%;
  & > div {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
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
  float: right;
`;

const Bottom = styled.div`
  width: 85%;
  padding-bottom: 4rem;
`;

const Check = () => {
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
