import { useState } from 'react';
import { TESTIMONI_PER_HALAMAN, teksTestimoni, testimonials } from '../../data/orang';
import Bintang from '../common/Bintang';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

const jumlahHalaman = Math.ceil(testimonials.length / TESTIMONI_PER_HALAMAN);
const nomorHalaman = Array.from({ length: jumlahHalaman }, (_, i) => i);

function TestimonialPager() {
  const [halaman, setHalaman] = useState(0);

  const awal = halaman * TESTIMONI_PER_HALAMAN;
  const tampil = testimonials.slice(awal, awal + TESTIMONI_PER_HALAMAN);

  return (
    <section className="testi-dark">
      <div className="container">
        <SectionHeading label="Testimonial" judul="What Are Customer Says?" />

        <Reveal animasi="fadeInUp" className="row g-4 justify-content-center">
          {tampil.map((t) => (
            <div className="col-lg-5 col-md-6" key={t.name}>
              <div className="testi-card">
                <div className="testi-left">
                  <img src={t.image} alt={t.name} />
                  <Bintang className="testi-stars" />
                </div>
                <div className="testi-right">
                  <p>{teksTestimoni}</p>
                  <h5>{t.name}</h5>
                  <small>{t.info}</small>
                </div>
              </div>
            </div>
          ))}
        </Reveal>

        <div className="testi-dots">
          {nomorHalaman.map((i) => (
            <button
              type="button"
              className={'testi-dot' + (i === halaman ? ' active' : '')}
              aria-label={'Halaman ' + (i + 1)}
              aria-current={i === halaman ? 'true' : undefined}
              onClick={() => setHalaman(i)}
              key={i}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialPager;
