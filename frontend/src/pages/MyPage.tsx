import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import { DefaultButton } from '@/components';

const MyPage = () => {
  const { state } = useLocation();
  const { nickname, prop } = state;
  const navigate = useNavigate();

  return (
    <>
      <Middle>
        <div>
          <Text>
            <SearchTextTop>{nickname ?? '귤줍'}님,</SearchTextTop>
            나눔 상황을 알려드려요
          </Text>
          <InfoWrapper>
            <FarmerInfo>
              <FarmerImage
                src={prop.farmImage ?? '/sharing99.png'}
                alt={prop.farmImage ?? 'sharing99'}
              />
              <FarmerTextInfo>
                <div>
                  <FarmerTitle>{prop.farmName}</FarmerTitle>
                  <FarmAddress>{prop.address}</FarmAddress>
                </div>
                <SharingGgulCount>
                  나눔한 귤 개수: {prop.reservationCount}
                </SharingGgulCount>
              </FarmerTextInfo>
            </FarmerInfo>
            <DefaultButton
              backgroundColor="#F57D14"
              onClick={() => navigate('/')}
            >
              완료하기
            </DefaultButton>
            <DefaultButton backgroundColor="#F57D14">
              <TelPhone href={`tel:${prop.phoneNumber}`}>
                농부에게 전화하기
              </TelPhone>
            </DefaultButton>
          </InfoWrapper>
        </div>
      </Middle>
      <div></div>
    </>
  );
};

export default MyPage;

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
  padding-bottom: 3rem;
`;

const SearchTextTop = styled.div`
  padding-bottom: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1.5px solid #f57d14;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  gap: 1rem;
`;

const FarmerInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

const FarmerImage = styled.img`
  width: 120px;
  height: 100px;
  border-radius: 0.5rem;
`;

const FarmerTitle = styled.h1`
  word-break: keep-all;
  font-size: 0.9rem;
`;

const FarmAddress = styled.div`
  word-break: keep-all;
  font-size: 0.8rem;
  color: #4f4f4f;
`;

const SharingGgulCount = styled.div`
  font-size: 0.8rem;
  color: #4f4f4f;
`;

const FarmerTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TelPhone = styled.a`
  text-decoration: none;
  color: white;
`;
