import LinkHome from '../common/LinkHome';

function WelcomeBox() {
  return (
    <section className="welcome-one">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-4 col-md-6">
            <div className="welcome-box">
              <h3>Welcome!</h3>
              <p>We charter professionally crewed, luxury yachts throughout the Caribbean from the British Virgin Islands (BVI) to the Grenadines!</p>
              <LinkHome className="btn btn-fill-cyan">View Special Offers</LinkHome>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeBox;
