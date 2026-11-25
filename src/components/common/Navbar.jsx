import { useState } from 'react';
import { menuUtama } from '../../data/navigasi';
import { useNavigasi } from '../../context/navigasi';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import Brand from './Brand';

function Navbar() {
  const { halamanAktif, bukaHalaman } = useNavigasi();
  const layarKecil = useMediaQuery('(max-width: 991.98px)');

  const [menuBuka, setMenuBuka] = useState(false); // collapse navbar di layar kecil
  const [dropdownBuka, setDropdownBuka] = useState(null); // judul dropdown yang terbuka (layar kecil)

  const pergiKe = (event, halaman) => {
    event.preventDefault();
    setMenuBuka(false);
    setDropdownBuka(null);
    bukaHalaman(halaman);
  };

  const handleKlikInduk = (event, judul) => {
    if (layarKecil) {
      event.preventDefault();
      setDropdownBuka(dropdownBuka === judul ? null : judul);
    } else {
      event.preventDefault();
      setDropdownBuka(dropdownBuka === judul ? null : judul);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-tripzap sticky-top">
      <div className="container-xxl">
        <Brand />

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNav"
          aria-expanded={menuBuka}
          aria-label="Buka menu"
          onClick={() => setMenuBuka(!menuBuka)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={'collapse navbar-collapse' + (menuBuka ? ' show' : '')} id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {menuUtama.map((item) => {
              if (!item.sub) {
                return (
                  <li className="nav-item" key={item.judul}>
                    <a className={'nav-link' + (item.halaman === halamanAktif ? ' active' : '')} href="#" onClick={(e) => pergiKe(e, item.halaman ?? 'contact')}>
                      {item.judul}
                    </a>
                  </li>
                );
              }

              const indukAktif = item.sub.some((s) => s.halaman === halamanAktif);
              return (
                <li
                  className={'nav-item dropdown' + (dropdownBuka === item.judul ? ' open' : '')}
                  key={item.judul}
                >
                  <a
                    className={'nav-link dropdown-toggle' + (indukAktif ? ' active' : '')}
                    href="#"
                    onClick={(e) => handleKlikInduk(e, item.judul)}
                  >
                    {item.judul}
                  </a>
                  <ul className="dropdown-menu">
                    {item.sub.map((sub) => {
                      const aktif = sub.halaman !== undefined && sub.halaman === halamanAktif;
                      return (
                        <li key={sub.judul}>
                          <a
                            className={'dropdown-item' + (aktif ? ' active' : '')}
                            href="#"
                            aria-current={aktif ? 'page' : undefined}
                            onClick={(e) => pergiKe(e, sub.halaman ?? 'destinations')}
                          >
                            {sub.judul}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
