import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return <HeaderWrapper onClick={() => navigate('/')}>귤러가요</HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  font-family: 'bazzi';
  font-size: 2rem;
  color: #f57d14;
  cursor: pointer;
`;
