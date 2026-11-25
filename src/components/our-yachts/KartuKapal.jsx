import Reveal from '../common/Reveal';
import { hargaYacht, spesifikasiYacht } from '../../data/yachtsHalaman';

// Satu kartu kapal. Setiap kartu muncul dengan fade in.
function KartuKapal({ kapal }) {
  return (
    <Reveal animasi="fadeIn" className="col-lg-4 col-md-6">
      <div className="kapal-kotak">
        <div className="kapal-foto">
          <img src={kapal.gambar} alt={kapal.nama} />
          <i className="bi bi-star-fill kapal-bintang"></i>
        </div>
        <div className="kapal-info">
          <div className="kapal-atas">
            <span>{kapal.lokasi}</span>
            <span>{kapal.rating}</span>
          </div>
          <h5>{kapal.nama}</h5>
          <p className="kapal-spek">{spesifikasiYacht}</p>
          <p className="kapal-harga">{hargaYacht}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default KartuKapal;
