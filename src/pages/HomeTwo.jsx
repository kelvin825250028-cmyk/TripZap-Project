import DestinationsSection from '../components/common/DestinationsSection';
import GuidesSection from '../components/common/GuidesSection';
import BlogPosts from '../components/home-two/BlogPosts';
import ExhibitionGallery from '../components/home-two/ExhibitionGallery';
import HeroTwo from '../components/home-two/HeroTwo';
import PricingPlans from '../components/home-two/PricingPlans';
import SeasonBoats from '../components/home-two/SeasonBoats';
import TestimonialPager from '../components/home-two/TestimonialPager';
import WhoWeAre from '../components/home-two/WhoWeAre';
import WhyChoose from '../components/home-two/WhyChoose';

function HomeTwo() {
  return (
    <>
      <HeroTwo />
      <WhoWeAre />
      <DestinationsSection className="bg-soft" />
      <TestimonialPager />
      <WhyChoose />
      <SeasonBoats />
      <ExhibitionGallery />
      <GuidesSection />
      <PricingPlans />
      <BlogPosts />
    </>
  );
}

export default HomeTwo;
