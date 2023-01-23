import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { searchState } from '@/atom/atom';
import { DefaultButton } from '@/components';
import DataTable from '@/components/BorderData';
import Tag from '@/components/Tag';

const SharingRequest = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const farmerData = useRecoilValue(searchState);

  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrease = () => {
    if (count <= 0) return;
    setCount((prevCount) => prevCount - 1);
  };

  const Loading = () => {
    return (
      <LoadingWrapper loading={loading ? 'block' : 'none'} className="overlay">
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
      <Middle>
        <div>
          <div>
            <Tag color="#EB5757">NEW</Tag>
            <FarmerName>{farmerData.name}</FarmerName>
          </div>
          <DataTable
            title="잔여 개수"
            remainCount="remainCount"
            value={`${farmerData.remainCount}개`}
          />
          <DataTable
            title="나눔 위치"
            value={farmerData.address}
            bottom="bottom"
          />
        </div>
      </Middle>
      <FormWrapper>
        <Counter>
          <CounterButton onClick={onDecrease}>－</CounterButton>
          <div>{count}</div>
          <CounterButton onClick={onIncrease}>＋</CounterButton>
        </Counter>
        <DefaultButton
          backgroundColor="#F57D14"
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              navigate('/app-completed');
            }, 300);
          }}
        >
          신청하기
        </DefaultButton>
      </FormWrapper>
    </>
  );
};

export default SharingRequest;

const Middle = styled.div`
  width: 100%;

  & > div {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FarmerName = styled.div`
  font-weight: bold;
  font-size: 2rem;
  padding-top: 1rem;
  padding-bottom: 1.4rem;
`;

const LoadingWrapper = styled.div<{ loading: string }>`
  &.overlay {
    display: ${(props) => (props.loading === 'block' ? 'block' : 'none')};
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
  width: 100%;
  height: 320px;
  background-color: #777777;
`;

const Counter = styled.div`
  display: flex;
  gap: 2rem;
  border-radius: 0.5rem;
  border: 2px solid #ffaa01;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: #777778;
  font-weight: bold;
  font-size: 1.4rem;
`;

const CounterButton = styled.button`
  color: #777778;
  font-size: 2rem;
`;

const FormWrapper = styled.div`
  width: 85%;
  display: flex;
  gap: 0.5rem;
  padding: 2rem 0 4rem 0;
`;
