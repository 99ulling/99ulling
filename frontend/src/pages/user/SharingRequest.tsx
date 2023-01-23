import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { searchState } from '@/atom/atom';
import { DefaultButton } from '@/components';
import DataTable from '@/components/BorderData';
import Tag from '@/components/Tag';

const SharingRequest = () => {
  const [loading, setLoading] = useState(false);
  const farmerData = useRecoilValue(searchState);

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
    <>
      <Loading />
      <ImgWrapper>
        <img
          width="100%"
          height={320}
          src={farmerData.farmImage}
          alt={farmerData.farmImage}
        />
      </ImgWrapper>
      <Wrapper>
        <Tag color="#EB5757">NEW</Tag>
        <FarmerName>{farmerData.name}</FarmerName>
        <DataTable title="잔여 개수" value={`${farmerData.remainCount}개`} />
        <DataTable
          title="나눔 위치"
          value={farmerData.address}
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
    </>
  );
};

export default SharingRequest;

const FarmerName = styled.div`
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
