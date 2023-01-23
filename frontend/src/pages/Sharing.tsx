import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { DefaultButton } from '@/components';
import Map from '@/components/Map';

const Sharing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Middle>
        <div>
          <Location>
            현위치 제주도 서귀포시 농장로 342길 2<LocationIcon />
          </Location>
          <Map latitude={33.450701} longitude={126.570667} />
          <DefaultButton
            onClick={() => navigate('/location-level')}
            backgroundColor="#F57D14"
          >
            나눔받기
          </DefaultButton>
        </div>
      </Middle>
      <AlreadyAppliedButton>이미 신청하셨나요?</AlreadyAppliedButton>
    </>
  );
};

export default Sharing;

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

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #727272;
  cursor: pointer;
`;

const AlreadyAppliedButton = styled.button`
  color: #727272;
  text-decoration: underline;
  padding-bottom: 10rem;
`;

const LocationIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="9" y1="0.5" x2="9" y2="5.5" stroke="black" />
      <circle cx="8" cy="8" r="7.5" fill="#D9D9D9" stroke="black" />
      <line x1="1" y1="7.5" x2="6" y2="7.5" stroke="black" />
      <line x1="11" y1="7.5" x2="16" y2="7.5" stroke="black" />
      <line x1="9" y1="10.5" x2="9" y2="15.5" stroke="black" />
    </svg>
  );
};
