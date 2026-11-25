import LinkHome from '../common/LinkHome';
import PlayButton from '../common/PlayButton';
import Reveal from '../common/Reveal';
import ActivityForm from './ActivityForm';
import BookingCounter from './BookingCounter';

function WhoWeAre() {
  return (
    <section className="who-section">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-lg-7">
            <div className="row g-4 align-items-start">
              <div className="col-md-5">
                <Reveal animasi="rotateInUpLeft" className="who-photo">
                  <img src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=800" alt="Yacht helm" />
                  <PlayButton className="btn-play-ring btn-play-trigger">Play</PlayButton>
                </Reveal>
              </div>
              <div className="col-md-7">
                <span className="label-line">Who We Are</span>
                <h2 className="who-title">Welcome to Sailing! Best Water Sports Agency in Thailand.</h2>
              </div>
            </div>
            <p className="who-text">
              <span className="dropcap">E</span> Yachts are places of entertainment, discovery and relaxation. Yacht rentals here adventure of a lifetime awaits you on control tomorrow with Floaty stablished in 1999 power choiceand when nothing prevents being able nkinG.
            </p>
            <LinkHome className="more-link">
              More About Us <i className="bi bi-arrow-right ms-2"></i>
            </LinkHome>
          </div>

          <div className="col-lg-4">
            <Reveal animasi="fadeInRight" className="book-wrap">
              <BookingCounter />
            </Reveal>
          </div>
        </div>

        <div className="book-row">
          <div className="row g-3">
            {[1, 2, 3].map((n) => (
              <div className="col-md-4" key={n}>
                <ActivityForm />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
