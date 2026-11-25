import { useState } from 'react';
import { opsiJenis } from '../../data/yachts';

const opsiDurasi = [
  'Half Day (4 jam)',
  'Full Day (8 jam)',
  'Sunset Cruise (3 jam)',
  'Overnight (2 hari)',
];

function SearchBar({ onCari }) {
  const [ambil, setAmbil] = useState('');
  const [durasi, setDurasi] = useState(opsiDurasi[0]);
  const [jenis, setJenis] = useState('All Yachts');

  const handleSubmit = (event) => {
    event.preventDefault(); // mencegah halaman reload
    onCari({ ambil, durasi, jenis });
  };

  return (
    <section className="booking-search booking-search-one">
      <div className="container">
        <form className="booking-form row g-3 align-items-end" onSubmit={handleSubmit}>
          <div className="col-lg-3 col-md-6">
            <label htmlFor="pickUpDate" className="form-label">Pick - Up Date</label>
            <input
              type="date"
              className="form-control"
              id="pickUpDate"
              name="pickup"
              value={ambil}
              onChange={(e) => setAmbil(e.target.value)}
              required
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <label htmlFor="rentalDuration" className="form-label">Rental Duration</label>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle duration-toggle w-100 d-flex justify-content-between align-items-center"
                type="button"
                id="rentalDuration"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {durasi}
              </button>
              <ul className="dropdown-menu w-100" aria-labelledby="rentalDuration">
                {opsiDurasi.map((opsi) => (
                  <li key={opsi}>
                    <button
                      type="button"
                      className={'dropdown-item' + (durasi === opsi ? ' active' : '')}
                      onClick={() => setDurasi(opsi)}
                    >
                      {opsi}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <label htmlFor="yachtMake" className="form-label">Select Make</label>
            <select
              className="form-select"
              id="yachtMake"
              name="type"
              value={jenis}
              onChange={(e) => setJenis(e.target.value)}
            >
              {opsiJenis.map((opsi) => (
                <option value={opsi.nilai} key={opsi.nilai}>{opsi.label}</option>
              ))}
            </select>
          </div>
          <div className="col-lg-3 col-md-6">
            <button type="submit" className="btn btn-fill-cyan w-100">Search</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
