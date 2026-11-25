function YachtCard({ yacht }) {
  const handleBook = () => {
    alert('Booking request sent for "' + yacht.name + '".\nOur team will confirm availability shortly.');
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="yacht-card">
        <div className="yacht-img">
          <img src={yacht.image} alt={yacht.name} />
        </div>
        <div className="yacht-body">
          <h5 className="yacht-name">{yacht.name}</h5>
          <div className="yacht-rating">
            <span className="stars">★★★★★</span>
            <span> ({yacht.rating} Rating)</span>
          </div>
          <hr />
          <div className="yacht-bottom">
            <div className="yacht-price">
              <small>From</small>
              <strong>${yacht.hargaMin} - ${yacht.hargaMax}</strong>
            </div>
            <button type="button" className="btn-book" onClick={handleBook}>
              Book Now <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YachtCard;
