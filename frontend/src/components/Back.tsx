import { ChevronLeftIcon } from '@goorm-dev/gds-goormthon';
import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();
  return (
    <button
      style={{ position: 'absolute', top: '10px', left: '8px' }}
      onClick={() => navigate(-1)}
    >
      <ChevronLeftIcon
        style={{ width: '30px', height: '30px', color: '#d9d9d9' }}
      />
    </button>
  );
};

export default Back;
