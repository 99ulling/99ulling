import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
  padding?: string;
}

const DefaultButton = ({
  children,
  backgroundColor,
  color,
  onClick,
  padding,
}: Props) => {
  return (
    <Wrapper>
      <StyledButton
        onClick={onClick}
        backgroundColor={backgroundColor}
        color={color ?? 'white'}
        padding={padding}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};

export default DefaultButton;

const Wrapper = styled.div`
  width: 100%;
  padding: 9px 0;
`;

const StyledButton = styled.button<{
  color: string;
  backgroundColor?: string;
  padding?: string;
}>`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border: 1px solid ${(props) => props.color};
  border-radius: 0.5rem;
`;
