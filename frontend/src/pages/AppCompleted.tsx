import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { searchState } from '@/atom/atom';
import { Back, DefaultButton } from '@/components';
import DataTable from '@/components/BorderData';
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
              fontSize: '1.8rem',
            }}
          >
            나눔이 신청되었어요
          </span>
        </SearchTextTop>
        자정이 지나면 나눔이 자동으로 종료됩니다.
      </SearchText>
      <DataTable title="신청한 귤 개수" value="15개" />
      <DataTable title="농가 이름" value={femarData.name} />
      <DataTable title="나눔 위치" value={femarData.address} bottom="bottom" />

      <ButtonPosition>
        <DefaultButton
          backgroundColor="#F57D14"
          onClick={() => navigate('/')}
          padding="0.8rem 0"
        >
          확인
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
  font-size: 1rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
`;

const SearchTextTop = styled.div`
  text-align: center;
  color: '#727272';
  padding-bottom: 20px;
`;

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 60px;
  width: 100%;
  padding: 1.2rem 42px 0 42px;
`;
