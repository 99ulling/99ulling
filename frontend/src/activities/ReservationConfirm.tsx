import styled from '@emotion/styled';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useRef } from 'react';

import { getReservation } from '@/api/api';
import { useFlow } from '@/useFlow';

const ReservationConfirm = () => {
  const nicknameRef = useRef<HTMLTextAreaElement>(null);
  const { push } = useFlow();

  const handleSubmit = () => {
    if (!nicknameRef.current) return;

    if (!nicknameRef.current.value) {
      alert('닉네임을 입력해 주세요');
      return;
    }

    getReservation(nicknameRef.current.value)
      .then((data) => {
        if (!nicknameRef.current) return;
        push('MyPage', {
          nickname: nicknameRef.current.value,
          address: data.data.data.address,
          farmImage: data.data.data.farmImage,
          farmName: data.data.data.farmName,
          phoneNumber: data.data.data.phoneNumber,
          reservationCount: data.data.data.reservationCount,
          reservationId: data.data.data.reservationId,
        });
      })
      .catch(() => alert('닉네임을 확인해 주세요'));
  };

  return (
    <AppScreen appBar={{ title: '귤러가요' }}>
      <Middle>
        <div>
          <Text>
            <SearchTextTop>반가워요 귤줍님,</SearchTextTop>
            예약하신 닉네임을 알려주세요
          </Text>
          <textarea placeholder="닉네임" ref={nicknameRef} />
        </div>
      </Middle>
      <Bottom>
        <NextButton onClick={handleSubmit}>
          <Check />
        </NextButton>
      </Bottom>
    </AppScreen>
  );
};

export default ReservationConfirm;

const Middle = styled.div`
  width: 100%;
  & > div {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

const Text = styled.div`
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  padding-bottom: 3rem;
`;

const SearchTextTop = styled.div`
  padding-bottom: 10px;
`;

const NextButton = styled.button`
  float: right;
`;

const Bottom = styled.div`
  width: 85%;
  padding-bottom: 4rem;
`;

const Check = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="56" rx="8" fill="#F57D14" />
      <path
        d="M15 27.4118L24.1765 38L41 18"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
