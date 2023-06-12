import styled from "@emotion/styled";

interface BorderData {
  title: string;
  value: string;
  bottom?: "bottom";
  remainCount?: "remainCount";
}

const DataTable = ({ title, value, bottom, remainCount }: BorderData) => {
  return (
    <Wrapper id={bottom}>
      <Title>{title}</Title>
      <Value id={remainCount}>{value}</Value>
    </Wrapper>
  );
};

export default DataTable;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
  border-top: 1px solid #c7c7c7;
  font-size: 0.8rem;

  &#bottom {
    border-bottom: 1px solid #c7c7c7;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  &#remainCount {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
