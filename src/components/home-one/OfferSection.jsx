import LinkHome from '../common/LinkHome';
import { penawaran } from '../../data/layanan';

function OfferSection() {
  return (
    <section className="offer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <span className="label-script">Explore</span>
            <h2 className="section-title mb-5">What We Offer</h2>
            <div className="row g-3 mb-5">
              {penawaran.map((p) => (
                <div className="col-4" key={p.judul}>
                  <div className="offer-circle"><i className={'bi ' + p.icon}></i></div>
                  <div className="offer-item">{p.judul}</div>
                </div>
              ))}
            </div>
            <LinkHome className="btn btn-fill-cyan">Learn More</LinkHome>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
