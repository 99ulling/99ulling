import { Input, SearchIcon } from '@goorm-dev/gds-goormthon';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Back } from '@/components';

const FamerNameSetting = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Back />
      <Text>
        <span style={{ fontWeight: 'bold' }}>농장 정보</span>를 알려주세요
      </Text>
      <div style={{ width: '80%', padding: '2rem 0', paddingBottom: '0px' }}>
        <InputSetting
          style={{ textAlign: 'center' }}
          placeholder="농장 이름 입력하기"
        />
      </div>
      <div style={{ width: '80%' }}>
        <SearchIcon
          style={{
            position: 'relative',
            top: '40px',
            left: '20px',
            width: '26px',
            height: '26px',
          }}
        />
        <InputSetting
          style={{ textAlign: 'center' }}
          placeholder="농장 주소 검색"
        />
      </div>
      <button
        onClick={() => navigate('/famersharing')}
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

const InputSetting = styled(Input)`
  padding: 1.6rem 0;
  border-color: none;
`;
