import { Input } from '@goorm-dev/gds-goormthon';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { signUp } from '@/api/api';
import {
  loginFamerAddressState,
  loginFamerNameState,
  shareState,
} from '@/atom/atom';
import { Back, DefaultButton } from '@/components';

const FamerUpload = () => {
  const [ggul, setGgul] = useState(0);
  const navigate = useNavigate();
  const setShareState = useSetRecoilState(shareState);
  const famerName = useRecoilValue(loginFamerNameState);
  const famerAddressState = useRecoilValue(loginFamerAddressState);

  const onChangeGgul = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const ggulCurrent = e.target.value;

    setGgul(parseInt(ggulCurrent));
  }, []);

  const handleSubmit = () => {
    if (ggul) {
      signUp({
        address: famerAddressState,
        latitude: 126.616186,
        longitude: 33.273398,
        nickname: famerName,
        userType: 'FAMER',
      })
        .then(() => {
          alert('성공적으로 등록했어요.');
          setShareState(ggul);
        })
        .then(() => navigate('/famerappcompleted'))
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
        <FamerName>{famerName}</FamerName>
        <FamerAddress>{famerAddressState}</FamerAddress>
        <div style={{ width: '80%', padding: '2rem 0' }}>
          <InputSetting
            style={{ textAlign: 'center', padding: '1.6rem 0' }}
            placeholder="귤 나눔 개수를 알려주세요."
            onChange={onChangeGgul}
          />
        </div>
        <ButtonPosition>
          <DefaultButton
            backgroundColor="#F57D14"
            onClick={() => handleSubmit()}
            padding="0.8rem 0"
          >
            확인하기
          </DefaultButton>
        </ButtonPosition>
      </Wrapper>
    </div>
  );
};

export default FamerUpload;

const FamerName = styled.div`
  font-weight: bold;
  font-size: 2rem;
  padding-top: 4rem;
`;

const FamerAddress = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding-top: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Time = styled.div`
  color: #727272;
  padding-top: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Introduction = styled.div`
  color: #727272;
  text-align: center;
  font-size: 14px;
  line-height: 1.2rem;
`;

const InputSetting = styled(Input)`
  padding: 1.6rem 0;
  padding-left: 20px;
  border-color: none;
  text-align: 'center';
`;

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 60px;
  width: 100%;
  padding: 1.2rem 42px 0 42px;
`;
