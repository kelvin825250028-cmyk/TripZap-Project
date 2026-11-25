import { galeriFooter, kontak, quicklinks, sosial } from '../../data/navigasi';
import Brand from './Brand';
import LinkHome from './LinkHome';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Empat kolom: brand, Quicklinks, Get In Touch, Gallery */}
        <div className="row g-4">
          <div className="col-lg-4">
            <Brand />
            <p>Lorem ipsum dolor sit amet, consec tetur elit eiusmod tempor incididunt labore dolore magna aliqua elits</p>
            {sosial.map((ikon) => (
              <LinkHome className="social-circle" key={ikon} aria-label={ikon.replace('bi-', '')}>
                <i className={'bi ' + ikon}></i>
              </LinkHome>
            ))}
          </div>

          <div className="col-lg-2 col-6">
            <h5>Quicklinks</h5>
            <ul className="list-unstyled">
              {quicklinks.map((teks) => (
                <li className="mb-2" key={teks}>
                  <LinkHome>{teks}</LinkHome>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <h5>Get In Touch</h5>
            <ul className="list-unstyled footer-contact">
              {kontak.map((k) => (
                <li key={k.judul}>
                  <i className={'bi ' + k.ikon}></i>
                  <span>
                    <strong>{k.judul}</strong>
                    <br />
                    {k.isi}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h5>Gallery</h5>
            <div className="gallery-grid">
              {galeriFooter.map((src, i) => (
                <img src={src} alt={'Gallery ' + (i + 1)} key={src} />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright: hanya satu kolom (selebar penuh) */}
        <div className="row">
          <div className="col-12 footer-bottom">Boat Trip &copy;2026. Boat All Rights Reserved By Dream IT</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
