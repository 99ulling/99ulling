import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilValue } from "recoil";

import { searchState } from "@/atom/atom";
import { DefaultButton } from "@/components";
import DataTable from "@/components/BorderData";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import Tag from "@/components/Tag";
import { useFlow } from "@/useFlow";

const SharingRequest = () => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const farmerData = useRecoilValue(searchState);
  const { push } = useFlow();

  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrease = () => {
    if (count <= 1) return;
    setCount((prevCount) => prevCount - 1);
  };

  const handleButton = () => {
    setLoading(true);
    setTimeout(() => {
      push("UserConfirm", {
        count,
      });
    }, 300);
  };

  return (
    <Layout>
      <Loading loading={loading} />
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
        <DefaultButton backgroundColor="#F57D14" onClick={handleButton}>
          신청하기
        </DefaultButton>
      </FormWrapper>
    </Layout>
  );
};

export default SharingRequest;

const Middle = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

const FarmerName = styled.div`
  font-weight: bold;
  font-size: 2rem;
  padding-top: 1rem;
  padding-bottom: 1.4rem;
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
  width: 92%;
  display: flex;
  gap: 0.5rem;
  padding-top: 2rem;
  margin: 0 auto;
`;
