import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();
  return (
    <button
      style={{ position: 'absolute', top: '10px', left: '8px' }}
      onClick={() => navigate(-1)}
    ></button>
  );
};

export default Back;
