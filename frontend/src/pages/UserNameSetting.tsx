import { Input } from '@goorm-dev/gds-goormthon';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { loginNickNameState } from '@/atom/atom';
import { Back } from '@/components';

const UserNameSetting = () => {
  const [nickName, setNickName] = useState('');
  const [danger, setDanger] = useState(false);
  const navigate = useNavigate();
  const setAtomNickName = useSetRecoilState(loginNickNameState);

  const onChangeNickName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nickNameCurrent = e.target.value;

      setNickName(nickNameCurrent);
    },
    []
  );

  const handleSubmit = () => {
    if (nickName) {
      setAtomNickName(nickName);
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
        <InputSetting onChange={onChangeNickName} />
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
  border-color: none;
  text-align: 'center';
`;
