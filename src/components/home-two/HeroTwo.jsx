import LinkHome from '../common/LinkHome';
import PlayButton from '../common/PlayButton';
import Reveal from '../common/Reveal';

const gambarHero = 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2070';

function HeroTwo() {
  return (
    <section className="hero-main" style={{ backgroundImage: `url('${gambarHero}')` }}>
      <span className="hero-decoration hero-decoration-two bounce-animate2" aria-hidden="true"></span>
      <div className="container">
        <Reveal animasi="fadeInLeft" className="hero-main-content">
          <h1>Boats and Yacht Rental</h1>
          <p>Yachting is one of life’s greatest pleasures! We help create unforgettable yacht charters from start to finish.</p>
          <div className="d-flex align-items-center gap-3">
            <LinkHome className="btn btn-hero-outline btn-hero-dark">Discover More</LinkHome>
            <PlayButton className="btn-circle-play btn-play-trigger" label="Play video">
              <i className="bi bi-play-fill"></i>
            </PlayButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroTwo;
