import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { loginFarmerAddressState, loginFarmerNameState } from '@/atom/atom';
import { Back, DefaultButton } from '@/components';

const FarmerSharing = () => {
  const navigate = useNavigate();
  const farmerName = useRecoilValue(loginFarmerNameState);
  const farmerAddress = useRecoilValue(loginFarmerAddressState);
  return (
    <Wrapper>
      <Back />
      <Location>농장 위치 {farmerAddress}</Location>
      <SearchText>
        <SearchTextTop>
          <span style={{ fontWeight: 'bold' }}>{farmerName}</span>님
        </SearchTextTop>
        오늘 나눔 하실건가요?
      </SearchText>
      <div
        style={{
          width: '100%',
          padding: '0 42px',
          paddingTop: '1.2rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '49%' }}>
          <DefaultButton
            backgroundColor="828282"
            color="828282"
            padding="1rem 0"
            onClick={() => navigate('/')}
          >
            아니요
          </DefaultButton>
        </div>
        <div style={{ width: '49%' }}>
          <DefaultButton
            onClick={() => navigate('/farmer-upload')}
            backgroundColor="D9D9D9"
            padding="1rem 0"
          >
            예
          </DefaultButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default FarmerSharing;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Location = styled.div`
  color: #727272;
  padding-bottom: 1rem;
`;

const SearchText = styled.div`
  font-size: 1.6rem;
  padding: 1rem 0;
`;

const SearchTextTop = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;
