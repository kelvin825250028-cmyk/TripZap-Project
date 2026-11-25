import { useState } from 'react';
import '../../styles/google-maps.css';

const nilaiAwal = { nama: '', email: '', telepon: '', pesan: '' };

// Validasi: semua kolom wajib diisi + isi harus sesuai tipe input-nya
function validasi(nilai) {
  const galat = {};

  const nama = nilai.nama.trim();
  if (!nama) galat.nama = 'Full name is required.';
  else if (!/^[\p{L}\s.'-]+$/u.test(nama)) galat.nama = 'Full name may only contain letters.';

  const email = nilai.email.trim();
  if (!email) galat.email = 'Email address is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) galat.email = 'Enter a valid email address (e.g. name@example.com).';

  const telepon = nilai.telepon.replace(/[\s-]/g, '');
  if (!telepon) galat.telepon = 'Phone number is required.';
  else if (!/^\+?\d{8,15}$/.test(telepon)) galat.telepon = 'Phone number must contain digits only (8–15 digits).';

  if (!nilai.pesan.trim()) galat.pesan = 'Message is required.';

  return galat;
}

function GoogleMaps() {
  const [nilai, setNilai] = useState(nilaiAwal);
  const [sudahKirim, setSudahKirim] = useState(false); // true setelah tombol Send ditekan
  const [notifikasi, setNotifikasi] = useState(null); // null | 'sukses' | 'gagal'

  const galat = sudahKirim ? validasi(nilai) : {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNilai((lama) => ({ ...lama, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(validasi(nilai)).length > 0) {
      setSudahKirim(true);
      setNotifikasi('gagal');
      return;
    }

    setNilai(nilaiAwal);
    setSudahKirim(false);
    setNotifikasi('sukses');
  };

  const kelas = (nama) => 'form-control' + (galat[nama] ? ' is-invalid' : '');

  return (
    <section className="gmaps-section">
      <div className="container">
        <h2 className="gmaps-title">Our Location</h2>

        <div className="card gmaps-card">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="gmaps-map">
                <div className="gmaps-map-head">
                  <i className="bi bi-geo-alt-fill"></i>
                  <h5>Las Vegas Marina</h5>
                </div>
                <iframe
                  src="https://maps.google.com/maps?q=Las%20Vegas%20Marina&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-6">
              <form className="gmaps-form" onSubmit={handleSubmit} noValidate>
                <h5 className="gmaps-form-title">Send us a message</h5>

                {notifikasi === 'sukses' && (
                  <div className="alert alert-success alert-dismissible fade show gmaps-alert" role="alert">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Your message has been sent successfully. Thank you!</span>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setNotifikasi(null)}></button>
                  </div>
                )}
                {notifikasi === 'gagal' && (
                  <div className="alert alert-danger alert-dismissible fade show gmaps-alert" role="alert">
                    <i className="bi bi-exclamation-triangle-fill"></i>
                    <span>Your message was not sent. Please check the highlighted fields.</span>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setNotifikasi(null)}></button>
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="gmName" className="form-label">Full Name</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text"><i className="bi bi-person"></i></span>
                    <input
                      type="text"
                      id="gmName"
                      name="nama"
                      className={kelas('nama')}
                      placeholder="Enter your full name"
                      value={nilai.nama}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{galat.nama}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="gmEmail" className="form-label">Email Address</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                    <input
                      type="email"
                      id="gmEmail"
                      name="email"
                      className={kelas('email')}
                      placeholder="Enter your email address"
                      value={nilai.email}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{galat.email}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="gmPhone" className="form-label">Phone Number</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                    <input
                      type="tel"
                      id="gmPhone"
                      name="telepon"
                      inputMode="tel"
                      className={kelas('telepon')}
                      placeholder="Enter your phone number"
                      value={nilai.telepon}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{galat.telepon}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="gmMessage" className="form-label">Message</label>
                  <div className="input-group has-validation gmaps-textarea-group">
                    <span className="input-group-text"><i className="bi bi-chat-dots"></i></span>
                    <textarea
                      id="gmMessage"
                      name="pesan"
                      rows="4"
                      className={kelas('pesan')}
                      placeholder="Enter your message"
                      value={nilai.pesan}
                      onChange={handleChange}
                    ></textarea>
                    <div className="invalid-feedback">{galat.pesan}</div>
                  </div>
                </div>

                <button type="submit" className="btn gmaps-submit w-100">
                  <i className="bi bi-send-fill me-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleMaps;
