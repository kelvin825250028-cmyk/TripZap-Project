import { destinations } from '../../data/tempat';
import Reveal from './Reveal';

function DestinationGrid() {
  return (
    <Reveal animasi="zoomIn" className="dest-grid">
      {destinations.map((dest) => (
        <div className={'dest-item ' + dest.kelas} key={dest.name}>
          <img src={dest.image} alt={dest.name} />
          <span className="dest-name">{dest.name}</span>
        </div>
      ))}
    </Reveal>
  );
}

export default DestinationGrid;
