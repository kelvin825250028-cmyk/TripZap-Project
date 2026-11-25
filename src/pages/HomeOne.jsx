import { useMemo, useState } from 'react';
import { JUMLAH_BERANDA, yachts } from '../data/yachts';
import DestinationsSection from '../components/common/DestinationsSection';
import GuidesSection from '../components/common/GuidesSection';
import AboutUs from '../components/home-one/AboutUs';
import FeatureSection from '../components/home-one/FeatureSection';
import FleetSection from '../components/home-one/FleetSection';
import GuestTestimonials from '../components/home-one/GuestTestimonials';
import HeroOne from '../components/home-one/HeroOne';
import NewsFeed from '../components/home-one/NewsFeed';
import OfferSection from '../components/home-one/OfferSection';
import SearchBar from '../components/home-one/SearchBar';
import VideoStats from '../components/home-one/VideoStats';
import WelcomeBox from '../components/home-one/WelcomeBox';

const yachtBeranda = yachts.slice(0, JUMLAH_BERANDA);

function HomeOne() {
  const [pencarian, setPencarian] = useState(null); // null = belum ada pencarian

  const daftarYacht = useMemo(() => {
    if (pencarian === null || pencarian.jenis === 'All Yachts') {
      return yachtBeranda;
    }
    return yachts.filter((yacht) => yacht.type === pencarian.jenis);
  }, [pencarian]);

  let pesan = '';
  if (pencarian !== null) {
    pesan =
      daftarYacht.length === 0
        ? 'No yacht found for this type.'
        : `${daftarYacht.length} yacht found (${pencarian.jenis}) for ${pencarian.ambil}, ${pencarian.durasi}.`;
  }

  return (
    <>
      <HeroOne />
      <SearchBar onCari={setPencarian} />
      <AboutUs />
      <WelcomeBox />
      <FleetSection daftar={daftarYacht} pesan={pesan} />
      <OfferSection />
      <DestinationsSection />
      <VideoStats />
      <FeatureSection />
      <GuestTestimonials />
      <GuidesSection />
      <NewsFeed />
    </>
  );
}

export default HomeOne;
