import { seasonBoats } from '../../data/layanan';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

function SeasonCard({ boat }) {
  const tampilkan = () => alert(boat.name + ' - $' + boat.price + ' / week');

  return (
    <div className="col-lg-6">
      <div
        className="season-card"
        role="button"
        tabIndex={0}
        onClick={tampilkan}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            tampilkan();
          }
        }}
      >
        <div className="season-img">
          <img src={boat.image} alt={boat.name} />
        </div>
        <div className="season-body">
          <div className="season-top">
            <span>{boat.place}</span>
            <span className="season-rate"><i className="bi bi-star-fill"></i>4.5/5</span>
          </div>
          <h5>{boat.name}</h5>
          <p>12 Guests . 6 Beds . 2 Cabins . 1 Bathroom</p>
          <strong className="season-price">${boat.price} / week</strong>
        </div>
      </div>
    </div>
  );
}

function SeasonBoats() {
  return (
    <section className="section-pad bg-blue-soft">
      <div className="container">
        <SectionHeading label="Book Today" judul="Yacht & Boats For All Seasons" />
        <Reveal animasi="fadeInUp" className="row g-4">
          {seasonBoats.map((boat) => (
            <SeasonCard boat={boat} key={boat.name} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default SeasonBoats;
