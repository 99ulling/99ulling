import { Button } from '@goorm-dev/gds-goormthon';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
}

const DefaultButton = ({ children, color, onClick, ...rest }: Props) => {
  return (
    <Wrapper>
      <StyledButton onClick={onClick} color={color} {...rest}>
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

const StyledButton = styled(Button)<{ color: string }>`
  width: 100%;
  background-color: ${(props) => props.color};
`;
