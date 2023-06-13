import styled from "@emotion/styled";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { DefaultButton } from "@/components";
import { useFlow } from "@/useFlow";

const NotFound = () => {
  const { push } = useFlow();

  return (
    <AppScreen appBar={{ title: "귤러가요" }}>
      <Wrapper>
        <Title>404</Title>
        <Wrapper>
          <StyledText>요청하신 페이지를 찾을 수 없어요</StyledText>
          <StyledText id="last">올바른 주소로 접속해 주세요</StyledText>

          <DefaultButton
            onClick={() => push("Sharing", {})}
            backgroundColor="#F57D14"
            color="#fff"
          >
            홈으로 돌아가기
          </DefaultButton>
        </Wrapper>
      </Wrapper>
    </AppScreen>
  );
};

export default NotFound;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 6rem;
  font-weight: bold;
  color: #f57d14;
  font-family: "Bazzi";
`;

const StyledText = styled.div`
  padding-top: 6px;
  font-size: 1.2rem;
  font-weight: bold;

  &#last {
    padding-bottom: 2rem;
  }
`;
