import { Input } from '@goorm-dev/gds-goormthon';
import styled from 'styled-components';

import { DefaultButton } from '@/components';

const UserTypeChoice = () => {
  return (
    <Wrapper>
      <div>
        <b>사용자 유형</b>을 선택해주세요
      </div>
    </Wrapper>
  );
};

export default UserTypeChoice;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
