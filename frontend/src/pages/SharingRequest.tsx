import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { searchState } from '@/atom/atom';
import { Back, DefaultButton } from '@/components';
import DataTable from '@/components/BorderData';
import Tag from '@/components/Tag';

const SharingRequest = () => {
  const [loading, setLoading] = useState(false);
  const femarData = useRecoilValue(searchState);

  const Loading = () => {
    return (
      <LoadingWrapper loading={loading} className="overlay">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <img width={300} src="loading.gif" alt="loading.gif" />
        </div>
      </LoadingWrapper>
    );
  };
  const navigate = useNavigate();
  return (
    <div>
      <Loading />
      <Back />
      <ImgWrapper>
        <img
          width="100%"
          height={320}
          src={femarData.farmImage}
          alt={femarData.farmImage}
        />
      </ImgWrapper>
      <Wrapper>
        <Tag color="#EB5757">NEW</Tag>
        <FamerName>{femarData.name}</FamerName>
        <DataTable title="잔여 개수" value={`${femarData.remainCount}개`} />
        <DataTable
          title="나눔 위치"
          value={femarData.address}
          bottom="bottom"
        />
        <DefaultButton
          backgroundColor="#F57D14"
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              navigate('/app-completed');
            }, 300);
          }}
          padding="0.8rem 0"
        >
          신청하기
        </DefaultButton>
      </Wrapper>
    </div>
  );
};

export default SharingRequest;

const FamerName = styled.div`
  font-weight: bold;
  font-size: 2rem;
  padding-top: 1rem;
  padding-bottom: 1.4rem;
`;

const Wrapper = styled.div`
  padding: 2rem;
`;

const LoadingWrapper = styled.div<{ loading: boolean }>`
  &.overlay {
    display: ${(props) => (props.loading ? 'block' : 'none')};
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: white;
    overflow-x: hidden;
  }
`;

const ImgWrapper = styled.div`
  height: 320px;
  background-color: #777777;
`;
