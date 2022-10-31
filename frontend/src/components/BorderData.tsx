import styled from 'styled-components';

interface BorderData {
  title: string;
  value: string;
}

const DataTable = ({ title, value }: BorderData) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>{value}</div>
    </Wrapper>
  );
};

export default DataTable;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0;
  border-top: 1px solid #c7c7c7;
`;

const Title = styled.div`
  font-weight: bold;
`;
