import LinkHome from '../common/LinkHome';
import SectionHeading from '../common/SectionHeading';
import YachtCard from './YachtCard';

function FleetSection({ daftar, pesan }) {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading label="For Sale & Rent" judul="Fleet of Luxury Boats" />

        <p className="search-result" role="status">{pesan}</p>

        <div className="row">
          {daftar.map((yacht) => (
            <YachtCard yacht={yacht} key={yacht.name} />
          ))}
        </div>

        <div className="text-center mt-3">
          <LinkHome className="btn btn-outline-cyan">View All Yachts</LinkHome>
        </div>
      </div>
    </section>
  );
}

export default FleetSection;
