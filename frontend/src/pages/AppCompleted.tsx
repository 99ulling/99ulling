import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { searchState } from '@/atom/atom';
import { Back, DefaultButton } from '@/components';
import Lottie from '@/components/Lottie';

const CompleteLottie = (props: Omit<ComponentProps<typeof Lottie>, 'src'>) => (
  <Lottie {...props} data-testid="completeLottie" src="/public/check.json" />
);

const AppCompleted = () => {
  const femarData = useRecoilValue(searchState);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Back />
      <div style={{ width: '35%', height: '110px' }}>
        <CompleteLottie loop={false} />
      </div>
      <SearchText>
        <SearchTextTop>
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '1.6rem',
            }}
          >
            신청완료
          </span>
        </SearchTextTop>
        농가에 도착하면 나눔받기가 켜져요.
      </SearchText>
      <DataLine id="top">
        <div>
          <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="28.2619"
              cy="27.1385"
              rx="13.9958"
              ry="12.9192"
              transform="rotate(-16.4378 28.2619 27.1385)"
              fill="#FFAA01"
            />
            <path
              d="M39.0952 23.1574C41.0699 29.8508 36.796 37.0449 29.4962 39.1986C22.1965 41.3523 14.7019 37.6302 12.7271 30.9369C10.7524 24.2436 15.0263 17.0494 22.3261 14.8958C29.6258 12.7421 37.1204 16.4641 39.0952 23.1574Z"
              stroke="black"
              strokeWidth="0.5"
            />
            <path
              d="M24.6278 15.9742C25.1905 14.8762 26.697 14.721 27.4717 15.6812L27.7101 15.9766C27.9239 16.2415 28.2571 16.3802 28.5956 16.3453L29.8911 16.2119C30.7551 16.1228 31.0907 17.3037 30.309 17.6824C29.8596 17.9001 29.7298 18.4795 30.0434 18.8682L30.0906 18.9267C30.5944 19.5511 30.0148 20.4576 29.2367 20.2624L27.0007 19.7015C26.6348 19.6097 26.2482 19.6496 25.9087 19.8141L23.834 20.8191C23.1121 21.1688 22.3599 20.3995 22.7257 19.6856L22.76 19.6187C22.9878 19.1742 22.7426 18.6334 22.2582 18.5119C21.4157 18.3005 21.5034 17.0761 22.3675 16.9871L23.663 16.8536C24.0015 16.8187 24.2994 16.6149 24.4546 16.312L24.6278 15.9742Z"
              fill="#8DC73F"
            />
            <circle
              cx="26.2452"
              cy="16.4016"
              r="1.07695"
              transform="rotate(-45.7906 26.2452 16.4016)"
              fill="#598C45"
            />
          </svg>
          신청한 귤 개수
        </div>
        <div>15개</div>
      </DataLine>
      <DataLine>
        <div>농가 이름</div>
        <div>{femarData.name}</div>
      </DataLine>
      <DataLine>
        <div>나눔 위치</div>
        <div>{femarData.address}</div>
      </DataLine>
      <DataLine id="bottom">
        <div>이용 시간</div>
        <div>{femarData.availableTime}</div>
      </DataLine>
      <div style={{ width: '100%', paddingTop: '1.2rem' }}>
        <DefaultButton
          backgroundColor="#F57D14"
          onClick={() => navigate('/usertypechoice')}
          padding="0.8rem 0"
        >
          신청하기
        </DefaultButton>
      </div>
    </Wrapper>
  );
};

export default AppCompleted;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 42px;
`;

const SearchText = styled.div`
  font-size: 1rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
`;

const SearchTextTop = styled.div`
  text-align: center;
  color: '#727272';
  padding-bottom: 20px;
`;

const DataLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #d9d9d9;

  &#top {
    font-weight: bold;
  }

  &#bottom {
    border-bottom: 1px solid #d9d9d9;
  }
`;
