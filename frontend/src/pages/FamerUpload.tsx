import { Input } from '@goorm-dev/gds-goormthon';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Back, DefaultButton } from '@/components';

const FamerUpload = () => {
  const [ggul, setGgul] = useState('0');
  const navigate = useNavigate();

  const onChangeGgul = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const ggulCurrent = e.target.value;

    setGgul(ggulCurrent);
  }, []);

  const handleSubmit = () => {
    if (ggul !== '0') {
      alert('성공적으로 등록했어요.');
      navigate('/mypage');
    }
  };

  return (
    <div>
      <Back />
      <img width="100%" src="/sharing99-ex.png" alt="sharing99.png" />
      <Wrapper>
        <FamerName>귤마마씨</FamerName>
        <FamerAddress>제주시 서귀포시 농장로 342길 2</FamerAddress>
        <Time>
          이용 시간을 알려주세요.
          <svg
            style={{ marginLeft: '6px' }}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.32131 4.32512L2.00031 11.6461V14.2551H4.60931L11.9293 6.93312L9.32131 4.32512ZM10.0563 3.59012L11.9013 1.74512L14.5093 4.35312L12.6653 6.19812L10.0563 3.59012Z"
              fill="#727272"
            />
          </svg>
        </Time>
        <div style={{ width: '80%', padding: '2rem 0' }}>
          <InputSetting
            style={{ textAlign: 'center', padding: '1.6rem 0' }}
            placeholder="귤 나눔 개수를 알려주세요."
            onChange={onChangeGgul}
          />
        </div>

        <Introduction>
          제주의 뜨거운 태양과 맑은 물을 먹고
          <br /> 자라나 맛 좋고 싱싱한 감귤 농장입니다.
        </Introduction>
        <div style={{ width: '100%', padding: '1.2rem 42px 0 42px' }}>
          <DefaultButton
            backgroundColor="#F57D14"
            onClick={() => handleSubmit()}
            padding="0.8rem 0"
          >
            확인하기
          </DefaultButton>
        </div>
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
