import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
}

const DefaultButton = ({
  children,
  backgroundColor,
  color,
  onClick,
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color ?? 'white'}
    >
      {children}
    </StyledButton>
  );
};

export default DefaultButton;

const StyledButton = styled.button<{
  color: string;
  backgroundColor?: string;
  padding?: string;
}>`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: 1rem 0;
  border: 1px solid ${(props) => props.color};
  border-radius: 0.5rem;
  font-weight: bold;
`;
