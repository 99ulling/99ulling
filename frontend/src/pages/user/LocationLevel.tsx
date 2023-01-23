import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { search } from '@/api/api';
import { searchState } from '@/atom/atom';
import { DefaultButton } from '@/components';

interface Props {
  color: string;
}

const LocationLevel = () => {
  const [walk, setWalk] = useState(false);
  const [bike, setBike] = useState(false);
  const [car, setCar] = useState(false);
  const [loading, setLoading] = useState(false);
  const farmerData = useSetRecoilState(searchState);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (walk || bike || car) {
      setLoading(true);
      search({
        address: '제주도 서귀포시 농장로 342길 2',
        latitude: 126.616186,
        longitude: 33.273398,
        transportation: 'BIKE',
      })
        .then((data) => {
          farmerData(data.data.data);
          navigate('/sharing-request');
        })
        .catch(() => {
          alert('주변에 농장이 없어요. 다른 위치에서 다시 시도해 주세요.');
          setLoading(false);
        });
    }
  };

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

  return (
    <>
      <Loading />
      <SearchText>
        주변 귤 농가를 탐색합니다
        <ChoiceText>이동 수단에 맞는 농가를 추천해 드릴게요</ChoiceText>
      </SearchText>
      <button
        onClick={() => {
          setWalk(!walk);
        }}
      >
        <Walk color={walk ? '#F57D14' : '#EFEFF0'} />
      </button>
      <button
        onClick={() => {
          setBike(!bike);
        }}
      >
        <Bike color={bike ? '#F57D14' : '#EFEFF0'} />
      </button>
      <button
        onClick={() => {
          setCar(!car);
        }}
      >
        <Car color={car ? '#F57D14' : '#EFEFF0'} />
      </button>
      <DefaultButton
        backgroundColor="#F57D14"
        onClick={() => handleSubmit()}
        padding="0.8rem 0"
      >
        귤러가요
      </DefaultButton>
    </>
  );
};

export default LocationLevel;

const SearchText = styled.div`
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
`;

