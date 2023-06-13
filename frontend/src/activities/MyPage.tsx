import styled from "@emotion/styled";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useActivityParams } from "@stackflow/react";

import { Button } from "@/components";
import { useFlow } from "@/useFlow";

const MyPage = () => {
  const { push } = useFlow();
  const {
    nickname,
    address,
    farmImage,
    farmName,
    phoneNumber,
    reservationCount,
  } = useActivityParams<{
    nickname: string;
    address: string;
    farmImage: string;
    farmName: string;
    phoneNumber: string;
    reservationCount: string;
  }>();

  return (
    <AppScreen appBar={{ title: "귤러가요" }}>
      <Middle>
        <div>
          <Text>
            <SearchTextTop>{nickname ?? "귤줍"}님,</SearchTextTop>
            나눔 상황을 알려드려요
          </Text>
          <InfoWrapper>
            <FarmerInfo>
              <FarmerImage
                src={farmImage ?? "/sharing99.png"}
                alt={farmImage ?? "sharing99"}
              />
              <FarmerTextInfo>
                <div>
                  <FarmerTitle>{farmName}</FarmerTitle>
                  <FarmAddress>{address}</FarmAddress>
                </div>
                <SharingGgulCount>
                  나눔한 귤 개수: {reservationCount}
                </SharingGgulCount>
              </FarmerTextInfo>
            </FarmerInfo>
            <Button appearance="primary" onClick={() => push("Sharing", {})}>
              완료하기
            </Button>
            <Button appearance="primary">
              <TelPhone href={`tel:${phoneNumber}`}>농부에게 전화하기</TelPhone>
            </Button>
          </InfoWrapper>
        </div>
      </Middle>
      <div></div>
    </AppScreen>
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
