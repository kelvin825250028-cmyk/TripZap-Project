import { useState } from 'react';

function BookingCounter() {
  const [tamu, setTamu] = useState(1);
  const [nama, setNama] = useState('');

  const kurangi = () => {
    if (tamu > 1) {
      setTamu(tamu - 1);
    }
  };

  const mulaiBooking = () => {
    const pemesan = nama === '' ? 'tamu' : nama;
    alert('Booking dimulai untuk ' + pemesan + ' (' + tamu + ' orang).');
  };

  return (
    <div className="book-card booking-counter">
      <h4>Book For Activities</h4>
      <p className="react-guest">
        Jumlah Tamu: <strong>{tamu}</strong>
      </p>
      <div className="react-buttons">
        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={kurangi}>
          Kurangi
        </button>
        <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => setTamu(tamu + 1)}>
          Tambah 1 Lagi
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Ketik nama pemesan ..."
      />
      <p className="react-result">Hasil Inputan: {nama}</p>
      <button type="button" className="btn btn-fill-cyan w-100" onClick={mulaiBooking}>
        Start Booking
      </button>
    </div>
  );
}

export default BookingCounter;
