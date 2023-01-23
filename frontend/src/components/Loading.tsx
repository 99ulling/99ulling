import styled from '@emotion/styled';

interface Prop {
  loading: boolean;
}

const Loading = ({ loading }: Prop) => {
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

export default Loading;

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
