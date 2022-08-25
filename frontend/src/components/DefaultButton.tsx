import { Button } from '@goorm-dev/gds-goormthon';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  borderColor?: string;
}

const DefaultButton = ({
  children,
  backgroundColor,
  color,
  onClick,
  padding,
  borderColor,
}: Props) => {
  return (
    <Wrapper>
      <StyledButton
        onClick={onClick}
        backgroundColor={backgroundColor}
        color={color}
        padding={padding}
        borderColor={borderColor}
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

const StyledButton = styled(Button)<{
  color: string;
  backgroundColor: string;
  padding: string;
  borderColor: string;
}>`
  width: 100%;
  height: none;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  border-color: ${(props) => props.borderColor};
`;
