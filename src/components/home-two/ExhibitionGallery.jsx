import { galeriPameran } from '../../data/tempat';

function ExhibitionGallery() {
  return (
    <section className="gallery-dark">
      <div className="container">
        <span className="label-line label-line-light">Latest Model</span>
        <h2 className="gallery-title">Explore the beauty of our exhibition.</h2>
        <div className="row g-3 mt-3">
          {galeriPameran.map((foto, i) => (
            <div className={foto.kelas} key={foto.image}>
              <img className={'gal-img ' + foto.ukuran} src={foto.image} alt={'Gallery ' + (i + 1)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitionGallery;
