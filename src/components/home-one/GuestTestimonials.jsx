import { tamu, teksTamu } from '../../data/orang';
import SectionHeading from '../common/SectionHeading';

function GuestTestimonials() {
  return (
    <section className="testi-section">
      <div className="container">
        <SectionHeading label="Testimonials" judul="The Best Days Are Spent" />
        <div className="row g-4 text-center">
          {tamu.map((t) => (
            <div className="col-md-4" key={t.name}>
              <p className="testi-text">{teksTamu}</p>
              <img className="testi-avatar" src={t.image} alt={t.name} />
              <h6 className="mt-2 mb-0">{t.name}</h6>
              <small>Charter Guest</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuestTestimonials;
