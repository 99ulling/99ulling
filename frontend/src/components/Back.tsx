import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();
  return (
    <ButtonPosition onClick={() => navigate(-1)}>
      <svg
        width="13"
        height="22"
        viewBox="0 0 13 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 1L2 11L12 21" stroke="black" strokeWidth="2" />
      </svg>
    </ButtonPosition>
  );
};

export default Back;

const ButtonPosition = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
`;
