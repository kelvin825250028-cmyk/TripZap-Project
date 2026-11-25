import { statistik } from '../../data/layanan';
import PlayButton from '../common/PlayButton';
import StatItem from './StatItem';

function VideoStats() {
  return (
    <>
      <section className="video-section">
        <PlayButton className="btn-play btn-play-trigger">Play</PlayButton>
      </section>

      <section className="stats-band counter">
        <div className="container">
          <div className="row g-3">
            {statistik.map((s) => (
              <StatItem {...s} key={s.label} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoStats;
