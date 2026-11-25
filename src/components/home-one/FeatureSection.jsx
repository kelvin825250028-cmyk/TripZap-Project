import { fitur } from '../../data/layanan';
import SectionHeading from '../common/SectionHeading';

function FeatureSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading label="Basic Features" judul="Our Way to Success" />
        <div className="row g-4">
          {fitur.map((f) => (
            <div className="col-lg-4 col-md-6" key={f.judul}>
              <div className="feature-card">
                <i className={'bi ' + f.icon}></i>
                <h5>{f.judul}</h5>
                <p>{f.teks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
