function Bintang({ className = '' }) {
  return (
    <div className={className}>
      {[1, 2, 3, 4, 5].map((n) => (
        <i className="bi bi-star-fill" key={n}></i>
      ))}
    </div>
  );
}

export default Bintang;
