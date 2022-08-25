import { ChevronDownIcon } from '@goorm-dev/gds-goormthon';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { loginFamerAddressState, loginFamerNameState } from '@/atom/atom';
import { Back, DefaultButton } from '@/components';

const FamerSharing = () => {
  const famerName = useRecoilValue(loginFamerNameState);
  const famerAddress = useRecoilValue(loginFamerAddressState);
  return (
    <Wrapper>
      <Back />
      <Location>
        농장 위치 {famerAddress}
        <ChevronDownIcon />
      </Location>
      <SearchText>
        <SearchTextTop>
          <span style={{ fontWeight: 'bold' }}>{famerName}</span>님
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
            border="828282"
            backgroundColor="828282"
            color="828282"
            padding="1rem 0"
          >
            아니요
          </DefaultButton>
        </div>
        <div style={{ width: '49%' }}>
          <DefaultButton
            border="none"
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

export default FamerSharing;

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

const ChoiceText = styled.div`
  padding: 1rem 0;
  font-weight: bold;
`;
