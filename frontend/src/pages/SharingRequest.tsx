import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Back, DefaultButton } from '@/components';

const SharingRequest = () => {
  const [loading, setLoading] = useState(false);

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
          src="/sharing99.png"
          alt="sharing99.png"
        />
      </ImgWrapper>
      <Wrapper>
        <FamerName>귤마마씨</FamerName>
        <FamerAddress>제주시 서귀포시 농장로 342길 2</FamerAddress>
        <Time>이용 시간 13:00 - 19:00</Time>
        <Bar>잔여 개수 33/100</Bar>
        <Introduction>
          제주의 뜨거운 태양과 맑은 물을 먹고
          <br /> 자라나 맛 좋고 싱싱한 감귤 농장입니다.
        </Introduction>

        <div style={{ width: '100%', padding: '1.2rem 42px 0 42px' }}>
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
        </div>
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