const ChoiceText = styled.div`
  font-size: 14px;
  font-weight: normal;
  padding-top: 1rem;
  padding-bottom: 2rem;
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

const Walk = ({ color }: Props) => {
  return (
    <svg
      width="350"
      height="100"
      viewBox="0 0 350 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="350" height="100" rx="10" fill={color} />
      <path
        d="M68.93 35.156H63.34V30.034H68.722V27.85H60.662V37.314H68.93V35.156ZM59.57 34.584C57.568 34.974 55.8 35.104 53.876 35.13V30.06H59.31V27.876H51.224V37.314H52.576C55.15 37.314 57.256 37.262 59.752 36.742L59.57 34.584ZM70.594 39.706H49.3V41.89H58.53V50.028H61.208V41.89H70.568L70.594 39.706ZM77.018 43.84H90.174V50.028H92.852V41.682H77.018V43.84ZM82.66 37.158H77.122V33.596H82.66V37.158ZM90.174 26.524V32.478H85.286V27.876H82.66V31.516H77.122V27.902H74.47V39.316H85.286V34.662H90.174V40.512H92.852V26.498L90.174 26.524ZM114.096 26.498V50.054H116.8V26.498H114.096ZM104.294 28.24C100.81 28.24 98.2619 31.464 98.2619 36.508C98.2619 41.604 100.81 44.802 104.294 44.802C107.804 44.802 110.352 41.604 110.352 36.508C110.352 31.464 107.804 28.24 104.294 28.24ZM104.294 30.658C106.348 30.658 107.778 32.868 107.778 36.508C107.778 40.2 106.348 42.41 104.294 42.41C102.266 42.41 100.836 40.2 100.836 36.508C100.836 32.868 102.266 30.658 104.294 30.658Z"
        fill={color === '#F57D14' ? 'white' : 'black'}
      />
      <path
        d="M50.119 61.759C50.119 60.732 50.886 60.069 51.926 60.069C52.979 60.069 53.746 60.732 53.746 61.759C53.746 62.786 52.979 63.449 51.926 63.449C50.886 63.449 50.119 62.786 50.119 61.759ZM55.059 61.759C55.059 60.095 53.72 58.938 51.926 58.938C50.145 58.938 48.806 60.095 48.806 61.759C48.806 63.423 50.145 64.58 51.926 64.58C53.72 64.58 55.059 63.423 55.059 61.759ZM50.106 66.816H56.489V70.014H57.828V65.737H50.106V66.816ZM59.453 61.044V59.939H57.828V58.262H56.489V65.217H57.828V63.566H59.453V62.461H57.828V61.044H59.453ZM63.7709 69H69.9459V67.726H67.5539C67.0859 67.726 66.4879 67.765 65.9939 67.817C68.0219 65.88 69.4909 63.969 69.4909 62.123C69.4909 60.394 68.3599 59.25 66.6049 59.25C65.3569 59.25 64.5119 59.796 63.6929 60.68L64.5379 61.512C65.0449 60.927 65.6689 60.446 66.4229 60.446C67.4889 60.446 68.0479 61.161 68.0479 62.201C68.0479 63.774 66.5919 65.633 63.7709 68.129V69ZM74.478 69.169C76.35 69.169 77.572 67.505 77.572 64.177C77.572 60.875 76.35 59.25 74.478 59.25C72.593 59.25 71.384 60.862 71.384 64.177C71.384 67.505 72.593 69.169 74.478 69.169ZM74.478 67.986C73.503 67.986 72.814 66.946 72.814 64.177C72.814 61.434 73.503 60.433 74.478 60.433C75.453 60.433 76.142 61.434 76.142 64.177C76.142 66.946 75.453 67.986 74.478 67.986ZM86.927 62.331H81.701V61.018H86.927V62.331ZM88.253 58.626H86.927V59.991H81.701V58.626H80.375V63.384H88.253V58.626ZM81.636 66.569H80.297V69.78H88.461V68.688H81.636V66.569ZM78.997 64.372V65.451H83.755V67.544H85.094V65.451H89.644V64.372H78.997ZM104.284 63.995C102.243 63.631 100.02 61.915 100.02 59.978V59.081H98.9022V59.978C98.9022 61.915 96.6922 63.631 94.6512 63.995L95.0932 64.879C96.8872 64.502 98.7072 63.293 99.4612 61.629C100.215 63.293 102.048 64.502 103.829 64.879L104.284 63.995ZM99.9942 67.57V64.736H98.9282V67.57H94.2222V68.441H104.804V67.57H99.9942ZM109.994 64.84C110.475 64.957 111.034 65.022 111.606 65.022C112.191 65.022 112.75 64.957 113.244 64.84V67.583H109.994V64.84ZM111.606 59.874C113.478 59.874 114.83 60.732 114.83 62.032C114.83 63.332 113.478 64.19 111.606 64.19C109.734 64.19 108.395 63.332 108.395 62.032C108.395 60.732 109.734 59.874 111.606 59.874ZM114.31 67.583V64.424C115.272 63.917 115.844 63.085 115.844 62.032C115.844 60.212 114.089 59.042 111.606 59.042C109.136 59.042 107.368 60.212 107.368 62.032C107.368 63.085 107.953 63.93 108.928 64.437V67.583H106.328V68.467H116.923V67.583H114.31Z"
        fill={color === '#F57D14' ? 'white' : '#727272'}
      />
      <mask
        id="mask0_391_1426"
        maskUnits="userSpaceOnUse"
        x="240"
        y="15"
        width="50"
        height="71"
      >
        <rect x="240" y="15" width="50" height="71" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_391_1426)">
        <path
          d="M261.159 51.4394C255.519 52.4663 249.408 51.8672 243.924 50.1895C245.961 42.52 245.491 34.491 244.551 26.7017C244.524 25.6998 244.419 24.6992 244.237 23.7058V22.5074C243.611 18.5528 243.297 14.7181 243.454 10.7635C243.454 8.966 243.454 7.2883 243.611 5.49076C243.767 4.17257 243.924 2.85438 244.237 1.53618C244.864 -0.740695 245.334 -3.01757 246.588 -5.17462C257.399 -5.89363 268.21 -5.65396 279.022 -6.1333C283.409 6.20977 282.625 19.0322 281.528 31.7348C281.372 32.334 281.372 32.8133 281.215 33.4125C281.215 34.3712 281.058 35.4497 281.058 36.4084C280.588 41.801 279.178 47.3134 280.388 52.6509C279.404 52.5478 280.327 52.2423 280.388 52.6509C279.962 52.5862 279.335 52.4663 278.865 52.4663C274.321 52.9457 269.777 52.3465 265.233 52.5862C264.763 52.5862 264.136 52.706 263.666 52.706C262.57 52.5862 261.003 52.4663 261.159 51.4034V51.4394Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M249.644 67.0282C252.988 67.7508 256.809 66.9842 259.256 65.0981L259.59 65.2252C259.467 65.9436 259.405 66.6815 259.343 67.4258C259.162 69.6004 258.977 71.8305 257.226 73.7946C255.346 75.8318 252.212 76.431 249.078 76.7905C248.276 76.7183 247.389 76.7548 246.485 76.792C244.386 76.8783 242.197 76.9683 240.774 75.712C240.076 73.1311 242.834 71.6077 245.455 70.1601C246.364 69.6585 247.256 69.166 247.981 68.6417C248.092 68.5568 248.184 68.4719 248.269 68.3923C248.425 68.2472 248.562 68.1199 248.765 68.0425C249.054 67.711 249.343 67.3795 249.644 67.0282ZM249.644 67.0282C249.669 66.9986 249.695 66.9688 249.721 66.9388L249.586 67.0155C249.605 67.0198 249.625 67.0241 249.644 67.0282ZM270.424 70.3803C268.693 70.7518 266.761 70.765 265.174 70.1202L264.6 70.4654C264.597 70.6818 264.606 70.8999 264.614 71.117C264.638 71.7174 264.661 72.3101 264.431 72.8381C263.491 74.6356 262.394 76.4332 261.298 78.2307C260.984 78.9294 260.984 79.6891 261.298 80.3878C263.491 81.9456 266.938 81.8258 269.602 80.9869C271.952 80.1481 273.832 78.5902 275.086 76.7927C276.452 74.7028 276.389 72.3396 276.327 70.0463C276.318 69.7096 276.309 69.3744 276.305 69.0417L275.282 68.6211C273.729 69.3125 272.156 70.0088 270.424 70.3803Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M250.57 62.9739C250.722 59.2614 250.872 55.61 250.405 51.8896L250.41 51.5768C253.758 51.9962 257.174 51.9818 260.516 51.5312V51.5468L260.514 51.6032C260.358 55.7418 260.201 59.9177 259.733 64.2123C259.72 64.44 259.705 64.6652 259.687 64.8881L259.257 65.1002C256.793 66.9948 252.944 67.7594 249.586 67.0176H249.578C250.089 66.4292 250.402 65.7522 250.488 65.0487C250.513 64.3544 250.541 63.6631 250.57 62.9739ZM264.439 61.1525C264.561 64.0677 264.681 66.9104 264.646 69.7992L265.172 70.1239C266.76 70.7686 268.699 70.7543 270.423 70.384C272.146 70.0137 273.726 69.3162 275.28 68.6248L276.283 68.0867C276.27 67.7363 276.256 67.4161 276.242 67.1078C276.21 66.3936 276.181 65.7438 276.181 64.9326C276.126 63.5499 276.11 62.1672 276.093 60.7845C276.063 58.2126 276.032 55.6408 275.755 53.0689V52.6735C271.799 52.7106 267.844 52.6771 263.891 52.5752V52.7561C263.933 54.3921 264.064 56.0456 264.196 57.7061C264.283 58.7943 264.369 59.8856 264.431 60.9769L264.439 61.1525Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M262.457 53.2507C262.661 53.2568 262.864 53.2628 263.067 53.2685C263.127 54.3089 263.186 55.3492 263.247 56.3886C263.247 56.3886 263.595 63.1147 263.646 70.8609C263.646 70.9583 263.65 71.0563 263.654 71.1557L263.654 71.1559L263.657 71.236C263.693 72.0605 263.726 72.8382 262.415 74.2151C262.33 74.305 262.221 74.414 262.094 74.5387C261.396 75.2301 260.231 76.3865 259.718 77.6748C259.391 78.5052 259.496 79.3884 260.013 80.1614C260.53 80.9331 261.407 81.5143 262.476 81.7959C263.515 82.0727 264.619 82.2106 265.746 82.2106C267.137 82.2106 268.563 81.9996 269.944 81.585C269.948 81.5826 269.955 81.5814 269.961 81.579C270.657 81.3549 271.321 81.0709 271.935 80.7366C276.313 78.4537 277.173 74.722 277.123 71.9934C277.063 68.9004 276.977 65.7715 276.893 62.7457L276.671 53.3798C277.768 53.367 278.862 53.3488 279.953 53.325L280.218 53.3586C280.515 53.3957 280.818 53.3226 281.032 53.1609C281.247 52.9991 281.347 52.7678 281.302 52.5401C280.578 48.9334 280.999 45.2153 281.407 41.6206L281.407 41.6195C283.204 25.7628 285.062 9.3657 279.991 -6.27645C279.865 -6.66232 279.356 -6.8972 278.851 -6.80133C278.347 -6.70546 278.04 -6.316 278.165 -5.93013C283.161 9.47945 281.318 25.7529 279.535 41.4921V41.4921L279.535 41.496L279.532 41.5171C279.149 44.9114 278.754 48.413 279.293 51.9002C273.725 52.0092 268.089 51.9805 262.528 51.8139L262.495 51.8127C262.38 51.8087 262.144 51.8005 262.074 51.7767C262.062 51.7583 262.052 51.7305 262.044 51.6934C262.104 51.5722 262.122 51.4371 262.087 51.3004C262.07 51.234 262.042 51.1715 262.004 51.1139C261.682 41.3673 261.761 31.4841 262.244 21.7339L262.245 21.7307C262.445 17.682 262.695 12.6434 258.963 8.97624C258.645 8.66227 258.053 8.60714 257.644 8.85041C257.235 9.09487 257.16 9.54546 257.48 9.85943C260.79 13.1142 260.555 17.8633 260.366 21.68C259.888 31.3616 259.803 41.1736 260.115 50.8523C255.003 51.4979 249.789 51.1076 244.938 49.715C247.241 41.4092 246.273 32.7799 245.336 24.4297L245.336 24.4297L245.315 24.2456L245.315 24.2445L245.315 24.2441C245.242 23.592 245.169 22.9408 245.098 22.2906C244.101 13.1927 243.465 3.58546 247.478 -5.05949C247.652 -5.43337 247.395 -5.84441 246.906 -5.97743C246.417 -6.11044 245.88 -5.91391 245.706 -5.54003C241.569 3.37455 242.212 13.1567 243.224 22.4116C243.302 23.1242 243.382 23.8379 243.462 24.5517L243.462 24.5531C244.41 32.9979 245.389 41.7292 242.931 50.0026C242.827 50.3465 243.067 50.6953 243.493 50.8283C245.427 51.429 247.42 51.8776 249.444 52.1724C249.459 52.4672 249.489 53.061 249.551 54.2562C249.563 54.503 249.576 54.7399 249.588 54.9677C249.837 59.7854 249.877 60.5485 249.551 65.7285C249.472 66.9844 247.827 68.3361 246.81 68.8934C246.322 69.1603 245.677 69.4152 244.994 69.6856L244.991 69.6867C242.815 70.5471 239.836 71.7251 240.007 74.4274C240.129 76.3424 241.679 77.2663 243.091 77.4928C243.874 77.6174 244.643 77.6701 245.422 77.6701C246.878 77.6701 248.365 77.488 250.032 77.2591C252.498 76.9176 256.879 75.9589 258.507 73.3668C259.251 72.1841 259.737 70.8071 259.991 69.157C260.782 64.0346 261.07 58.7695 261.349 53.677L261.349 53.6754L261.363 53.104C261.776 53.2317 262.195 53.2434 262.457 53.2507ZM259.501 52.3774C258.102 52.5224 256.697 52.5947 255.296 52.5947C253.972 52.5947 252.65 52.5304 251.338 52.4024C251.355 52.7453 251.384 53.3003 251.431 54.1987C251.443 54.43 251.454 54.6527 251.466 54.8675C251.72 59.758 251.761 60.5404 251.431 65.798C251.417 66.02 251.374 66.2393 251.308 66.4545C254.056 66.8824 256.544 66.1684 258.591 64.5928C258.623 64.5677 258.658 64.5449 258.694 64.5243C259.073 60.8823 259.274 57.2053 259.47 53.6143L259.501 52.3774ZM258.464 66.5409C256.644 67.5038 254.449 68.0213 252.242 68.0213C251.45 68.0213 251.168 67.9549 250.587 67.8184L250.587 67.8183L250.586 67.8183C250.582 67.8172 250.578 67.8162 250.574 67.8152C249.786 68.8424 248.636 69.6632 247.905 70.063C247.319 70.3838 246.629 70.6573 245.899 70.9469L245.856 70.9641C243.391 71.9384 241.782 72.7017 241.887 74.3579C241.909 74.7066 242.089 75.863 243.478 76.0859C245.399 76.3927 247.268 76.1782 249.698 75.8426C254.806 75.1356 256.376 73.4387 256.813 72.7425C257.466 71.7047 257.894 70.4764 258.124 68.988C258.25 68.1762 258.362 67.36 258.464 66.5409ZM265.126 56.3262C265.126 56.3262 265.025 54.5819 264.952 53.3164C267.516 53.3742 270.09 53.4029 272.662 53.4029C273.372 53.4029 274.082 53.4008 274.791 53.3965L275.014 62.7756L275.029 63.3326L275.029 63.3331C275.071 64.8413 275.113 66.3727 275.151 67.9099C275.034 67.9226 274.919 67.9525 274.81 68.0008C273.334 68.6587 271.806 69.3382 270.172 69.6893C268.46 70.0572 266.841 69.9853 265.616 69.4868C265.582 69.4731 265.548 69.4612 265.514 69.451C265.434 62.2851 265.126 56.3262 265.126 56.3262ZM270.678 71.0734C272.314 70.7225 273.828 70.0952 275.19 69.4944C275.209 70.3348 275.227 71.1751 275.243 72.0125C275.305 75.471 273.834 78.0079 270.868 79.5514L270.851 79.561C270.351 79.8354 269.809 80.0667 269.24 80.2501C267.2 80.8672 264.961 80.9367 263.093 80.4382C262.481 80.2776 261.982 79.9469 261.688 79.5071C261.393 79.0661 261.332 78.564 261.519 78.0918C261.931 77.0576 262.965 76.0306 263.584 75.4171C263.723 75.2793 263.844 75.1594 263.936 75.0612C265.626 73.2878 265.577 72.1258 265.538 71.1926L265.538 71.1905L265.537 71.1852C265.535 71.1324 265.533 71.0798 265.531 71.0275C266.317 71.2471 267.179 71.3574 268.085 71.3574C268.92 71.3574 269.795 71.2627 270.678 71.0734Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

const Bike = ({ color }: Props) => {
  return (
    <svg
      width="350"
      height="100"
      viewBox="0 0 350 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="350" height="100" rx="10" fill={color} />
      <path
        d="M273.297 30.8457L292.586 60.5488H269.267L246.523 33.4925"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.147 44.6045C249.022 44.6045 256.217 51.9817 256.217 61.082C256.217 70.1823 249.022 77.5596 240.147 77.5596C231.273 77.5596 224.078 70.1823 224.078 61.082C224.078 51.9817 231.273 44.6045 240.147 44.6045ZM240.144 47.9968C247.191 47.9968 252.905 53.8552 252.905 61.0819C252.905 68.3086 247.191 74.167 240.144 74.167C233.096 74.167 227.383 68.3086 227.383 61.0819C227.383 53.8552 233.096 47.9968 240.144 47.9968Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M292.366 44.604C301.241 44.604 308.436 51.9813 308.436 61.0815C308.436 70.1818 301.241 77.5591 292.366 77.5591C283.491 77.5591 276.297 70.1818 276.297 61.0815C276.297 51.9813 283.491 44.604 292.366 44.604ZM292.362 47.9963C299.41 47.9963 305.123 53.8547 305.123 61.0814C305.123 68.3081 299.41 74.1665 292.362 74.1665C285.315 74.1665 279.602 68.3081 279.602 61.0814C279.602 53.8547 285.315 47.9963 292.362 47.9963Z"
        fill="black"
      />
      <path
        d="M277.27 62.398C276.748 60.1453 276.12 57.9585 275.477 55.7124C274.854 53.64 274.118 51.5962 273.565 49.5447L273.531 49.4067C276.36 48.7639 279.176 48.0688 281.981 47.3194L282.055 47.6209C283.093 50.5576 283.716 53.6005 284.563 56.5863C284.779 57.4714 284.976 58.0936 285.222 58.9719L284.609 59.5648C283.633 60.3751 282.64 61.1946 281.484 61.7909C280.328 62.3873 278.952 62.7518 277.705 62.5496L277.27 62.398Z"
        fill="white"
      />
      <path
        d="M277.701 62.5467C278.948 62.7489 280.319 62.3868 281.48 61.7881C282.642 61.1894 283.63 60.372 284.605 59.5619L285.41 59.6961C285.918 61.6701 286.653 63.7139 285.985 65.8264C285.428 67.425 284.382 68.9551 282.868 70.0229C281.131 71.1477 278.703 71.8673 276.855 71.0796C276.502 70.6041 276.361 70.025 276.454 69.4354C276.899 67.8653 277.344 66.2953 277.678 64.7538C277.767 64.1486 277.5 63.5378 277.357 62.9143L277.701 62.5467Z"
        fill="black"
      />
      <path
        d="M280.004 62.9593C279.134 63.1823 278.283 63.2376 277.51 63.1115C277.149 63.0536 276.945 62.7528 277.053 62.4415C277.161 62.1305 277.541 61.9243 277.901 61.9834C278.865 62.1401 280.028 61.8999 281.177 61.3074C282.273 60.7419 283.232 59.9456 284.159 59.1751C284.441 58.9406 284.872 58.9244 285.12 59.1392C285.37 59.3527 285.344 59.7166 285.062 59.9502C284.117 60.7349 283.046 61.625 281.794 62.2702C281.201 62.5756 280.597 62.8071 280.004 62.9593Z"
        fill="black"
      />
      <path
        d="M280.359 71.659C279.558 71.8643 278.748 71.9606 277.958 71.9389C277.146 71.919 276.414 71.6359 275.903 71.1418C275.392 70.6469 275.154 69.9928 275.232 69.3001C275.356 68.2248 275.97 67.1309 276.337 66.4768C276.404 66.3586 276.462 66.2555 276.505 66.1716C277.181 64.883 277.013 64.2962 276.834 63.6743C276.807 63.5784 276.78 63.4845 276.757 63.3904C275.28 57.4954 273.782 52.4317 273.782 52.4317C273.508 51.5239 273.234 50.6148 272.96 49.7057C272.871 49.4073 273.094 49.0783 273.46 48.9708C273.826 48.8634 274.194 49.0174 274.284 49.3167C274.557 50.2249 275.106 52.0419 275.106 52.0419C275.106 52.0419 276.61 57.1262 278.092 63.0423C278.113 63.126 278.137 63.211 278.162 63.297C278.363 64.0014 278.615 64.8783 277.744 66.5392C277.696 66.631 277.633 66.7443 277.559 66.8748C277.233 67.4552 276.689 68.4265 276.589 69.2899C276.544 69.6838 276.681 70.0554 276.972 70.3379C277.263 70.6194 277.679 70.7807 278.144 70.7915C279.564 70.8311 281.142 70.37 282.477 69.5278C282.848 69.2844 283.19 69.0093 283.494 68.709C283.498 68.7052 283.501 68.7025 283.505 68.6986C285.325 66.9815 285.899 64.7796 285.212 62.1549C284.597 59.8124 283.953 57.4452 283.332 55.1557L281.337 47.6978C281.267 47.3964 281.506 47.0778 281.873 46.9838C281.875 46.9833 281.877 46.9827 281.879 46.9821C282.249 46.8904 282.606 47.0617 282.676 47.3661L284.662 54.7905C285.284 57.0816 285.927 59.4508 286.545 61.7976C287.087 63.8684 287.17 66.8696 284.483 69.4075C284.109 69.7743 283.689 70.1119 283.237 70.4095C283.233 70.4124 283.228 70.4145 283.226 70.4172C282.322 70.9848 281.348 71.4054 280.359 71.659Z"
        fill="black"
      />
      <path
        d="M266.123 52.5064C264.943 54.1533 262.726 55.2903 260.555 55.3599L260.625 55.2875C260.489 55.5933 260.359 55.88 260.229 56.1668C260.058 56.297 260.003 56.4795 259.853 56.688C258.479 58.4859 255.496 60.3855 256.656 62.5005C258.2 63.3378 260.234 62.1149 261.897 61.8306C263.745 61.0769 265.553 60.1667 266.354 58.5245C267.341 56.4129 266.528 54.455 266.347 52.5341L266.123 52.5064Z"
        fill="black"
      />
      <path
        d="M258.502 45.3418C259.584 48.1323 260.121 51.0029 260.775 53.9258C260.841 54.3996 260.764 54.8939 260.552 55.3629L260.557 55.3616C262.728 55.2904 264.944 54.1536 266.124 52.508L266.351 52.2981C266.324 52.1496 266.295 51.9999 266.265 51.849C265.822 48.9525 265.21 46.1862 264.603 43.4442L264.601 43.434C262.641 44.2816 260.563 44.8564 258.452 45.1367"
        fill="white"
      />
      <path
        d="M262.643 55.7673C262.071 55.9228 261.938 55.8906 261.348 55.9096C261.04 55.9196 260.807 55.7157 260.83 55.4544C260.852 55.1932 261.121 54.9726 261.429 54.9626C263.296 54.9013 264.776 54.0331 265.792 52.6162C265.96 52.3819 266.307 52.2868 266.567 52.4038C266.827 52.5209 266.902 52.8055 266.733 53.0398C265.804 54.3355 264.298 55.3176 262.643 55.7673Z"
        fill="black"
      />
      <path
        d="M259.813 63.0112C259.338 63.1401 258.861 63.233 258.363 63.2812C257.464 63.3669 256.364 63.0198 255.967 61.7888C255.406 60.0515 257.022 58.7888 258.202 57.8664C258.574 57.5761 258.924 57.3025 259.176 57.047C259.702 56.5146 260.476 55.359 260.311 54.5255C259.603 50.9245 259.469 50.5551 258.374 47.0299C257.911 45.5378 257.9 45.499 257.9 45.499C257.825 45.2419 258.021 44.9584 258.335 44.8663C258.649 44.7742 258.965 44.908 259.04 45.1659C259.04 45.1659 259.047 45.1931 259.51 46.6811C260.612 50.2269 260.752 50.6167 261.468 54.2597C261.718 55.5293 260.644 57.0193 260.041 57.6298C259.732 57.9427 259.349 58.241 258.945 58.5579C257.608 59.6024 256.757 60.3675 257.1 61.4322C257.172 61.6564 257.478 62.3821 258.361 62.298C259.583 62.1804 260.685 61.7309 262.109 61.1094C265.101 59.8019 265.771 58.4333 265.92 57.9061C266.142 57.1199 266.196 56.2465 266.085 55.236C265.705 51.7946 264.995 48.3248 264.308 44.9685L264.04 43.8183C263.996 43.5529 264.22 43.2832 264.54 43.2172C264.861 43.1501 265.156 43.3105 265.2 43.5759L265.463 44.6975C266.153 48.0713 266.867 51.5593 267.25 55.0375C267.374 56.1576 267.31 57.1376 267.057 58.0336C266.503 59.9966 263.996 61.3482 262.551 61.9796C261.575 62.4051 260.699 62.7702 259.813 63.0112Z"
        fill="black"
      />
      <path
        d="M254.469 40.3032C252.633 32.5352 259.243 25.1386 264.695 22H287.151C290.02 24.9424 288.299 31.4157 283.133 37.3006C279.001 42.0084 282.559 49.4626 284.855 52.6012L272.803 56.1321L269.934 44.6566C269.303 39.9488 270.196 36.2217 270.721 34.9466C268.33 35.9274 267.192 35.9586 265.884 37.3006C264.449 38.7718 264.929 43.8608 266.842 46.8032C264.547 48.6864 260.304 49.4247 257.626 49.7189L254.469 40.3032Z"
        fill="white"
      />
      <path
        d="M265.056 22.2949C259.604 25.4335 252.668 32.0745 254.504 39.8424L257.661 49.2582C260.339 48.9639 264.548 48.1989 266.843 46.3158C264.93 43.3734 263.622 39.2673 265.056 37.7961C266.365 36.4542 267.83 36.2224 270.222 35.2416"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M272.522 31.4164C271.183 33.6723 268.907 39.9494 270.514 47.0112C272.121 54.073 272.905 56.427 273.096 56.7212L284.861 52.8961C283.14 49.9537 279.639 43.8923 282.853 38.4782C286.87 31.7107 289.739 26.1201 287.444 22.2949"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M240.395 59.7873L246.393 33.3631M248.348 24.7529H239.821C238.099 24.7529 236.703 26.1487 236.703 27.8704V27.8704C236.703 29.5921 238.099 30.9879 239.821 30.9879H246.932L246.393 33.3631M246.393 33.3631H271.439"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M51.732 33.49H57.79V31.306H49.106V46.412H50.666C53.968 46.412 56.386 46.308 59.22 45.762L58.986 43.552C56.568 44.046 54.436 44.176 51.732 44.202V33.49ZM65.798 28.498V37.78H63.016V28.992H60.494V50.832H63.016V39.964H65.798V51.976H68.346V28.498H65.798ZM74.406 38.17C78.514 37.728 81.738 36.038 83.012 33.62C84.26 36.038 87.484 37.728 91.618 38.17L92.554 36.064C88.212 35.622 85.196 33.802 84.832 31.696H91.696V29.538H74.354V31.696H81.166C80.802 33.802 77.786 35.622 73.444 36.064L74.406 38.17ZM88.342 47.842C88.342 49.194 86.392 49.948 82.96 49.948C79.528 49.948 77.604 49.194 77.604 47.842C77.604 46.438 79.528 45.71 82.96 45.71C86.392 45.71 88.342 46.438 88.342 47.842ZM93.62 41.498V39.366H72.378V41.498H81.66V43.656C77.396 43.916 74.874 45.398 74.874 47.842C74.874 50.494 77.916 52.002 82.96 52.002C88.03 52.002 91.046 50.494 91.046 47.842C91.046 45.398 88.576 43.942 84.338 43.682V41.498H93.62ZM112.81 33.178C112.81 36.038 112.81 39.21 111.978 43.5L114.656 43.812C115.488 39.262 115.488 36.116 115.488 33.178V30.708H98.5879V32.892H112.81V33.178ZM109.82 46.724V39.132H107.168V46.724H104.022V39.132H101.37V46.724H96.4819V48.934H117.698V46.724H109.82ZM131.116 50C127.58 50 125.734 49.428 125.734 48.18C125.734 46.984 127.58 46.386 131.116 46.386C134.678 46.386 136.524 46.984 136.524 48.18C136.524 49.428 134.678 50 131.116 50ZM131.116 44.41C126.02 44.41 123.03 45.71 123.03 48.18C123.03 50.676 126.02 52.002 131.116 52.002C136.238 52.002 139.202 50.676 139.202 48.18C139.202 45.71 136.238 44.41 131.116 44.41ZM132.494 40.796V38.872H139.384V36.818H125.916V34.998H138.656V32.996H125.916V31.228H139.228V29.174H123.238V38.872H129.79V40.796H120.508V42.954H141.75V40.796H132.494Z"
        fill={color === '#F57D14' ? 'white' : 'black'}
      />
      <path
        d="M52.95 68.759C52.95 67.654 53.782 66.9 54.952 66.9C56.109 66.9 56.954 67.654 56.954 68.759C56.954 69.851 56.109 70.618 54.952 70.618C53.782 70.618 52.95 69.851 52.95 68.759ZM57.994 68.759C57.994 67.121 56.707 66.003 54.952 66.003C53.184 66.003 51.91 67.121 51.91 68.759C51.91 70.384 53.184 71.515 54.952 71.515C56.707 71.515 57.994 70.384 57.994 68.759ZM53.158 73.647H59.671V76.962H60.737V72.776H53.158V73.647ZM62.44 67.966V67.082H60.737V65.314H59.671V72.23H60.737V70.449H62.44V69.578H60.737V67.966H62.44ZM67.3169 76H72.7769V74.765H70.9049V66.432H69.7739C69.2279 66.77 68.5909 66.991 67.6939 67.16V68.109H69.4099V74.765H67.3169V76ZM77.257 76.169C78.934 76.169 80.481 74.973 80.481 72.854C80.481 70.761 79.168 69.812 77.569 69.812C77.049 69.812 76.659 69.942 76.256 70.15L76.477 67.693H80.026V66.432H75.177L74.891 70.969L75.619 71.45C76.178 71.086 76.542 70.904 77.153 70.904C78.245 70.904 78.973 71.632 78.973 72.906C78.973 74.18 78.154 74.947 77.075 74.947C76.074 74.947 75.385 74.466 74.839 73.92L74.124 74.895C74.8 75.558 75.749 76.169 77.257 76.169ZM89.927 69.331H84.701V68.018H89.927V69.331ZM91.253 65.626H89.927V66.991H84.701V65.626H83.375V70.384H91.253V65.626ZM84.636 73.569H83.297V76.78H91.461V75.688H84.636V73.569ZM81.997 71.372V72.451H86.755V74.544H88.094V72.451H92.644V71.372H81.997ZM107.284 70.995C105.243 70.631 103.02 68.915 103.02 66.978V66.081H101.902V66.978C101.902 68.915 99.6922 70.631 97.6512 70.995L98.0932 71.879C99.8872 71.502 101.707 70.293 102.461 68.629C103.215 70.293 105.048 71.502 106.829 71.879L107.284 70.995ZM102.994 74.57V71.736H101.928V74.57H97.2222V75.441H107.804V74.57H102.994ZM112.994 71.84C113.475 71.957 114.034 72.022 114.606 72.022C115.191 72.022 115.75 71.957 116.244 71.84V74.583H112.994V71.84ZM114.606 66.874C116.478 66.874 117.83 67.732 117.83 69.032C117.83 70.332 116.478 71.19 114.606 71.19C112.734 71.19 111.395 70.332 111.395 69.032C111.395 67.732 112.734 66.874 114.606 66.874ZM117.31 74.583V71.424C118.272 70.917 118.844 70.085 118.844 69.032C118.844 67.212 117.089 66.042 114.606 66.042C112.136 66.042 110.368 67.212 110.368 69.032C110.368 70.085 110.953 70.93 111.928 71.437V74.583H109.328V75.467H119.923V74.583H117.31Z"
        fill={color === '#F57D14' ? 'white' : '#727272'}
      />
    </svg>
  );
};

const Car = ({ color }: Props) => {
  return (
    <svg
      width="350"
      height="100"
      viewBox="0 0 350 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="350" height="100" rx="10" fill={color} />
      <g>
        <path
          d="M299.425 33.9471C296.535 25.4579 285.878 23.7871 280.911 24.0129H270.371C261.406 24.0129 252.704 27.0446 245.68 32.6155L230.337 44.7845C221.857 44.7845 214.984 51.6582 214.984 60.1374C214.984 61.0103 214.172 61.6857 213.565 62.3127C212.941 62.9572 212.769 64.0063 213.367 64.848L215.066 67.2428C215.723 68.1676 216.786 68.717 217.92 68.717H300.237C302.356 68.717 304.281 67.4821 305.163 65.556L306.731 62.1355C307.643 60.1456 306.189 57.8796 304 57.8796C303.84 57.8796 303.709 57.7585 303.7 57.5988C303.44 52.9899 302.256 42.2626 299.425 33.9471Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M280.886 23.0192H270.369C261.179 23.0192 252.26 26.1267 245.06 31.8368L229.983 43.7945C221.118 43.9811 213.988 51.2265 213.988 60.1371V60.8895C212.212 61.5087 211.361 63.7412 212.554 65.4226L214.254 67.8174C215.096 69.0046 216.462 69.7101 217.918 69.7101H300.235C302.742 69.7101 305.019 68.2488 306.064 65.9696L307.632 62.5491C308.752 60.1049 307.19 57.3479 304.652 56.938C304.326 52.0084 303.117 41.7185 300.363 33.6267C298.792 29.0138 295.121 26.304 291.312 24.7885C287.522 23.2807 283.483 22.9044 280.886 23.0192ZM290.577 26.6345C294.061 28.0204 297.162 30.3906 298.482 34.2669C301.271 42.4588 302.448 53.0833 302.705 57.6543C302.745 58.3548 303.326 58.8727 303.998 58.8727C305.463 58.8727 306.436 60.3894 305.826 61.7213L304.258 65.1418C303.537 66.7148 301.965 67.7233 300.235 67.7233H217.918C217.106 67.7233 216.344 67.3298 215.874 66.6676L214.174 64.2728C213.71 63.6177 214.178 62.7109 214.981 62.7109C215.53 62.7109 215.975 62.2662 215.975 61.7176V60.1371C215.975 52.2065 222.404 45.7775 230.334 45.7775C230.558 45.7775 230.776 45.7017 230.951 45.5625L246.295 33.3934C253.144 27.9619 261.628 25.0059 270.369 25.0059H280.909C280.924 25.0059 280.939 25.0056 280.954 25.0049C283.325 24.8971 287.086 25.2455 290.577 26.6345Z"
          fill="black"
        />
        <path
          d="M275.488 66.2342C275.488 71.4713 279.733 75.7169 284.97 75.7169C290.208 75.7169 294.453 71.4713 294.453 66.2342C294.453 60.997 290.208 56.7515 284.97 56.7515C279.733 56.7515 275.488 60.997 275.488 66.2342Z"
          fill="white"
        />
        <path
          d="M226.199 66.2342C226.199 71.4713 230.444 75.7169 235.681 75.7169C240.919 75.7169 245.164 71.4713 245.164 66.2342C245.164 60.997 240.919 56.7515 235.681 56.7515C230.444 56.7515 226.199 60.997 226.199 66.2342Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M280.811 23.0195C280.263 23.0195 279.818 23.4643 279.818 24.0129V50.6091C274.278 51.1083 269.93 55.7425 269.884 61.4019H252.479C251.931 61.4019 251.486 61.8466 251.486 62.3953C251.486 62.9439 251.931 63.3886 252.479 63.3886H270.877C271.426 63.3886 271.87 62.9439 271.87 62.3953V61.4922C271.87 56.5542 275.873 52.5513 280.811 52.5513C281.36 52.5513 281.805 52.1065 281.805 51.5579V24.0129C281.805 23.4643 281.36 23.0195 280.811 23.0195Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M285.171 55.396C279.294 55.396 274.53 60.2397 274.53 66.2147C274.53 72.1898 279.294 77.0335 285.171 77.0335C291.048 77.0335 295.812 72.1898 295.812 66.2147C295.812 60.2397 291.048 55.396 285.171 55.396ZM285.36 57.8129C280.691 57.8129 276.905 61.5982 276.905 66.2677C276.905 70.9372 280.691 74.7226 285.36 74.7226C290.03 74.7226 293.815 70.9372 293.815 66.2677C293.815 61.5982 290.03 57.8129 285.36 57.8129Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M236.374 55.396C230.497 55.396 225.733 60.2397 225.733 66.2147C225.733 72.1898 230.497 77.0335 236.374 77.0335C242.251 77.0335 247.016 72.1898 247.016 66.2147C247.016 60.2397 242.251 55.396 236.374 55.396ZM236.509 57.8129C231.839 57.8129 228.054 61.5982 228.054 66.2677C228.054 70.9372 231.839 74.7226 236.509 74.7226C241.178 74.7226 244.964 70.9372 244.964 66.2677C244.964 61.5982 241.178 57.8129 236.509 57.8129Z"
          fill="black"
        />
        <path
          d="M299.648 52.6761V49.8358C299.648 48.9163 300.393 48.1709 301.313 48.1709C302.164 48.1709 302.877 48.8124 302.968 49.6584L303.271 52.4826C303.386 53.5563 302.544 54.4927 301.464 54.4927C300.461 54.4927 299.648 53.6794 299.648 52.6761Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M303.955 49.5523C303.81 48.2015 302.67 47.1772 301.311 47.1772C299.843 47.1772 298.653 48.3674 298.653 49.8355V52.6758C298.653 54.2277 299.911 55.4858 301.463 55.4858C303.134 55.4858 304.435 54.0373 304.257 52.3765L303.955 49.5523ZM301.311 49.164C301.655 49.164 301.943 49.4227 301.979 49.7639L302.282 52.5881C302.334 53.0747 301.953 53.499 301.463 53.499C301.008 53.499 300.64 53.1305 300.64 52.6758V49.8355C300.64 49.4646 300.941 49.164 301.311 49.164Z"
          fill="black"
        />
        <path
          d="M219.246 55.1674L221.524 51.4973C222.118 50.5389 221.429 49.2998 220.301 49.2998C219.804 49.2998 219.341 49.557 219.079 49.9798L216.801 53.6499C216.206 54.6083 216.895 55.8474 218.023 55.8474C218.521 55.8474 218.983 55.5902 219.246 55.1674Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M222.365 52.0213C223.37 50.4012 222.205 48.3066 220.298 48.3066C219.457 48.3066 218.676 48.7414 218.232 49.4561L215.954 53.1263C214.948 54.7464 216.114 56.8409 218.02 56.8409C218.862 56.8409 219.643 56.4062 220.087 55.6914L222.365 52.0213ZM220.298 50.2934C220.648 50.2934 220.861 50.6769 220.677 50.9736L218.399 54.6437C218.318 54.7746 218.174 54.8542 218.02 54.8542C217.671 54.8542 217.458 54.4707 217.642 54.174L219.92 50.5039C220.001 50.373 220.144 50.2934 220.298 50.2934Z"
          fill="black"
        />
        <path
          d="M262.22 30.1021H269.557C272.3 30.1021 274.523 32.3258 274.523 35.0689V41.1709C274.523 43.914 272.3 46.1377 269.557 46.1377H248.093C245.341 46.1377 244.059 42.7269 246.13 40.9149L255.679 32.5599C257.49 30.9754 259.814 30.1021 262.22 30.1021Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M262.22 32.0888H269.557C271.202 32.0888 272.537 33.423 272.537 35.0689V41.1709C272.537 42.8168 271.202 44.151 269.557 44.151H248.093C247.175 44.151 246.748 43.0141 247.438 42.4101L256.987 34.055C258.436 32.7875 260.295 32.0888 262.22 32.0888ZM269.557 30.1021H262.22C259.814 30.1021 257.49 30.9754 255.679 32.5599L246.13 40.9149C244.059 42.7269 245.341 46.1377 248.093 46.1377H269.557C272.3 46.1377 274.523 43.914 274.523 41.1709V35.0689C274.523 32.3258 272.3 30.1021 269.557 30.1021Z"
          fill="black"
        />
        <circle cx="236.473" cy="66.17" r="6.32426" fill="black" />
        <circle cx="285.418" cy="66.17" r="6.32426" fill="black" />
      </g>
      <g>
        <path
          d="M56.542 32.074H61.508V29.864H48.742V32.074H53.864V34.336C53.864 38.236 51.472 42.682 47.884 44.398L49.418 46.53C52.122 45.204 54.202 42.396 55.242 39.12C56.308 42.084 58.31 44.684 60.936 45.932L62.418 43.826C58.856 42.136 56.542 37.976 56.542 34.336V32.074ZM70.166 36.78H66.5V27.524H63.822V51.002H66.5V38.99H70.166V36.78ZM73.548 29.994V32.178H81.764C81.218 37.586 78.124 41.72 72.378 44.658L73.86 46.712C81.53 42.838 84.442 36.806 84.442 29.994H73.548ZM94.14 36.78H90.578V27.498H87.9V50.976H90.578V39.016H94.14V36.78ZM107.038 48.948C103.606 48.948 101.682 48.22 101.682 46.79C101.682 45.386 103.606 44.632 107.038 44.632C110.47 44.632 112.42 45.386 112.42 46.79C112.42 48.22 110.47 48.948 107.038 48.948ZM107.038 42.578C101.994 42.578 98.9519 44.112 98.9519 46.79C98.9519 49.494 101.994 51.002 107.038 51.002C112.108 51.002 115.124 49.494 115.124 46.79C115.124 44.112 112.108 42.578 107.038 42.578ZM104.178 36.546C105.036 36.676 106.05 36.754 107.09 36.754C108.13 36.754 109.092 36.676 109.95 36.546V38.938H104.178V36.546ZM107.09 29.994C110.574 29.994 112.68 30.826 112.68 32.334C112.68 33.842 110.574 34.7 107.09 34.7C103.58 34.7 101.474 33.842 101.474 32.334C101.474 30.826 103.58 29.994 107.09 29.994ZM112.628 38.938V35.844C114.422 35.064 115.462 33.868 115.462 32.334C115.462 29.578 112.212 27.914 107.09 27.914C101.942 27.914 98.7179 29.578 98.7179 32.334C98.7179 33.868 99.7319 35.064 101.5 35.818V38.938H96.4559V41.07H117.698V38.938H112.628Z"
          fill={color === '#F57D14' ? 'white' : 'black'}
        />
        <path
          d="M48.95 67.759C48.95 66.654 49.782 65.9 50.952 65.9C52.109 65.9 52.954 66.654 52.954 67.759C52.954 68.851 52.109 69.618 50.952 69.618C49.782 69.618 48.95 68.851 48.95 67.759ZM53.994 67.759C53.994 66.121 52.707 65.003 50.952 65.003C49.184 65.003 47.91 66.121 47.91 67.759C47.91 69.384 49.184 70.515 50.952 70.515C52.707 70.515 53.994 69.384 53.994 67.759ZM49.158 72.647H55.671V75.962H56.737V71.776H49.158V72.647ZM58.44 66.966V66.082H56.737V64.314H55.671V71.23H56.737V69.449H58.44V68.578H56.737V66.966H58.44ZM65.5792 75.169C67.1912 75.169 68.6992 73.986 68.6992 71.893C68.6992 69.8 67.4122 68.864 65.8262 68.864C65.2542 68.864 64.8252 69.007 64.4092 69.241L64.6432 66.485H68.2442V65.471H63.6032L63.3042 69.93L63.9412 70.32C64.4872 69.956 64.8902 69.761 65.5272 69.761C66.7232 69.761 67.5032 70.567 67.5032 71.932C67.5032 73.323 66.5932 74.181 65.4752 74.181C64.3702 74.181 63.6812 73.674 63.1352 73.128L62.5502 73.908C63.1872 74.545 64.0972 75.169 65.5792 75.169ZM78.1371 68.331H72.9111V67.018H78.1371V68.331ZM79.4631 64.626H78.1371V65.991H72.9111V64.626H71.5851V69.384H79.4631V64.626ZM72.8461 72.569H71.5071V75.78H79.6711V74.688H72.8461V72.569ZM70.2071 70.372V71.451H74.9651V73.544H76.3041V71.451H80.8541V70.372H70.2071ZM95.5071 69.995C93.4661 69.631 91.2431 67.915 91.2431 65.978V65.081H90.1251V65.978C90.1251 67.915 87.9151 69.631 85.8741 69.995L86.3161 70.879C88.1101 70.502 89.9301 69.293 90.6841 67.629C91.4381 69.293 93.2711 70.502 95.0521 70.879L95.5071 69.995ZM91.2171 73.57V70.736H90.1511V73.57H85.4451V74.441H96.0271V73.57H91.2171ZM101.217 70.84C101.698 70.957 102.257 71.022 102.829 71.022C103.414 71.022 103.973 70.957 104.467 70.84V73.583H101.217V70.84ZM102.829 65.874C104.701 65.874 106.053 66.732 106.053 68.032C106.053 69.332 104.701 70.19 102.829 70.19C100.957 70.19 99.618 69.332 99.618 68.032C99.618 66.732 100.957 65.874 102.829 65.874ZM105.533 73.583V70.424C106.495 69.917 107.067 69.085 107.067 68.032C107.067 66.212 105.312 65.042 102.829 65.042C100.359 65.042 98.591 66.212 98.591 68.032C98.591 69.085 99.176 69.93 100.151 70.437V73.583H97.551V74.467H108.146V73.583H105.533Z"
          fill={color === '#F57D14' ? 'white' : '#727272'}
        />
      </g>
    </svg>
  );
};
