import styled from 'styled-components';

import { Back, BeforeShare } from '@/components';

const MyPage = () => {
  return (
    <div>
      <Back />
      <MyPageTop>
        <b>8월 26일</b>
        <br />
        <b>농장 이름</b>님 안녕하세요!
        <br />
        나눔 상황을 알려드려요
      </MyPageTop>
      <div style={{ padding: '0 42px' }}>
        <MyPageSubTitle>현재 진행중인 나눔</MyPageSubTitle>
        <CurrentShare>잔여 개수 100개</CurrentShare>
        <div>
          <MyPageSubTitle>과거 나눔 기록</MyPageSubTitle>
          <CurrentShareWrapper>
            <BeforeShare calendar="8월 24일" total={100} rest={20} />
            <BeforeShare calendar="8월 22일" total={100} rest={20} />
          </CurrentShareWrapper>
          <CurrentShareWrapper>
            <BeforeShare calendar="8월 21일" total={100} rest={20} />
            <BeforeShare calendar="8월 2일" total={100} rest={20} />
          </CurrentShareWrapper>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

const MyPageTop = styled.div`
  background-color: #f57d14;
  color: white;
  padding: 7rem 42px;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const MyPageSubTitle = styled.div`
  padding-top: 3rem;
  padding-bottom: 1rem;
  font-weight: bold;
`;

const CurrentShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CurrentShareWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 6px;
`;
