import LinkHome from '../common/LinkHome';

const poin = [
  { judul: 'Exciting Places', teks: 'Find memorable destinations and enjoy every moment of your trip.' },
  { judul: 'Different Yachts', teks: 'Choose a yacht that suits your plans, group, and travel style.' },
];

function AboutUs() {
  return (
    <section className="about-one section-pad">
      <div className="container">
        <div className="row align-items-center justify-content-center g-5">
          <div className="col-lg-5 col-md-6">
            <div className="about-one-photo">
              <img src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=1000" alt="Captain at the yacht helm" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <span className="label-script">About Us</span>
            <h2 className="section-title mb-3">Welcome to TripZap, the best yachting platform</h2>
            <p className="about-copy">
              Discover beautiful coastlines, explore exciting destinations, and enjoy a relaxing journey with our carefully selected yachts and experienced crew.
            </p>
            {poin.map((p) => (
              <div className="about-point" key={p.judul}>
                <h5><i className="bi bi-arrow-right-circle-fill"></i> {p.judul}</h5>
                <p>{p.teks}</p>
              </div>
            ))}
            <LinkHome className="btn btn-fill-cyan mt-2">
              View More <i className="bi bi-arrow-right ms-1"></i>
            </LinkHome>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
