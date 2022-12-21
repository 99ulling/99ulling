import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { searchState } from '@/atom/atom';
import { Back, DefaultButton } from '@/components';
import DataTable from '@/components/BorderData';
import Lottie from '@/components/Lottie';

const CompleteLottie = (props: Omit<ComponentProps<typeof Lottie>, 'src'>) => (
  <LottieWrapper>
    <Lottie {...props} data-testid="completeLottie" src="/public/check.json" />
  </LottieWrapper>
);

const AppCompleted = () => {
  const farmData = useRecoilValue(searchState);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Back />
      <CompleteLottie loop={false} />
      <SearchText>
        <CompletedInfo>나눔이 신청되었어요</CompletedInfo>
        자정이 지나면 나눔이 자동으로 종료됩니다.
      </SearchText>
      <DataTable title="신청한 귤 개수" value="15개" />
      <DataTable title="농가 이름" value={farmData.name} />
      <DataTable title="나눔 위치" value={farmData.address} bottom="bottom" />

      <ButtonPosition>
        <DefaultButton
          backgroundColor="#F57D14"
          onClick={() => navigate('/')}
          padding="0.8rem 42px"
        >
          나눔받기
        </DefaultButton>
      </ButtonPosition>
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
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 3rem;
  line-height: 2.2rem;
`;

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 60px;
  width: 80%;
`;

const CompletedInfo = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
`;

const LottieWrapper = styled.div`
  width: 35%;
  height: 110px;
`;
