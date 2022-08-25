import { ChevronDownIcon } from '@goorm-dev/gds-goormthon';
import styled from 'styled-components';

const FamerSharing = () => {
  return (
    <Wrapper>
      <Location>
        현위치 제주도 첨단로 242
        <ChevronDownIcon />
      </Location>
      <SearchText>
        <SearchTextTop>
          <span style={{ fontWeight: 'bold' }}>귤러가요</span>님
        </SearchTextTop>
        오늘 나눔 하실건가요?
      </SearchText>
      <ChoiceText>이동수단을 선택해주세요</ChoiceText>
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
