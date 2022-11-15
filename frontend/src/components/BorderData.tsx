import styled from '@emotion/styled';

interface BorderData {
  title: string;
  value: string;
  bottom?: 'bottom';
}

const DataTable = ({ title, value, bottom }: BorderData) => {
  return (
    <Wrapper id={bottom}>
      <Title>{title}</Title>
      <div>{value}</div>
    </Wrapper>
  );
};

export default DataTable;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0;
  border-top: 1px solid #c7c7c7;

  &#bottom {
    border-bottom: 1px solid #c7c7c7;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;
