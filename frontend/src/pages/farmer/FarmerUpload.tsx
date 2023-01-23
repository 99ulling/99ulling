import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { signUp } from '@/api/api';
import { loginFarmerNameState, shareState } from '@/atom/atom';
import { Back, DefaultButton } from '@/components';

const FarmerUpload = () => {
  const [ggul, setGgul] = useState(0);
  const navigate = useNavigate();
  const setShareState = useSetRecoilState(shareState);
  const farmerName = useRecoilValue(loginFarmerNameState);

  const onChangeGgul = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const ggulCurrent = e.target.value;

    setGgul(parseInt(ggulCurrent));
  }, []);

  const handleSubmit = () => {
    if (ggul) {
      signUp({
        address: '제주도 서귀포시 농장로 342길 2',
        latitude: 126.616186,
        longitude: 33.273398,
        nickname: farmerName,
        userType: 'FARMER',
      })
        .then(() => {
          alert('성공적으로 등록했어요.');
          setShareState(ggul);
        })
        .then(() => navigate('/farmer-app-completed'))
        .catch(() => {
          alert('데이터 저장에 실패했어요.\n다시 시도해주세요.');
          navigate('/');
        });
    }
  };

  return (
    <div>
      <Back />
      <img width="100%" src="/sharing99.png" alt="sharing99.png" />
      <Wrapper>
        <FarmerName>{farmerName}</FarmerName>
        <TextFieldWrapper>
          <TextField fullWidth label="귤 나눔 개수" onChange={onChangeGgul} />
        </TextFieldWrapper>
        <ButtonPosition>
          <DefaultButton
            backgroundColor="#F57D14"
            onClick={() => handleSubmit()}
            padding="0.8rem 0"
          >
            귤러가요
          </DefaultButton>
        </ButtonPosition>
      </Wrapper>
    </div>
  );
};

export default FarmerUpload;

const FarmerName = styled.div`
  font-weight: bold;
  font-size: 2rem;
  padding-top: 4rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 60px;
  width: 80%;
  padding: 1.2rem 42px 0 42px;
`;

const TextFieldWrapper = styled.div`
  width: 80%;
  padding: 2rem 0;
`;
