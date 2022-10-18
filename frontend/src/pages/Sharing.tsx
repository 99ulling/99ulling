import { Back, DefaultButton } from '@/components';

const Sharing = () => {
  return (
    <div>
      <Back />
      <div style={{ width: '100%', padding: '2rem 0' }}>
        <input placeholder="닉네임" />
      </div>
      <DefaultButton color="#000">로그인</DefaultButton>
      <DefaultButton>회원가입</DefaultButton>
    </div>
  );
};

export default Sharing;
