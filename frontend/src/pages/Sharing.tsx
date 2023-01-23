import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { DefaultButton } from '@/components';

const Sharing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Middle>
        <div>
          <Location>
            현위치 제주도 서귀포시 농장로 342길 2<LocationIcon />
          </Location>
          <MapIcon />
          <DefaultButton
            onClick={() => navigate('/location-level')}
            backgroundColor="#F57D14"
          >
            나눔받기
          </DefaultButton>
        </div>
      </Middle>
      <AlreadyAppliedButton>이미 신청하셨나요?</AlreadyAppliedButton>
    </>
  );
};

export default Sharing;

const Middle = styled.div`
  width: 100%;
  & > div {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #727272;
  cursor: pointer;
`;

const AlreadyAppliedButton = styled.button`
  color: #727272;
  text-decoration: underline;
  padding-bottom: 10rem;
`;

const LocationIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="9" y1="0.5" x2="9" y2="5.5" stroke="black" />
      <circle cx="8" cy="8" r="7.5" fill="#D9D9D9" stroke="black" />
      <line x1="1" y1="7.5" x2="6" y2="7.5" stroke="black" />
      <line x1="11" y1="7.5" x2="16" y2="7.5" stroke="black" />
      <line x1="9" y1="10.5" x2="9" y2="15.5" stroke="black" />
    </svg>
  );
};

