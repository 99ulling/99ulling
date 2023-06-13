import styled from "@emotion/styled";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ComponentProps } from "react";
import { useRecoilValue } from "recoil";

import { searchState } from "@/atom/atom";
import { Button } from "@/components";
import DataTable from "@/components/BorderData";
import Lottie from "@/components/Lottie";
import { useFlow } from "@/useFlow";

const CompleteLottie = (props: Omit<ComponentProps<typeof Lottie>, "src">) => (
  <LottieWrapper>
    <Lottie {...props} data-testid="completeLottie" src="/public/check.json" />
  </LottieWrapper>
);

const AppCompleted = () => {
  const farmData = useRecoilValue(searchState);
  const { push } = useFlow();

  return (
    <AppScreen appBar={{ title: "귤러가요" }}>
      <Middle>
        <div>
          <CompleteLottie loop={false} />
          <SearchText>
            <CompletedInfo>나눔이 신청되었어요</CompletedInfo>
            자정이 지나면 나눔이 자동으로 종료됩니다.
          </SearchText>
          <DataTable
            title="신청한 귤 개수"
            value="15개"
            remainCount="remainCount"
          />
          <DataTable title="농가 이름" value={farmData.name} />
          <DataTable
            title="나눔 위치"
            value={farmData.address}
            bottom="bottom"
          />
        </div>
      </Middle>
      <Bottom>
        <Button appearance="primary" onClick={() => push("Sharing", {})}>
          완료
        </Button>
      </Bottom>
    </AppScreen>
  );
};

export default AppCompleted;

const Middle = styled.div`
  width: 100%;
  & > div {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const SearchText = styled.div`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 3rem;
  line-height: 2.2rem;
`;

const CompletedInfo = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
`;

const LottieWrapper = styled.div`
  width: 35%;
  height: 110px;
`;

const Bottom = styled.div`
  width: 85%;
  padding-bottom: 4rem;
`;
