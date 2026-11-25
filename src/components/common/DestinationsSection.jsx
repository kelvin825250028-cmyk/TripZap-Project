import DestinationGrid from './DestinationGrid';
import LinkHome from './LinkHome';
import SectionHeading from './SectionHeading';

function DestinationsSection({ className = '' }) {
  return (
    <section className={('section-pad ' + className).trim()}>
      <div className="container">
        <SectionHeading label="Places To Go" judul="The Perfect Destinations" />
        <DestinationGrid />
        <div className="text-center mt-5">
          <LinkHome className="btn btn-outline-cyan">All Destinations</LinkHome>
        </div>
      </div>
    </section>
  );
}

export default DestinationsSection;
