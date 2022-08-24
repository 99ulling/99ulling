import React, { ReactElement, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Item {
  to: string;
  icon: ReactElement;
}

const items: Item[] = [
  {
    to: '/',
    icon: (
      <svg
        width="31"
        height="42"
        viewBox="0 0 31 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.01926 16.3165H5.89426V30.4569H12.6755V20.6674H18.488V30.4569H25.2693V16.3165H29.1423L15.5818 3.26392L2.01926 16.3165Z"
          fill="black"
        />
        <path
          d="M4.85529 40V37.1595H8.22407V40H9.01965V33.6354H8.22407V36.4634H4.85529V33.6354H4.06592V40H4.85529ZM16.003 36.8177C16.003 34.8039 14.8159 33.5483 13.1874 33.5483C11.5527 33.5483 10.3718 34.8039 10.3718 36.8177C10.3718 38.8315 11.5527 40.087 13.1874 40.087C14.8159 40.087 16.003 38.8315 16.003 36.8177ZM15.2323 36.8177C15.2323 38.4586 14.3373 39.3474 13.1874 39.3474C12.0375 39.3474 11.1425 38.4586 11.1425 36.8177C11.1425 35.1768 12.0375 34.288 13.1874 34.288C14.3373 34.288 15.2323 35.1768 15.2323 36.8177ZM17.3595 40H18.1053V35.1892H18.1613L20.1378 40H20.8401L22.8167 35.1954H22.8788V40H23.6247V33.6354H22.6737L20.5294 38.875H20.4548L18.3104 33.6354H17.3595V40ZM29.1356 40V39.2977H26.0217V37.1595H28.887V36.4634H26.0217V34.3377H29.0921V33.6354H25.2323V40H29.1356Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    to: '/hiking',
    icon: (
      <svg
        width="31"
        height="42"
        viewBox="0 0 31 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.875 27.125H27.125V25.4084C27.125 20.739 21.9189 16.9531 15.5 16.9531C9.08106 16.9531 3.875 20.739 3.875 25.4084V27.125ZM15.5 15.1977C12.3225 15.1977 9.74756 12.6228 9.74756 9.44531C9.74756 6.26781 12.3225 3.69287 15.5 3.69287C18.6775 3.69287 21.2524 6.26781 21.2524 9.44531C21.2524 12.6228 18.6775 15.1977 15.5 15.1977Z"
          fill="black"
        />
        <path
          d="M9.91387 40H10.6597V35.1892H10.7157L12.6922 40H13.3945L15.3711 35.1954H15.4332V40H16.1791V33.6354H15.2281L13.0838 38.875H13.0092L10.8648 33.6354H9.91387V40ZM19.5395 37.3895V40H20.3351V37.3895L22.6348 33.6354H21.7273L19.9746 36.5939H19.9L18.1472 33.6354H17.2398L19.5395 37.3895Z"
          fill="black"
        />
      </svg>
    ),
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const renderItems = () =>
    items.map((item) => (
      <StyledNavbarItem key={item.to} onClick={() => navigate(item.to)}>
        {item.icon}
      </StyledNavbarItem>
    ));

  const memorizedItems = useMemo(() => renderItems(), []);

  return (
    <>
      <StyledNavbar>{memorizedItems}</StyledNavbar>
      <Space />
    </>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 1.5rem 1.5rem 0 0;
`;

const StyledNavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight: bolder;
  height: 3.75rem;
  gap: 0.375rem;
  cursor: pointer;
  svg {
    width: 1.313rem;
    height: 1.25rem;
  }
`;

const Space = styled.div`
  width: 100%;
  height: 5.75rem;
`;
