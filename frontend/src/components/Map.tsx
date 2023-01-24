import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { loginUserAddressState } from '@/atom/atom';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map = ({ latitude, longitude }: MapProps) => {
  const setAddress = useSetRecoilState(loginUserAddressState);

  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_REACT_KAKAO_API
    }&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            const locPosition = new window.kakao.maps.LatLng(
                latitude,
                longitude
              ),
              message = '<div style="padding:5px;">여기에 계신가요?!</div>';

            const geocoder = new window.kakao.maps.services.Geocoder();

            const callback = function (
              result: {
                road_address?: { address_name: string };
                address: { address_name: string };
              }[],
              status: string
            ) {
              if (status === window.kakao.maps.services.Status.OK) {
                setAddress(result[0].address.address_name);
              }
            };
            geocoder.coord2Address(longitude, latitude, callback);

            displayMarker(locPosition, message);
          });
        } else {
          const locPosition = new window.kakao.maps.LatLng(
              33.450701,
              126.570667
            ),
            message = 'geolocation을 사용할수 없어요..';

          displayMarker(locPosition, message);
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function displayMarker(position: any, message: string) {
          const imageSrc = '/marker.png',
            imageSize = new window.kakao.maps.Size(64, 69),
            imageOption = { offset: new window.kakao.maps.Point(27, 69) };

          const image = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          );
          const marker = new window.kakao.maps.Marker({
            map,
            position,
            image,
          });

          const content = message,
            removable = true;

          const infowindow = new window.kakao.maps.InfoWindow({
            content,
            removable,
          });

          infowindow.open(map, marker);

          map.setCenter(position);
        }
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, [latitude, longitude, setAddress]);

  return <MapContainer id="map" />;
};

const MapContainer = styled.div`
  width: 325px;
  height: 325px;
`;

export default Map;
