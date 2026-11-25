import { useEffect, useRef, useState } from 'react';

// Tombol chat di sisi KANAN layar. Saat diklik, modal Bootstrap ditampilkan
// lewat atribut data-bs-toggle="modal" dan data-bs-target="#modalChat"
// (JavaScript Bootstrap diimpor di main.jsx).
const formKosong = { nama: '', email: '', pesan: '' };

function ChatModal() {
  const modalRef = useRef(null);
  const namaRef = useRef(null);
  const [isi, setIsi] = useState(formKosong);
  const [terkirim, setTerkirim] = useState(false);

  // Event bawaan Bootstrap: fokus ke kolom nama saat modal terbuka,
  // dan kosongkan form saat modal tertutup.
  useEffect(() => {
    const elemen = modalRef.current;
    const saatTampil = () => namaRef.current?.focus();
    const saatTutup = () => {
      setIsi(formKosong);
      setTerkirim(false);
    };
    elemen.addEventListener('shown.bs.modal', saatTampil);
    elemen.addEventListener('hidden.bs.modal', saatTutup);
    return () => {
      elemen.removeEventListener('shown.bs.modal', saatTampil);
      elemen.removeEventListener('hidden.bs.modal', saatTutup);
    };
  }, []);

  const ubahIsi = (event) => {
    const { name, value } = event.target;
    setIsi((lama) => ({ ...lama, [name]: value }));
  };

  const kirimPesan = (event) => {
    event.preventDefault(); // validasi required/email dilakukan browser sebelum sampai sini
    setTerkirim(true);
  };

  return (
    <>
      <div className="chatKanan">
        <button
          type="button"
          className="tombol-chat"
          title="Chat"
          aria-label="Buka kotak pesan"
          data-bs-toggle="modal"
          data-bs-target="#modalChat"
        >
          <i className="bi bi-chat-dots-fill"></i>
        </button>
      </div>

      <div
        className="modal fade modal-chat"
        id="modalChat"
        tabIndex="-1"
        aria-labelledby="judulModalChat"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-centered">
          <form className="modal-content" onSubmit={kirimPesan}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="judulModalChat">
                Silahkan berikan pesan di sini!
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
            </div>

            {terkirim ? (
              <>
                <div className="modal-body">
                  <div className="alert alert-success mb-0" role="status">
                    Terima kasih, <strong>{isi.nama}</strong>! Pesan Anda sudah terkirim. Kami akan membalas ke{' '}
                    <strong>{isi.email}</strong>.
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-fill-cyan" data-bs-dismiss="modal">
                    Tutup
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="chatNama" className="form-label">
                      Nama
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="chatNama"
                      name="nama"
                      placeholder="Masukkan nama Anda"
                      value={isi.nama}
                      onChange={ubahIsi}
                      ref={namaRef}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="chatEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="chatEmail"
                      name="email"
                      placeholder="nama@example.com"
                      value={isi.email}
                      onChange={ubahIsi}
                      required
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="chatPesan" className="form-label">
                      Isi Pesan
                    </label>
                    <textarea
                      className="form-control"
                      id="chatPesan"
                      name="pesan"
                      rows="4"
                      placeholder="Tuliskan pesan Anda di sini..."
                      value={isi.pesan}
                      onChange={ubahIsi}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Batal
                  </button>
                  <button type="submit" className="btn btn-fill-cyan">
                    Kirim Pesan
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default ChatModal;
