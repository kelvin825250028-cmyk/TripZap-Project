import { guides } from '../../data/orang';
import Reveal from './Reveal';

function GuideCards() {
  return (
    <Reveal animasi="fadeInUp" className="row g-4">
      {guides.map((guide) => (
        <div className="col-lg-3 col-md-6" key={guide.name}>
          <div className="guide-card">
            <div className="guide-photo">
              <img src={guide.image} alt={guide.name} />
              <button
                type="button"
                className="btn-share"
                aria-label={'Bagikan profil ' + guide.name}
                onClick={() => alert('Profil ' + guide.name + ' siap dibagikan.')}
              >
                <i className="bi bi-share-fill"></i>
              </button>
            </div>
            <div className="guide-info">
              <h6>{guide.name}</h6>
              <small>{guide.role}</small>
            </div>
          </div>
        </div>
      ))}
    </Reveal>
  );
}

export default GuideCards;
