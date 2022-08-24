import { Button } from '@goorm-dev/gds-goormthon';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: string;
}

const DefaultButton = ({ children, color }: Props) => {
  return (
    <Wrapper>
      <StyledButton color={color}>{children}</StyledButton>
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
