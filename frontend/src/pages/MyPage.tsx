import styled from '@emotion/styled';
import { InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { loginNickNameState } from '@/atom/atom';
import { Back } from '@/components';

const MyPage = () => {
  const [value, setValue] = useState('');
  const nickName = useRecoilValue(loginNickNameState);
  return (
    <Wrapper>
      <Back />
      <SearchText>
        <SearchTextTop>
          <TextFontNormal>{nickName}</TextFontNormal>님 안녕하세요!
        </SearchTextTop>
        나눔 상황을 알려드릴게요
      </SearchText>
      <TextField
        placeholder="상품을 검색해 보세요"
        type="text"
        variant="outlined"
        fullWidth
        size="small"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5451 16.8215C8.10595 16.8215 5.30928 14.176 5.30928 10.9211C5.30928 7.66789 8.10595 5.02239 11.5451 5.02239C14.986 5.02239 17.7826 7.66789 17.7826 10.9211C17.7826 14.176 14.986 16.8215 11.5451 16.8215V16.8215ZM24.9083 21.7095L18.7704 15.905C19.8544 14.501 20.5158 12.7899 20.5158 10.9211C20.5158 6.24276 16.4925 2.43701 11.5451 2.43701C6.59939 2.43701 2.57617 6.24276 2.57617 10.9211C2.57617 15.5995 6.59939 19.4069 11.5451 19.4069C13.5327 19.4069 15.3536 18.7715 16.8413 17.7348L22.9774 23.5376L24.9083 21.7095Z"
                  fill="#CCCCCC"
                />
              </svg>
            </InputAdornment>
          ),
        }}
      />
      <div>상품 n개</div>
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

const SearchText = styled.div`
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
`;

const SearchTextTop = styled.div`
  padding-bottom: 10px;
`;

const TextFontNormal = styled.span`
  font-weight: normal;
`;
