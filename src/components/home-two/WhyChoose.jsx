import { whyChoose } from '../../data/layanan';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

function WhyChoose() {
  return (
    <section className="section-pad why-section">
      <div className="container">
        <SectionHeading label="What We Do" judul="Whay Choose US" />
        <Reveal animasi="fadeInUp" className="row g-4">
          {whyChoose.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.icon}>
              <div className="why-card">
                <div className="why-icon"><i className={'bi ' + item.icon}></i></div>
                <div>
                  <h5>{item.title}</h5>
                  <p>Perfectly simple & easy to in our hour, when our ...</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default WhyChoose;
