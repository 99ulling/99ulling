import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { loginNickNameState } from '@/atom/atom';
import { Back } from '@/components';

const announcement = {
  1: {
    topAnnouncement: '반가워요 귤줍님,',
    bottomAnnouncement: '이용할 닉네임을 알려주세요',
  },
  2: {
    topAnnouncement: '간단한 인증으로',
    bottomAnnouncement: '제주도 귤 바로 즐겨볼까요?',
  },
};

const regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
type RoundNumber = 1 | 2;

const UserConfirm = () => {
  const [round, setRound] = useState<RoundNumber>(1);
  const [nickName, setNickName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const setAtomNickName = useSetRecoilState(loginNickNameState);

  const onChangeNickName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nickNameCurrent = e.target.value;

      setNickName(nickNameCurrent);
    },
    []
  );

  const onChangePhoneNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nickNameCurrent = e.target.value;

      setPhoneNumber(nickNameCurrent);
    },
    []
  );

  const handleSubmit = () => {
    if (round === 1 && nickName) {
      setAtomNickName(nickName);
      setRound(2);
      return;
    } else {
      alert('닉네임을 입력해 주세요');
    }

    if (round === 2 && regExp.test(phoneNumber)) {
      alert('가입을 성공했어요.\n바로 나눔 도와드릴게요.');
      navigate('/location-level');
    } else {
      alert('올바른 입력인지 확인해주세요.');
    }
    // if (nickName) {
    //   signUp({
    //     address: '',
    //     latitude: 126.616186,
    //     longitude: 33.273398,
    //     nickname: nickName,
    //     userType: 'USER',
    //   })
    //     .then(() => {
    //       alert('가입을 성공했어요.\n바로 나눔 도와드릴게요.');
    //       navigate('/location-level');
    //     })
    //     .catch(() => {
    //       alert('올바른 입력인지 확인해주세요.');
    //     });
    // } else {
    //   setDanger(true);
    // }
  };

  return (
    <Wrapper>
      <Back />
      <Text>
        <Round>
          {round}
          <GrayColor>/2</GrayColor>
        </Round>
        <SearchTextTop>{announcement[round].topAnnouncement}</SearchTextTop>
        {announcement[round].bottomAnnouncement}
      </Text>
      {round === 1 ? (
        <TextField fullWidth label="닉네임" onChange={onChangeNickName} />
      ) : (
        <TextField
          fullWidth
          label="휴대폰 번호"
          onChange={onChangePhoneNumber}
        />
      )}
      <NextButton onClick={handleSubmit}>
        {round === 1 ? <RightArrow /> : <Check />}
      </NextButton>
    </Wrapper>
  );
};

export default UserConfirm;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;
  gap: 4rem;
`;

const Text = styled.div`
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
`;

const SearchTextTop = styled.div`
  padding-bottom: 10px;
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 60px;
  right: 42px;
`;

const Round = styled.div`
  padding-bottom: 1rem;
  font-weight: 500;
  font-size: 1rem;
`;

const GrayColor = styled.span`
  color: #777778;
`;

const RightArrow = () => {
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
        d="M12 33H43.5L34.5 23"
        stroke="#F2F2F2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

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
