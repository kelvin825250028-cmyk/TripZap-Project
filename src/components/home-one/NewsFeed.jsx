import { news } from '../../data/artikel';
import SectionHeading from '../common/SectionHeading';

const gambarBesar = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000';

function NewsFeed() {
  return (
    <section className="section-pad blog-section" id="blog">
      <div className="container">
        <SectionHeading label="Blogs & News" judul="Our Latest News Feed" />
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="blog-big" style={{ backgroundImage: `url('${gambarBesar}')` }}>
              <div>
                <small>Boat Trip</small>
                <h4>Top Gorgeous Yachts In The History Of The Boat Sailing</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {news.map((berita) => (
                <div className="col-6" key={berita.title}>
                  <div className="blog-card">
                    <img src={berita.image} alt={berita.title} />
                    <div className="blog-body">
                      <span className="blog-cat">Uncategorized</span>
                      <h6>{berita.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsFeed;
