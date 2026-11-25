import { blogs } from '../../data/artikel';
import LinkHome from '../common/LinkHome';
import Reveal from '../common/Reveal';

function BlogPosts() {
  return (
    <section className="section-pad">
      <div className="container">
        <span className="label-line">Latest Blog</span>
        <h2 className="gallery-title text-navy mb-5">Recent blog &amp; articles</h2>
        <Reveal animasi="fadeInUp" className="row g-4">
          {blogs.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.title}>
              <div className="post-card">
                <img src={post.image} alt={post.title} />
                <div className="post-body">
                  <small className="post-author"><i className="bi bi-person"></i>tripzap</small>
                  <h5>{post.title}</h5>
                  <LinkHome className="read-more">
                    Read More <i className="bi bi-arrow-right"></i>
                  </LinkHome>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default BlogPosts;
