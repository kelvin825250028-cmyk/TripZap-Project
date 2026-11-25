// Tombol scroll-up (tanpa scroll-down) di sisi KIRI layar.
// Padanan scroll.js pada materi: window.scrollTo({ top: 0, behavior: 'smooth' }).
// Gaya tombol ada di file CSS eksternal: src/styles/scroll.css
function TombolScroll() {
  const keAtas = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scrollAtas">
      <button
        id="tombolAtas"
        type="button"
        className="tombol-scroll"
        title="Ke Atas"
        aria-label="Kembali ke atas halaman"
        onClick={keAtas}
      >
        &#9650;
      </button>
    </div>
  );
}

export default TombolScroll;
