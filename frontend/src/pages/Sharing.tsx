import { Input } from '@goorm-dev/gds-goormthon';

import { DefaultButton } from '@/components';

const Sharing = () => {
  return (
    <div>
      <div style={{ width: '100%', padding: '2rem 0' }}>
        <Input placeholder="닉네임" />
      </div>
      <DefaultButton color="#000">로그인</DefaultButton>
      <DefaultButton>회원가입</DefaultButton>
    </div>
  );
};

export default Sharing;
