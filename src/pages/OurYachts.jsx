import BannerHalaman from '../components/our-yachts/BannerHalaman';
import KartuKapal from '../components/our-yachts/KartuKapal';
import { daftarYachtHalaman } from '../data/yachtsHalaman';

function OurYachts() {
  return (
    <>
      <BannerHalaman />
      <section className="section-pad">
        <div className="container">
          <div className="row g-4 kapal-grid">
            {daftarYachtHalaman.map((kapal) => (
              <KartuKapal kapal={kapal} key={kapal.nama} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurYachts;
