import styled from 'styled-components';

interface Props {
  calendar: string;
  total: number;
  rest: number;
}

const BeforeShare = ({ calendar, total, rest }: Props) => {
  return (
    <Wrapper>
      <Calendar>{calendar}</Calendar>
      <div>
        <CountWrapper>
          총 나눔 개수 <div>{total}</div>
        </CountWrapper>
        <CountWrapper>
          잔여 개수 <div>{rest}</div>
        </CountWrapper>
      </div>
    </Wrapper>
  );
};

export default BeforeShare;

const Wrapper = styled.div`
  width: 49%;
  background-color: #f2f2f2;
  padding: 1rem;
`;

const Calendar = styled.div`
  font-weight: bold;
  padding-bottom: 2rem;
`;

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
