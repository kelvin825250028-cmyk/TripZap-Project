import { useNavigasi } from '../../context/navigasi';

function LinkHome({ className = '', children, ...sisa }) {
  const { bukaHalaman } = useNavigasi();

  const handleKlik = (event) => {
    event.preventDefault();
    bukaHalaman('home-one');
  };

  return (
    <a href="#" className={className} {...sisa} onClick={handleKlik}>
      {children}
    </a>
  );
}

export default LinkHome;
