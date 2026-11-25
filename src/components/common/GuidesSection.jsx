import GuideCards from '../common/GuideCards';
import SectionHeading from '../common/SectionHeading';

function GuidesSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading label="Our Team" judul="Meet Our Excellent Guides" />
        <GuideCards />
      </div>
    </section>
  );
}

export default GuidesSection;
