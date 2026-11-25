import { useState } from 'react';
import { ukuranPerahu } from '../../data/layanan';

function ActivityForm() {
  const [pilihan, setPilihan] = useState('');
  const [pesan, setPesan] = useState({ teks: '', ok: false });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (pilihan === '') {
      setPesan({ teks: 'Please choose the boat meters first.', ok: false });
    } else {
      setPesan({ teks: 'Booking started for ' + pilihan + '.', ok: true });
    }
  };

  return (
    <form className="book-card activity-form" onSubmit={handleSubmit}>
      <h4>Book For Activities</h4>
      <select
        className="form-select activity-select"
        aria-label="Boat meters"
        value={pilihan}
        onChange={(e) => setPilihan(e.target.value)}
      >
        <option value="">Boat Meters</option>
        {ukuranPerahu.map((ukuran) => (
          <option value={ukuran} key={ukuran}>{ukuran}</option>
        ))}
      </select>
      <button type="submit" className="btn btn-fill-cyan w-100">Start Booking</button>
      <p className={'booking-msg' + (pesan.ok ? ' ok' : '')} role="status">{pesan.teks}</p>
    </form>
  );
}

export default ActivityForm;
