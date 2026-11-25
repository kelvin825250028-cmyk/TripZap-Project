import LinkHome from '../common/LinkHome';
import Reveal from '../common/Reveal';

const gambarHero = 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070';

function HeroOne() {
  return (
    <section className="hero-one" style={{ backgroundImage: `url('${gambarHero}')` }}>
      <span className="hero-decoration hero-decoration-one rotateme" aria-hidden="true"></span>
      <Reveal animasi="fadeInUp" className="hero-one-content">
        <h1>Our Premier Boats</h1>
        <p>Enjoy the perfect service and luxury</p>
        <LinkHome className="btn btn-hero-outline">Discover More</LinkHome>
      </Reveal>
    </section>
  );
}

export default HeroOne;
