import LinkHome from '../common/LinkHome';
import Reveal from '../common/Reveal';

const gambarBanner = 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=2070';

// Banner atas: judul + breadcrumb (Home > Our Yachts), muncul dengan fade in.
function BannerHalaman() {
  return (
    <section className="page-banner" style={{ backgroundImage: `url('${gambarBanner}')` }}>
      <Reveal animasi="fadeIn" className="container text-center page-banner-content">
        <h1>Our Yachts</h1>
        <p className="page-breadcrumb">
          <LinkHome>Home</LinkHome>
          <i className="bi bi-chevron-right"></i>
          <span>Our Yachts</span>
        </p>
      </Reveal>
    </section>
  );
}

export default BannerHalaman;
