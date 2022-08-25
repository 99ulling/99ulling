import styled from 'styled-components';

import { BeforeShare } from '@/components';

const MyPage = () => {
  return (
    <div>
      <MyPageTop>
        <b>농장 이름</b>님 안녕하세요!
        <br />
        나눔 상황을 알려드려요
      </MyPageTop>
      <div>
        <MyPageSubTitle>현재 진행중인 나눔</MyPageSubTitle>
        <CurrentShare>
          <svg
            width="151"
            height="151"
            viewBox="0 0 151 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="75.5" cy="75.5" r="75.5" fill="#FF8A48" />
            <circle cx="75.5" cy="75.5" r="69.8843" fill="white" />
          </svg>
          <ul>
            <li>- 총 나눔 개수</li>
            <li>- 잔여 개수</li>
          </ul>
        </CurrentShare>
        <div>
          <MyPageSubTitle>과거 나눔 기록</MyPageSubTitle>
          <CurrentShareWrapper>
            <BeforeShare calendar="8월 24일" total={100} rest={20} />
            <BeforeShare calendar="8월 24일" total={100} rest={20} />
          </CurrentShareWrapper>
          <CurrentShareWrapper>
            <BeforeShare calendar="8월 24일" total={100} rest={20} />
            <BeforeShare calendar="8월 24일" total={100} rest={20} />
          </CurrentShareWrapper>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

const MyPageTop = styled.div`
  background-color: #fff9f1;
  padding: 3rem 42px;
  font-size: 1.4rem;
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