const MapIcon = () => {
  return (
    <svg
      viewBox="0 0 330 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ paddingBottom: '1rem' }}
    >
      <path d="M0 0H330V324H0V0Z" fill="#D9D9D9" fillOpacity="0.5" />
      <mask
        id="mask0_316_2706"
        maskUnits="userSpaceOnUse"
        x="75"
        y="99"
        width="117"
        height="117"
      >
        <path
          d="M99.8516 99L191.777 123.851L166.927 215.777L75.0009 190.926L99.8516 99Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_316_2706)">
        <path
          d="M113.64 200.983C114.291 198.044 114.878 195.982 115.846 193.131C111.986 193.612 108.3 191.988 104.886 190.396C101.615 188.863 98.7236 186.808 96.7823 183.694C93.1411 177.847 93.7598 170.427 96.1761 164.253C97.1377 161.802 99.341 157.92 102.387 153.784L105.34 151.33C108.359 148.457 111.833 145.989 115.759 144.581C119.684 143.173 124.092 142.912 128.007 144.332C129.096 144.728 130.182 145.276 130.949 146.156C131.715 147.035 132.121 148.299 131.737 149.4L135.292 152.967C137.414 152.229 139.794 153.885 140.552 156.012C141.31 158.139 140.859 160.481 140.197 162.63C139.536 164.78 138.661 166.911 138.598 169.157C138.575 170.977 139.075 172.765 140.042 174.309C141.008 175.853 142.397 177.086 144.044 177.86L146.251 178.343C150.205 176.399 152.187 176.531 153.998 178.157C156.577 180.471 156.164 183.779 154.791 186.28C153.291 189.043 150.731 191.083 147.839 192.248C146.384 192.82 144.861 193.212 143.309 193.414C142.546 193.519 141.777 193.586 141.007 193.617C140.139 193.654 139.333 193.428 138.746 194.106C136.159 197.107 134.57 200.19 133.862 204.088"
          fill="white"
        />
        <path
          d="M96.4199 136.409L122.96 121.165L174.105 159.204L172.252 179.328L167.147 188.261L156.565 192.574L150.297 190.88L143.206 177.305L137.153 169.84L140.316 158.14L121.073 143.074L95.1534 164.315L93.482 163.863L90.772 157.301L91.3937 146.708L96.4199 136.409Z"
          fill="white"
        />
        <path
          d="M149.057 129.118L152.343 138.526C156.227 137.424 160.752 141.696 162.529 143.97C176.252 155.571 174.803 172.098 172.363 178.912C169.381 189.943 161.167 191.578 157.433 191.017L153.254 189.888C155.92 186.662 155.871 182.973 155.513 181.531C155.071 173.878 147.808 176.309 144.232 178.481C134.989 174.189 138.175 163.841 140.924 159.203C142.37 153.855 137.544 152.909 134.95 153.104L132.59 150.224C133.291 140.998 123.273 143.222 116.441 143.617C110.975 143.933 103.374 151.593 100.257 155.384L93.6723 164.813C88.2973 154.841 89.8447 150.775 94.6449 141.312C99.4451 131.848 112.184 124.531 126.719 122.183C138.347 120.304 146.456 126.024 149.057 129.118Z"
          fill="#FFAA01"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M92.2607 165.322C92.4572 165.48 92.6728 165.589 92.9012 165.651C93.2118 165.735 93.5402 165.729 93.8466 165.639C91.6141 172.662 92.1202 179.481 95.3121 184.608C97.216 187.661 100.108 190.066 104.154 191.963C106.659 193.134 109.908 194.649 113.431 194.908C113.012 196.238 112.765 197.23 112.324 199.215C112.123 200.123 112.672 201.022 113.561 201.262C113.586 201.269 113.611 201.276 113.645 201.273C114.578 201.48 115.503 200.89 115.71 199.957C116.354 197.046 116.551 196.436 117.487 193.682C117.679 193.118 117.566 192.495 117.189 192.032C116.811 191.571 116.224 191.334 115.633 191.408C112.372 191.815 109.167 190.479 105.621 188.824C102.153 187.199 99.8122 185.278 98.2527 182.776C95.3361 178.095 95.1684 171.572 97.7871 164.882C98.5735 162.879 100.56 159.181 103.781 154.808C104.347 154.038 104.183 152.953 103.413 152.386C102.643 151.819 101.558 151.983 100.991 152.754C98.2794 156.434 96.0059 160.22 94.802 163.035C94.7066 162.889 94.5872 162.755 94.4447 162.639C92.4994 161.055 91.9389 158.219 91.8117 156.113C91.3738 149.153 94.5485 141.677 100.303 136.115C105.247 131.336 112.034 127.76 120.475 125.487C127.342 123.636 133.045 123.34 137.909 124.574C143.791 126.071 148.542 130.19 150.025 135.077C150.303 135.993 151.269 136.511 152.185 136.232C153.1 135.953 153.618 134.987 153.34 134.072C151.487 127.955 145.887 123.027 138.763 121.218C133.305 119.832 127.03 120.133 119.574 122.14C110.563 124.568 103.268 128.431 97.8974 133.624C91.4257 139.882 87.8579 148.37 88.3588 156.325C88.6023 160.334 89.9501 163.442 92.2607 165.322ZM154.851 193.066C154.578 192.992 154.311 192.908 154.044 192.815C153.354 192.571 152.915 191.933 152.891 191.243C151.608 192.315 150.119 193.205 148.481 193.864C146.882 194.493 145.218 194.922 143.527 195.14C142.723 195.249 141.893 195.323 141.068 195.354C140.818 195.364 140.58 195.36 140.372 195.354C140.341 195.354 140.309 195.353 140.276 195.352C140.166 195.35 140.046 195.347 139.96 195.351C137.455 198.261 136.619 199.383 136.012 202.734C135.842 203.674 134.941 204.298 134.001 204.127C133.948 204.125 133.899 204.115 133.852 204.102C132.994 203.87 132.439 203.015 132.603 202.12C133.384 197.83 134.719 196.131 137.427 192.989C138.419 191.843 139.697 191.878 140.463 191.9C140.486 191.9 140.508 191.901 140.531 191.901L140.567 191.902C140.695 191.905 140.816 191.908 140.925 191.902C141.645 191.872 142.364 191.81 143.069 191.713C144.491 191.53 145.876 191.172 147.2 190.651C149.877 189.572 152.037 187.732 153.264 185.469C153.889 184.332 155.09 181.482 152.836 179.458C151.852 178.574 150.796 178.046 147.007 179.91C146.249 180.283 145.351 180.049 144.861 179.398C144.479 179.604 144.023 179.665 143.587 179.547C143.49 179.52 143.394 179.486 143.299 179.442C141.347 178.523 139.71 177.07 138.566 175.242C137.422 173.414 136.832 171.306 136.859 169.149C136.918 167.084 137.528 165.226 138.12 163.425L138.176 163.252L138.208 163.155L138.208 163.155L138.208 163.155L138.208 163.155L138.208 163.155L138.208 163.155L138.208 163.155C138.319 162.815 138.43 162.476 138.534 162.135C139.042 160.49 139.542 158.375 138.913 156.609C138.475 155.378 137.011 154.214 135.852 154.618C134.948 154.933 133.963 154.454 133.647 153.553C133.333 152.649 133.811 151.663 134.713 151.348C137.29 150.451 140.902 151.882 142.171 155.448C143.144 158.174 142.506 160.999 141.842 163.157C141.702 163.61 141.556 164.061 141.407 164.511C140.869 166.147 140.363 167.69 140.319 169.223C140.299 170.689 140.707 172.144 141.498 173.41C142.288 174.676 143.419 175.678 144.769 176.315C145.031 176.438 145.248 176.62 145.411 176.836C145.426 176.828 145.44 176.821 145.455 176.813C145.463 176.809 145.472 176.805 145.48 176.8C150.921 174.125 153.341 175.258 155.147 176.879C157.947 179.393 158.389 183.318 156.302 187.124C155.855 187.948 155.317 188.728 154.7 189.455C154.866 189.462 155.035 189.494 155.2 189.553C159.889 191.218 165.242 187.804 168.109 183.576C171.363 178.773 172.797 172.617 172.149 166.245C171.564 160.515 169.291 154.601 165.57 149.147C162.121 144.081 158.398 141.289 154.5 140.848C153.549 140.741 152.866 139.884 152.973 138.935C153.08 137.986 153.938 137.301 154.886 137.408C159.835 137.965 164.391 141.259 168.429 147.197C172.471 153.123 174.95 159.589 175.592 165.893C176.323 173.074 174.685 180.041 170.974 185.519C169.096 188.287 166.509 190.58 163.687 191.975C160.69 193.449 157.655 193.821 154.851 193.066ZM104.072 152.535C104.298 152.772 104.575 152.931 104.87 153.01C105.436 153.163 106.065 153.025 106.516 152.594C109.707 149.55 113.006 147.408 116.321 146.224C120.149 144.858 124.083 144.768 127.399 145.972C128.444 146.35 129.175 146.787 129.629 147.307C130.04 147.777 130.231 148.421 130.085 148.839C129.769 149.742 130.247 150.729 131.148 151.045C132.055 151.362 133.038 150.886 133.354 149.982C133.912 148.384 133.472 146.439 132.234 145.025C131.374 144.039 130.212 143.307 128.581 142.714C124.515 141.238 119.747 141.324 115.162 142.96C111.384 144.306 107.675 146.705 104.13 150.087C103.438 150.746 103.414 151.842 104.072 152.535ZM108.557 163.698C109.634 163.989 110.794 163.165 111.147 161.858C111.501 160.55 110.914 159.254 109.837 158.963C108.761 158.672 107.601 159.496 107.247 160.803C106.894 162.111 107.48 163.407 108.557 163.698ZM120.442 165.072C120.088 166.38 118.929 167.204 117.852 166.913C116.775 166.622 116.188 165.326 116.542 164.018C116.895 162.71 118.055 161.886 119.132 162.178C120.209 162.469 120.795 163.765 120.442 165.072Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M113.862 164.765C114.212 165.376 114.002 166.156 113.391 166.506L106.995 170.18L111.164 172.191C111.798 172.497 112.064 173.259 111.758 173.894C111.452 174.528 110.69 174.794 110.056 174.488L103.709 171.428C103.283 171.222 103.005 170.797 102.988 170.325C102.971 169.852 103.217 169.409 103.628 169.173L112.121 164.295C112.731 163.944 113.511 164.155 113.862 164.765Z"
          fill="black"
        />
        <path
          d="M156.551 123.44C158.173 122.559 160.165 123.639 160.311 125.479L160.956 133.578C161.024 134.439 161.524 135.206 162.283 135.618L169.15 139.341C171.659 140.702 170.38 144.528 167.557 144.106L164.899 143.709C163.275 143.466 161.849 144.798 161.979 146.434L162.186 149.03C162.38 151.471 159.359 152.757 157.735 150.925L149.876 142.064C149.479 141.616 148.937 141.323 148.345 141.234L136.632 139.483C134.211 139.121 133.64 135.888 135.791 134.719L138.08 133.475C139.522 132.692 139.86 130.77 138.771 129.542L136.987 127.531C135.093 125.395 137.602 122.236 140.112 123.596L146.979 127.32C147.738 127.731 148.654 127.731 149.412 127.319L156.551 123.44Z"
          fill="#8DC73F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M163.895 133.111L163.269 125.242C162.952 121.255 158.636 118.915 155.122 120.824L148.186 124.593L141.521 120.979C136.084 118.031 130.649 124.877 134.752 129.504L136.181 131.115L134.362 132.103C129.702 134.635 130.938 141.641 136.183 142.425L147.744 144.153L155.5 152.898C159.019 156.867 165.564 154.08 165.143 148.793L164.979 146.73L167.108 147.048C173.225 147.963 175.997 139.672 170.56 136.724L163.895 133.111ZM160.303 125.478C160.156 123.638 158.164 122.558 156.542 123.439L149.404 127.318C148.645 127.73 147.729 127.73 146.97 127.319L140.103 123.595C137.594 122.234 135.085 125.394 136.979 127.53L138.762 129.541C139.851 130.769 139.514 132.691 138.072 133.474L135.783 134.718C133.632 135.886 134.202 139.12 136.623 139.482L148.336 141.233C148.928 141.321 149.471 141.615 149.868 142.063L157.726 150.924C159.35 152.755 162.371 151.469 162.177 149.029L161.97 146.433C161.84 144.796 163.267 143.465 164.89 143.708L167.548 144.105C170.371 144.527 171.651 140.701 169.141 139.34L162.274 135.617C161.515 135.205 161.016 134.437 160.947 133.577L160.303 125.478Z"
          fill="black"
        />
        <path
          d="M159.185 131.126C159.632 133.332 158.205 135.483 155.998 135.93C153.791 136.377 151.64 134.95 151.193 132.743C150.747 130.536 152.174 128.385 154.381 127.938C156.587 127.492 158.738 128.919 159.185 131.126Z"
          fill="#50853B"
        />
      </g>
    </svg>
  );
};
