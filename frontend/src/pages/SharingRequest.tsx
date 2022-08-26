import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { searchState } from '@/atom/atom';
import { Back, DefaultButton } from '@/components';

const SharingRequest = () => {
  const [loading, setLoading] = useState(false);
  const femarData = useRecoilValue(searchState);

  const Loading = () => {
    return (
      <LoadingWrapper loading={loading} className="overlay">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <img width={300} src="loading.gif" alt="loading.gif" />
        </div>
      </LoadingWrapper>
    );
  };
  const navigate = useNavigate();
  return (
    <div>
      <Loading />
      <Back />
      <ImgWrapper>
        <img
          width="100%"
          height={320}
          src={femarData.farmImage}
          alt={femarData.farmImage}
        />
      </ImgWrapper>
      <Wrapper>
        <FamerName>{femarData.name}</FamerName>
        <FamerAddress>{femarData.address}</FamerAddress>
        <Time>이용 시간 {femarData.availableTime}</Time>
        <Bar>
          잔여 개수
          <Count>
            {femarData.remainCount}/{femarData.totalCount}
          </Count>
        </Bar>
        <Introduction>{femarData.femarData}</Introduction>
        <ButtonPosition>
          <DefaultButton
            backgroundColor="#F57D14"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                navigate('/appcompleted');
              }, 300);
            }}
            padding="0.8rem 0"
          >
            신청하기
          </DefaultButton>
        </ButtonPosition>
      </Wrapper>
    </div>
  );
};

export default SharingRequest;

const FamerName = styled.div`
  font-weight: bold;
  font-size: 2rem;
  padding-top: 4rem;
`;

const FamerAddress = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding-top: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Time = styled.div`
  color: #727272;
  padding-top: 1rem;
  font-size: 1rem;
`;

const Bar = styled.div`
  padding: 2rem 0;
  font-size: 1rem;
  font-weight: bold;
  color: #f57d14;
  text-align: center;
`;

const Introduction = styled.div`
  color: #727272;
  text-align: center;
  font-size: 14px;
  line-height: 1.2rem;
`;

const LoadingWrapper = styled.div<{ loading: boolean }>`
  &.overlay {
    display: ${(props) => (props.loading ? 'block' : 'none')};
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 0.85);
    overflow-x: hidden;
  }
`;

const ImgWrapper = styled.div`
  height: 320px;
  background-color: #777777;
`;

const Count = styled.div`
  font-size: 3.2rem;
  padding-top: 10px;
`;

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 60px;
  width: 100%;
  padding: 1.2rem 42px 0 42px;
`;
